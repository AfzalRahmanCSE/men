const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const apiroutes=require('./routes/api')

require('./models/index')


app.use(bodyParser.json())
app.use('/',apiroutes)


// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
app.listen(3000,()=>{
    console.log('Server Listening on port 3000....')
})