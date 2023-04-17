//IMPORTS
const express = require('express');
const Hobbit = require('./hobbits/hobbits-model');

//instance of express
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json());

//ENDPOINTS: CRUD -> create, read, update, delete
server.get('/hobbits', (req,res)=>{
    const hobbits = Hobbit.getAll();
    res.status(200).json(hobbits);
})

server.post('/hobbit', (req,res)=>{
    const payload = req.body;
    if(payload.name && payload.name.trim() && payload.name.trim().length > 3) {
        const newHobbit = Hobbit.create(req.body);
        res.status(201).json(newHobbit);
    } else {
        res.status(400).json({message: 'name bilgisi eksik veya 3 karakterden az!...'});
    }
    
})

server.put('/hobbit/:id', (req,res)=>{
    const updatedHobbit = Hobbit.update(req.body, req.params.id);
    res.status(201).json(updatedHobbit);
})


//EXPORT the server
module.exports = server;