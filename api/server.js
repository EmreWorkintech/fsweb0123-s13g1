//1- IMPORTS
const express = require('express');
const hobbitsRouter = require('./hobbits/hobbits-router');
const derstekiPratikler = require('./pratikler/pratikler');
const { welcome, passwordCheck } = require('./auth/auth-middleware');
const morgan = require('morgan');

//2- instance of express
const server = express();

//3- GLOBAL MIDDLEWARE
server.use(express.json());
server.use(morgan('dev'));


//4- ENDPOINTS: CRUD -> create(POST), read(GET), update(PUT), delete(DEL)
//4.1 API check
server.get('/', welcome, passwordCheck, (req,res)=>{ 
    res.status(200).send(`API up and running. `);
} )


//4.2 Hobbits resource
server.use('/api/hobbits', passwordCheck, hobbitsRouter);
server.use('/api/races', hobbitsRouter);
server.use('/api/background', hobbitsRouter);


//4.3 DERSTE YAPTIĞIMIZ PRATİKLER için router
server.use('/api/pratikler', derstekiPratikler);


//4.4 catch all
server.use('*', (req,res)=>{ 
    res.status(404).json({message: `Requested url not found`});
})

//ERROR HANDLER MIDDLEWARE
server.use((error,req,res,next)=>{ //eslint-disable-line
    res.status(error.status || 500).json({message: error.message || 'Server error!..'})
})

//EXPORT the server
module.exports = server;