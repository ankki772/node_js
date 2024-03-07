import { config } from 'dotenv';
import express from 'express'; // module js supports asynchronous importing of modules 
const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("server for get request is ready");
})

app.listen(port, () => {
console.log(`app listing on localhost:${port}`);

})