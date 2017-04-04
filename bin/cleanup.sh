#Beautifiers and style checkers
source bin/env.sh

#javascript beautifier
js-beautify index.js -r --good-stuff -s 2
js-beautify ./test/indexTest.js -r --good-stuff -s 2

js-beautify ./api/api.js -r --good-stuff -s 2
js-beautify ./api/test/apiTest.js -r --good-stuff -s 2

#javascript code style checker
jscs index.js
jscs ./test/indexTest.js
jscs ./api/api.js
jscs ./api/test/apiTest.js
