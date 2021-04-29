const express = require('express')//importing the express framework
const routerInformation=require('./asgn-router');//imprting routing paths
const mongoose = require('mongoose');//importing the mongoos library

const mongoDB = 'mongodb://localhost/asgn';//using the database uri
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});//creating a connectionwith the database
var db = mongoose.connection;//declaring the db variable
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//verifying the connection
mongoose.set('useFindAndModify', false);//bringing back the depricated findOneAndUpdate method
const app=express();//using the express in app
app.use(express.urlencoded({ extended: true }));//enabling the api POST request to recieve properly
const PORT=3000;//declaring a PORT
app.use(routerInformation);//Declaring the routerPaths in the main method

app.listen(PORT,()=>{
    console.log(`App is listening to port: ${PORT}`);//Listening the PORT 3000
})