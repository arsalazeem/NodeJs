const { required } = require("joi");


const logger=(res,req,next)=>{
    console.log("User is logged in");
    next();
}

module.exports=logger;