//IMPORTS
const express = require('express');

//instance of express
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json());

//ENDPOINTS: CRUD -> create, read, update, delete
server.get('/hobbits', (req,res)=>{
    //returns all hobbits
})

server.post('/hobbit', (req,res)=>{
    //creates a new hobbit
})


//EXPORT the server
module.exports = server;