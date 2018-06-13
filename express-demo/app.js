const express = require('express'); 

const app = express(); 

const Joi = require('joi');

// courses api
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]; 

// middleware 
app.use(express.json()); 

// routes => 
app.get('/', (req, res) => { 
    res.send('hello, aeaon'); 
}); 

app.get('/api/courses', (req, res) => { 
    res.send(courses); 
}); 

app.get('/api/courses/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if (!course) res.status(404).send('The course with the given ID was not found')
    res.send(course);
}); 

// POST Request 
app.post('/api/courses', (req, res) => { 
    const schema = {
        name: Joi.string().min(3).required()
    }; 

    const result = Joi.validate(req.body.schema);

    if(result.error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message); 
        return; 
    }
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course); 
    res.send(course);
}); 

// PORT ENV 

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}...`));


