#!/bin/bash
DEMO_PROJECT_NAME=demo-project-jmh

tar -xf "$DEMO_PROJECT_NAME".tar.xz
git clone --branch jmh https://github.com/DaGeRe/peass.git && \
	cd peass && \
	./mvnw clean install -DskipTests=true -V

DEMO_HOME=$(pwd)/../$DEMO_PROJECT_NAME
DEMO_PROJECT_PEASS=../"$DEMO_PROJECT_NAME"_peass
EXECUTION_FILE=results/execute_"$DEMO_PROJECT_NAME".json
DEPENDENCY_FILE=results/deps_"$DEMO_PROJECT_NAME".json
CHANGES_DEMO_PROJECT=results/changes_"$DEMO_PROJECT_NAME".json
PROPERTY_FOLDER=results/properties_"$DEMO_PROJECT_NAME"/

RIGHT_SHA="$(cd "$DEMO_HOME" && git rev-parse HEAD)"

# It is assumed that $DEMO_HOME is set correctly and PeASS has been built!
echo ":::::::::::::::::::::SELECT:::::::::::::::::::::::::::::::::::::::::::"
./peass select -folder $DEMO_HOME -workloadType JMH

INITIALVERSION="1e4373dd2e642ff598e567baa0f3e2325eb635de"
INITIAL_SELECTED=$(grep "initialversion" -A 1 $DEPENDENCY_FILE | grep "\"version\"" | tr -d " \"," | awk -F':' '{print $2}')
if [ "$INITIAL_SELECTED" != "$INITIALVERSION" ]
then
	echo "Initialversion should be $INITIALVERSION, but was $INITIAL_SELECTED"
	exit 1
fi

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile $EXECUTION_FILE -folder $DEMO_HOME -workloadType JMH -iterations 1 -warmup 0 -repetitions 1 -vms 2

echo "::::::::::::::::::::GETCHANGES::::::::::::::::::::::::::::::::::::::::"
./peass getchanges -data $DEMO_PROJECT_PEASS -dependencyfile $DEPENDENCY_FILE

#Check, if $CHANGES_DEMO_PROJECT contains the correct commit-SHA
TEST_SHA=$(grep -A1 'versionChanges" : {' $CHANGES_DEMO_PROJECT | grep -v '"versionChanges' | grep -Po '"\K.*(?=")')
if [ "$RIGHT_SHA" != "$TEST_SHA" ]
then
    echo "commit-SHA ("$RIGHT_SHA") is not equal to the SHA in $CHANGES_DEMO_PROJECT ("$TEST_SHA")!"
    cat results/statistics/"$DEMO_PROJECT_NAME".json
    exit 1
else
    echo "$CHANGES_DEMO_PROJECT contains the correct commit-SHA."
fi

# If minor updates to the project occur, the version name may change
#VERSION=$(grep '"testcases" :' -B 1 $EXECUTION_FILE | head -n 1 | tr -d "\": {")
VERSION="4eafa11f3aeace2c8f8156adf187a0d5dc393c3a"
echo "VERSION: $VERSION"

echo "::::::::::::::::::::SEARCHCAUSE:::::::::::::::::::::::::::::::::::::::"
./peass searchcause -vms 5 -iterations 1 -warmup 0 -version $VERSION \
	 -test de.dagere.peass.ExampleBenchmark\#testMethod \
	 -workloadType JMH \
	 -folder $DEMO_HOME \
	 -executionfile $EXECUTION_FILE

echo "::::::::::::::::::::VISUALIZERCA::::::::::::::::::::::::::::::::::::::"
./peass visualizerca -data $DEMO_PROJECT_PEASS -propertyFolder $PROPERTY_FOLDER

#Check, if a slowdown is detected for innerMethod
#Check SOURCE_METHOD_LINE
