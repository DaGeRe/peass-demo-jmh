#!/bin/bash
tar -xf demo-project-jmh.tar.xz
git clone --branch jmh https://github.com/DaGeRe/peass.git && \
	cd peass && \
	DEMO_HOME=$(pwd)/../demo-project-jmh && \
	./mvnw clean install -DskipTests=true -V

# If minor updates to the project occur, the version name may change
VERSION="40b6aa16322efee0ec6c9ddc835e281cc265f88b"
PREVIOUS_VERSION="50101b91bd5b3a43cb27c171829872ebad957ad7"

DEMO_PROJECT_JMH_PEASS=../demo-project-jmh_peass
EXECUTE_FILE=results/execute_demo-project-jmh.json

# It is assumed that $DEMO_HOME is set correctly and PeASS has been built!
echo ":::::::::::::::::::::SELECT:::::::::::::::::::::::::::::::::::::::::::"
./peass select -folder $DEMO_HOME -workloadType JMH

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile $EXECUTE_FILE -folder $DEMO_HOME -workloadType JMH -iterations 1 -warmup 0 -repetitions 1 -vms 2
