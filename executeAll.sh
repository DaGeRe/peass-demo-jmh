#!/bin/bash
tar -xf demo-project-jmh.tar.xz
git clone --branch jmh https://github.com/DaGeRe/peass.git && \
	cd peass && \
	DEMO_HOME=$(pwd)/../demo-project-jmh && \
	./mvnw clean install -DskipTests=true -V

# If minor updates to the project occur, the version name may change
VERSION="90c2c44be016087603b2e29e49fd4e4d2115d0ee"
INITIALVERSION="90d82a78c2d7c15785fe54ea496fa83db3c8f873"

DEMO_PROJECT_PEASS=../demo-project-jmh_peass
EXECUTE_FILE=results/execute_demo-project-jmh.json

# It is assumed that $DEMO_HOME is set correctly and PeASS has been built!
echo ":::::::::::::::::::::SELECT:::::::::::::::::::::::::::::::::::::::::::"
./peass select -folder $DEMO_HOME -workloadType JMH

initialSelected=$(grep "initialversion" -A 1 results/deps_demo-project-jmh.json | grep "\"version\"" | tr -d " \"," | awk -F':' '{print $2}') 
if [ "$initialSelected" != "$INITIALVERSION" ]
then
	echo "Initialversion should be $INITIALVERSION, but was $initialSelected"
	exit 1
fi

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile $EXECUTE_FILE -folder $DEMO_HOME -workloadType JMH -iterations 1 -warmup 0 -repetitions 1 -vms 2

./peass getchanges -data ../demo-project-jmh_peass/ -dependencyfile results/deps_demo-project-jmh.json
test_sha=$(grep -A1 'versionChanges" : {' results/changes_demo-project-jmh.json | grep -v '"versionChanges' | grep -Po '"\K.*(?=")')
if [ "$VERSION" != "$test_sha" ]
then
    echo "commit-SHA ("$VERSION") is not equal to the SHA in changes_demo-project.json ("$test_sha")!"
    cat results/statistics/demo-project-jmh.json
    exit 1
else
    echo "changes_demo-project.json contains the correct commit-SHA."
fi

./peass searchcause -vms 5 -iterations 1 -warmup 0 -version $VERSION \
	 -test de.dagere.peass.ExampleBenchmark\#testMethod \
	 -workloadType JMH \
	 -folder $DEMO_HOME \
	 -executionfile $EXECUTE_FILE

./peass visualizerca -data $DEMO_PROJECT_PEASS -propertyFolder results/properties_demo-project-jmh/
