const express=require('express');
const bodyParser = require('body-parser');

const app=express();

const users=[
   {id:1,name:"arsal azeem"},
   {id:2,name:"arsal azeem"},
   {id:3,name:"arsal azeem"}
]
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
app.post('/collections/delete',(req,res)=>{
  console.log('/collections/delete');
  // (req.body["name"]=="arsal") ? res.send(`Welcome dear ${req.body["name"]}`) : res.send(`welcome ${req.body["name"]}`)
  const found = users.find(num => num["id"] == req.body["id"]);
 if (found){
   res.send(found);
 }
 else {
   res.send("The id does not exits");
 }
  }); 
  app.post('/fetch/collections',(req,res)=>{
  console.log('/fetch/collections');
  // (req.body["name"]=="arsal") ? res.send(`Welcome dear ${req.body["name"]}`) : res.send(`welcome ${req.body["name"]}`)
  users.push({name:req.body["name"]});
  res.send(users);
  }); 
app.listen(3000,()=>{
  console.log("Listening on port 3000");
});