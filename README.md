# Peass Demo for JMH

This demo shows how to detect a simple performance change and its cause by [Peass](https://github.com/DaGeRe/peass), using [JMH](https://openjdk.java.net/projects/code-tools/jmh/) (the Java Microbenchmark Harness). The `demo-project-jmh` contains three versions, where `ExampleBenchmarkTest` creates an instance of `ExampleBenchmarkClazz` and calls its method `calleeMethod`. This method calls `Callee.method1` which calls `Callee.innerMethod` which contains a `Thread.sleep`. In the 3rd version d9391a6, `Callee.innerMethod` contains a longer call to `Thread.sleep` than before. Therefore, performance gets worse in this version.

If you just want to see the results, you can also immediately open `example_results/peass/results/d9391a63295cb2aac8c46c060189b26165a4d29a/de.dagere.peass.ExampleBenchmarkClazz_calleeMethod.html`.

## Prerequisites

In current development state, it is recommended to use the latest development version of Peass. The following commands require (at least) installed OpenJDK 8, maven and tar and have been tried on Ubuntu 18.04 and 20.04.

For installing the latest development version of Peass run `git clone https://github.com/DaGeRe/peass.git && cd peass && mvn clean install` inside the `peass-demo-jmh`-folder in order to clone and build Peass (optionally add `-DskipTests` to the `mvn`-call to speed up building).

To get the example running, untar the example project using `tar -xvf demo-project-jmh.tar.xz` (which is a git project itself and is therefore managed inside this repo as tar). For the following commands, we assume that you are in the peass-folder and that the `demo-project-jmh` is in the folder one level above.

So you should got:

* peass-demo-jmh/peass

* peass-demo-jmh/demo-project-jmh

* peass-demo-jmh/demo-project-jmh.tar.xz

and than run `cd peass`.

## Executing the Regression Test Selection

Run `./peass select -folder ../demo-project-jmh/` (takes ~1 minute). After the selection, you'll find `results/execute_demo-project-jmh.json`, an executionfile for the project, which specifies which tests could have changed performance based on source code analysis.

## Executing the Measurement and Getting the Changes

Run `./peass measure -executionfile results/execute_demo-project-jmh.json -folder ../demo-project-jmh/  -vms 5 -iterations 5 -warmup 5 -repetitions 5` in order to obtain performance measurements. For real examples, higher execution times are needed, but for the demo case, this is sufficient.

Afterwards, run `./peass getchanges -data ../demo-project-jmh_peass/ -dependencyfile results/deps_demo-project-jmh.json` (takes ~1 second) in order to identify the changes. <br>
Now in `results/changes_demo-project-jmh.json`, all changes are listed. As expected, d9391a63295cb2aac8c46c060189b26165a4d29a contains a change in `ExampleBenchmarkClazz.calleeMethod`.

## Executing the Root Cause Analysis

Execute `./peass searchcause -vms 3 -iterations 5 -warmup 1 -repetitions 5 -version d9391a63295cb2aac8c46c060189b26165a4d29a -test de.dagere.peass.ExampleBenchmarkClazz\#calleeMethod -folder ../demo-project-jmh/ -executionfile results/execute_demo-project-jmh.json` (takes some time) in order to get changes.

To finally get the root cause analysis visualization, run `./peass visualizerca -data ../demo-project-jmh_peass/ -propertyFolder results/properties_demo-project-jmh/`. <br>
Now, `results/d9391a63295cb2aac8c46c060189b26165a4d29a` contains the file `de.dagere.peass.ExampleBenchmarkClazz_calleeMethod.html` which you can visualize in your browser. You'll see that *ExampleBenchmarkClazz#calleeMethod*, *Callee#method1* and *Callee#innerMethod* are red - therefore, all these have gotten slower and *Callee#innerMethod* is very likely the root cause of the performance change.

## Use the provided shell-script
Instead of running each above step on its own, you can also run `executeAll.sh`. This will execute the described steps and also test some of the results for correctness.

## Spotting Bugs

In case any step did not work, you can check whether the results (both in `demo-project-jmh_peass`, mostly results for potential remote execution and debugging, and in `peass/results`, mostly results which are relevant to the developer) look correct. If this does not work, do not hesitate to contact the maintainer.
