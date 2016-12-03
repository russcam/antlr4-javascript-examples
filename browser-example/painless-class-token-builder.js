var fs = require('fs');
var readline = require('linebyline');
var jsonfile = require('jsonfile');
jsonfile.spaces = 2;

// special case def here, which is not included in the type list
var classes = [{ name : "def" }];
var fileCount = 0;

function consoleWriteError(err) {
    if (err) {
        console.error(err);
    }
}

function readClassesFromFiles(dirname, onLine, cb, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    fileCount = filenames.length;
    filenames.forEach(function(filename) {
        var lineReader = readline(dirname + filename);
        lineReader.on('line', onLine);
        lineReader.on('end', function () { 
            fileCount -= 1; 
            if (fileCount === 0) {
                cb();
            }
        });
    });
  });
}

function readLine(line) {
    line = line.trim();
    
    if (line.length === 0 || line.charAt(0) === "#") {
        return;
    }

    if (line.startsWith('class ')) {       
        var currentClass = line.split(" ")[1];
        classes.push({ name : currentClass });
    }
}

function writeClassFile() {
    var file = 'browser-example/Definition.js';

    var definition = "var classes = " + 
                     JSON.stringify(classes) + ";" +
                     "var classNames = classes.map(function (c) {" +
                     "  return c.name;" +
                     "});" +
                     "" +
                     "var Definition = {" +
                     "    isSimpleType: function(localctx, lexer) {" + 
                     "        return classNames.indexOf(lexer.text) > -1;" +
                     "    }" +
                     "};" +
                     "module.exports = Definition;";


   fs.writeFile(file, definition, consoleWriteError); 
}

readClassesFromFiles("browser-example/painless/", readLine, writeClassFile, consoleWriteError);

