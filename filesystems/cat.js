#!/usr/bin/env node --harmony 
// create a file stream to pipe a file's data to stdout 

require('fs').createReadStream(process.argv[2]).pipe(process.stdout); 
