require('dotenv').config;
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("server for get request is ready");
})

app.listen(port, () => {
console.log(`app listing on localhost:${port}`);
})