const express=require('express');
const bodyParser = require('body-parser');
const Joi=require('joi');
const Logger=require('./authentication');
const app=express();

app.use(Logger);

const users=[
   {id:1,name:"arsal azeem"},
   {id:2,name:"arsal azeem"},
   {id:3,name:"arsal azeem"}
]
app.use(bodyParser.json());
app.post('/joitest', function (req, res) {
  const schema = Joi.object({ name: Joi.string() .min(6) .required(),
    });
    
    const validation = schema.validate(req.body);
    res.send(validation);
  });
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
  const port=process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});