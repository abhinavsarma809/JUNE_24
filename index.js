const express = require('express');
const app = express();
const env= require('dotenv');
env.config();
const port = process.env.port||5000;

app.listen(port,()=>{
    console.log(`server is running in${port}`);

});

app.get("/",(req,res)=>{
    res.send("hi hello world");
})
