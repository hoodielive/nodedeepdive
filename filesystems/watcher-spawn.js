"use strict";

const fs = require('fs'), spawn = require('child_process').spawn, filename = process.argv[2];

if (!filename) {
    throw Error("A file to watch must be specified!"); 
}

fs.watch(filename, function() {
  let ls = spawn('ls', ['-lh', filename]); // the obj returned by spawn is a ChildProcess. Its stdin, stdout, and stderr
  // properties are Streams that can be used to read or write data. 
    ls.stdout.pipe(process.stdout); 
});

console.log("Now watching " + filename + " for changes...");

