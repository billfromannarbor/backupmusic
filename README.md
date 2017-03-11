# backupmusic
backup music files

#*THIS IS UNDER CONSTRUCTION*

#Supporting libraries
```bash
#Install globally for the user - remove the -g if you want to install these locally
npm install -g mocha
npm install -g jsdoc
npm install -g istanbul
npm install -g js-beautify
npm install -g jscs
```

#Cleanup code, Style Check, Test, Cover, and Generate documents
```bash
bin/integration.sh # do everything
bin/cleanup.sh # just cleanup the code and style check it
bin/docGenerate.sh # just generate the code documentation
bin/testAndCover.sh # just test and create a coverage report
```

#Run the application
```bash
bin/backupMusic.sh ./mymusic ./backupofmymusic
```


