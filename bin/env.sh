#Config
App="backupmusic"
DistributionDirectory="dist"
StaticContentDist="$DistributionDirectory/static"
APIDist="$DistributionDirectory/api"

serverSideCodePath=""
serverSideUnitTestPath=""
clientSideCodePath=""
clientSideUnitTestPath=""
htmlPath=""
cssPath=""

#Server Side

#api
unitTestPath="api/test/*.js"
codePath="api/*.js $unitTestPath"
serverSideCodePath="$serverSideCodePath $codePath "
serverSideUnitTestPath="$serverSideUnitTestPath $unitTestPath "
