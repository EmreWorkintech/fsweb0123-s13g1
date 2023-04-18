//1- IMPORTS
const express = require('express');
const hobbitsRouter = require('./hobbits/hobbits-router');
const derstekiPratikler = require('./pratikler/pratikler');


//2- instance of express
const server = express();

//3- GLOBAL MIDDLEWARE
server.use(express.json());

//4- ENDPOINTS: CRUD -> create(POST), read(GET), update(PUT), delete(DEL)
server.get('/', (req,res)=>{   //catch all
    res.status(200).send('API up and running');
} )


//Hobbits
server.use('/api/hobbits', hobbitsRouter);
server.use('/api/races', hobbitsRouter);
server.use('/api/background', hobbitsRouter);




//DERSTE YAPTIĞIMIZ PRATİKLER
server.use(derstekiPratikler);


server.use('*', (req,res)=>{   //catch all
    res.status(404).json({message: `Requested url not found`});
})


//EXPORT the server
module.exports = server;