var app=express();


app.use('/users',(req,res,next)=>{
  console.log(req.method,req.url);
  next()
})

app.get('/',(req,res)=>{
  res.send('Welcome')
})

app.listen(3000,()=>{
  console.log('We are listing on port 3k')
})
