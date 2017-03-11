#Beautifiers and style checkers

#javascript beautifier
js-beautify index.js -r --good-stuff -s 2
js-beautify ./test/indexTest.js -r --good-stuff -s 2

#javascript code style checker
jscs index.js
jscs ./test/indexTest.js
