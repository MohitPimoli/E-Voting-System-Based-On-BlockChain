const express = require('express');
const server = express();

server.get('/demo',(req,res)=>{
    res.send('Done!');
})
server.listen(5000,()=>{
    console.log('server is running');
})
