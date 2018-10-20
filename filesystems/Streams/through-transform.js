const fs = require("fs"),
  through = require("through2");

fs.createReadStream(process.argv[2])
  .pipe(through(write))
  .pipe(process.stdout);

/**  
 * I am using node-core here but I will prefer readable packages because I do not want to risk Node's updates breaking
 * my apps 
**/

/**function write(buf, enc, next) {
  next(null, buf.toString().toUpperCase());
}
**/

function toUpper () { 
  return through(function (buf, enc, next) {
    next(null, buf.toString().toUpperCase()) 
  });
};

