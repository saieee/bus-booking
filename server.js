const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const json = require('body-parser/lib/types/json');

dotEnv.config();

const app = express();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongo Db is Connected")
})
.catch((err)=>{
    console.log(err)
});

app.use(json());

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`)
})