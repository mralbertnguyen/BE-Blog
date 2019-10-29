require('dotenv').config()
let express = require('express');
let event = require('events');

const app = express();
const routes = require('./utils/route');

const port = process.env.PORT;

app.get(routes.GET_VIDEO_LIST,(req, res)=>{
    console.log("Called api get list videos");
    return res.end("return");
})


let server  = app.listen(port,()=>{
    let host = server.address().address;
    let port = server.address().port;

    console.log("App listening at http:%s:%s", host,port);
})
