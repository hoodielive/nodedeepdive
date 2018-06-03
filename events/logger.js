
const EventEmitter = require('events'); 

var url = 'http://mylogger.io/log'; 

class Logger extends EventEmitter {

    // the function key word is not needed inside of classes, hence it is dropped
    log(messageLogged) {
        console.log(messageLogged); 

    // Raise an event -> you also have to register a listener
    this.emit('messageLogged', {id: 1, url: 'http://' }); 
  }; 
} 

module.exports = Logger; 
