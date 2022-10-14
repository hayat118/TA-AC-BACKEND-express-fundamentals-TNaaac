var express=require('express')
var logger=require('morgan')
var cookieParser=require('cookie-parser')

var app=express();

// middleware
app.use(logger());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// routes
app.get('/',(req,res)=>{
  res.send('<h2>Welcome to express <h2>')
})
app.get('/about',(req,res)=>{
  res.send('My name is qwerty')
})
app.post('/form',(req,res)=>{
  console.log(req.body)
})
app.post('/json',(req,res)=>{
  console.log(req.body)
})
app.get('/users/:username',(req,res)=>{
  var username=req.params.username;
  res.send(username)
})


app.listen(3000,()=>{
  console.log('We are listening on port 3k')
})
