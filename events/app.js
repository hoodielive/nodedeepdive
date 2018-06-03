
const EventEmitter = require('events'); 
const logme = require('./logger'); 

// emit -> make a noise or produce something, signaling an event has happened

// Class a container for functions, properties - related methods and properties 

var emitter = new EventEmitter(); 

// Register a Listener
emitter.on('messageLogged', function(arg) {
	console.log('Listener called!', arg); 

}); 

// Raise an event -> you also have to register a listener
emitter.emit('messageLogged', {id: 1, url: 'http://' }); 

logme('I got your message young man!'); 


