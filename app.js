const express=require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('This is get end point')
  });
// let myFunction = (req, res, next) => {
//   console.log('i am hererer', req.body);
//   return next();
// };
// let responseFunction = (req, res, next) => {
//   res.json({ data: req.body });
// };
  app.post('/fetch/collections',(req,res)=>{
  if (req.body["name"]=="arsal")
  res.send("Your name is arsal");
  else
  res.send("Your name is something else");
  })
app.listen(3000,()=>{
  console.log("Listeining on port 300");
});