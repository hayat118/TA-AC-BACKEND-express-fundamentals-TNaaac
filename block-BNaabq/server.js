var express=require('express')
var cookiePraser=require('cookie-parser');
var logger=require('morgan')

var app=express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + "/public"))

app.use(cookiePraser());

app.use(logger('dev'))

app.use((req,res,next)=>{
  console.log(req.cookies)
  next()
})

app.use('/about',(req,res,next)=>{
  res.cookie('username','arya');
  res.end('about page')
})



app.get('/',(req,res)=>{
  // console.log('Welcome')
  res.sendFile(__dirname + "/index.html")
})

app.listen(4000,()=>{
  console.log('We are listening on port 4k')
})