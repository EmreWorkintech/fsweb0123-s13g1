const server = require('./api/server');

server.listen(3000, ()=> {
    console.log(`server running on port 3000`);
})