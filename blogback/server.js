const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/User')
require('dotenv').config()
app.use(cors())
app.use(express.json())


let uri = process.env.DATABASE_URL;
mongoose.connect(
    'mongodb+srv://manasa:manasa4nasa@cluster0.kirzzdu.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.log(error));

// app.get('/',(req,res)=>{
//     res.json({
//         message:'welsome to the api'   
//     })
// })

app.get('/',(req,res)=>{
    const { username, password, email } = req.body;
    res.json({ username, password, email});
})

app.post('/signup',async(req,res)=>{
    const {username, password, email} = req.body;
    res.json({ username,password,email});

})
const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`"Server is running on port ${port}"`);
})

//------------------------------APIs---------------------------
// const apiRoute=require('./routes/api')
// app.use("/api",apiRoute)
//-----------------------Database Connection---------------------
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ProjectDB', { useNewUrlParser: true ,useUnified
// Topology: true })