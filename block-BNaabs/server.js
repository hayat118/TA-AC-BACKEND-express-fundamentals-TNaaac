var express=require('express')
var logger=require('morgan')
var cookieParser=require('cookie-parser')

var app=express();

app.use(logger('dev'))
app.use(cookieParser())



app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html")
})
app.listen(5000,()=>{
  console.log('We are listining on port 5k')
})