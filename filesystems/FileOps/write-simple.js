const fs = require('fs'); 

fs.writeFile('target-two.txt', 'a witty message', function (err) {
  if (err) {
    throw err;  
  }
  console.log("File Saved!"); 
});
