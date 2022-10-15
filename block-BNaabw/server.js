var express=require('express')
var logger=require('morgan')
var cookiePraser=require('cookie-parser')

var app=express()

// middleware
app.use(logger('dev'))
app.use(cookiePraser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=>{
  res.cookie("username","sam");
  next();
})

// routes
app.get('/',(req,res)=>{
  // res.send('Welcome')
  res.sendFile(__dirname + '/index.html')
})
app.get('/users',(req,res)=>{
  res.send('users')
})
app.get('/project',(req,res)=>{
  res.sendFile(__dirname + '/project.html')
})



app.use((req,res,next)=>{
  res.send('page not found!')
})




app.listen(4000,()=>{
  console.log('We are listening on port 4k')
})
