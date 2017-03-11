#Runs Mocha tests and instanbul code coverage
istanbul cover _mocha $serverSideUnitTestPath

#Move Code Coverage into static directory
cp -r coverage/lcov-report/ static/coverage/