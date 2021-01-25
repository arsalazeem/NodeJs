const express=require('express');


const app=express();
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.post('/fetch/collections', function (req, res) {
   console.log(req.params);
  })
app.listen(3000,()=>{
  console.log("Listeining on port 300");
});