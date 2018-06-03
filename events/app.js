
const EventEmitter = require('events'); 

// emit -> make a noise or produce something, signaling an event has happened


// Class a container for functions, properties - related methods and properties 



const Logger = require('./logger'); 
const logger = new Logger(); 

// Register a Listener
logger.on('messageLogged', function(arg) {
	console.log('Listener called!', arg); 
}); 

logger.log('I got your message young man!'); 


