const http = require("http");
const app = require("./backend/app");


const port = process.env.PORT || 9000;



const server = http.createServer(app);



server.on('close',()=>{
    console.log('server close');
})
server.on('error',()=>{
    console.log('serve error');
})
server.on('listening',()=>{
    console.log('server listening');
})

server.listen(port);