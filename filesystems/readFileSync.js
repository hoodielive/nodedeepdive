// synchronous example, quite useful in some cases 

const 
  fs = require('fs'), 
  data = fs.readFileSync('target.txt'); 

process.stdout.write(data.toString()); 

/** 
 * The return value of readFileSync is a buffer:
 * the same as the paramater passed to callbacks of async readFile()
**/ 

