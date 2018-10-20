const fs = require('fs'); 
const Transform = require('stream').Transform
const readbleStream = require('readable-stream').Transform

const toUpper = new Transform({
  transform: function(buf, enc, next) {
    next(null, buf.toString().toUpperCase()) 
  }
})

process.stdin
  .pipe(toUpper)
  .pipe(process.stdout)

