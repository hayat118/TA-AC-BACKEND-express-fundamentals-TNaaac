var express=require('express')
var logger=require('morgan')

var app=express()

// 
app.use(logger())
app.use(express.json)
app.use(express.urlencoded({extended:false}))

// 
app.get('/',(req,res)=>{
  res.send(req.body)
  res.send(req.url)
})
app.get('/json',(req,res)=>{
  res.send(json.body)
})
// 
app.listen(4000,()=>{
  console.log('We are listining on port 4k')
})