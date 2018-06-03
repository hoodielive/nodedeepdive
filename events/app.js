
const EventEmitter = require('events'); 

// Class a container for functions, properties - related methods and properties 

var emitter = new EventEmitter(); 

// Register a Listener
emitter.on('messageLogged', () => {
	console.log('Listener called!'); 

}); 

// Raise an event -> you also have to register a listener
emitter.emit('messageLogged'); 

// emit -> make a noise or produce something, signaling an event has happened
