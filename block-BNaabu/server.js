var express=require('express')
var logger=require('morgan')
var cookieParser=require('cookie-parser')

var app=express()

// middleware
app.use('/admin',(req,res,next)=>{
  next("unauthorised")
})

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))






// route
app.get('/',(req,res)=>{
  console.log('Welcome')
})
app.get('/about',(req,res)=>{
  res.send('about page')
})
// error
app.use((req,res,next)=>{
  res.send('page not found')
})
app.use((err,req,res,next)=>{
  res.send(err)
})


app.listen(4000,()=>{
  console.log('We are listening on port 4 k')
})