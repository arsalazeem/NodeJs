const express=require('express');
const bodyParser = require('body-parser');
const Joi=require('joi');
const Logger=require('./authentication');
const morgan=require('morgan');
const helmet=require('helmet');
const app=express();

app.use(Logger);
app.use(helmet());
app.use(morgan('tiny'));
const users=[
   {id:1,name:"arsal azeem"}
]
app.use(bodyParser.json());

const appendUser=(value)=>{
  var element={};
  element.id=Math.floor((Math.random() * 100000) + 1);
  element.name=value;
  users.push(element);
}
app.post('/joitest', function (req, res) {
  if (req.body.name.length<1){
    res.send("Lenght of name should be greater then 0");
    return false;
  }
  else {
  // const schema = Joi.object({ name: Joi.string() .min(6) .required(),
  appendUser(req.body.name);
  res.send(users);
  }
    });
    
    // const validation = schema.validate(req.body);
    // res.send(validation);
// let myFunction = (req, res, next) => {
//   console.log('i am hererer', req.body);
//   return next();
// };
// let responseFunction = (req, res, next) => {
//   res.json({ data: req.body });
// };

app.post('/collections/delete',(req,res)=>{
  console.log("I am working");
  res.send("Working");
  }); 

  app.get('/fetch/detail/:id',(req,res)=>{
    console.log(req.params.id);
  });
  app.get('/',(req,res)=>{
    res.send("Hei how are you");
  });
  const port=process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});