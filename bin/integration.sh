source bin/cleanup.sh
source bin/testAndCover.sh
source bin/docGenerate.sh
rm ./backupofmymusic
bin/backupMusic.sh ./mymusic ./backupofmymusic
rm ./backupofmymusic




