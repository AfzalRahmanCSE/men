const express=require('express')
const app=express.Router()
const userRoute=require('./user')

app.use('/',userRoute)

module.exports=app;