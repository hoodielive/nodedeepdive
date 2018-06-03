
const os = require('os'); 

var totalMemory = os.totalmem(0); 
var freeMemory = os.freemem(); 

console.log(`Total Memory: ${totalMemory}`); 
console.log(`Free Memory: ${freeMemory}`); 
