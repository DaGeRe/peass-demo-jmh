#!/bin/bash
tar -xf demo-project-jmh.tar.xz
git clone --branch jmh https://github.com/DaGeRe/peass.git && \
	cd peass && \
	DEMO_HOME=$(pwd)/../demo-project-jmh && \
	./mvnw clean install -DskipTests=true -V

# If minor updates to the project occur, the version name may change
VERSION="90c2c44be016087603b2e29e49fd4e4d2115d0ee"
PREVIOUS_VERSION="90d82a78c2d7c15785fe54ea496fa83db3c8f873"

DEMO_PROJECT_JMH_PEASS=../demo-project-jmh_peass
EXECUTE_FILE=results/execute_demo-project-jmh.json

# It is assumed that $DEMO_HOME is set correctly and PeASS has been built!
echo ":::::::::::::::::::::SELECT:::::::::::::::::::::::::::::::::::::::::::"
./peass select -folder $DEMO_HOME -workloadType JMH

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile $EXECUTE_FILE -folder $DEMO_HOME -workloadType JMH -iterations 1 -warmup 0 -repetitions 1 -vms 2
