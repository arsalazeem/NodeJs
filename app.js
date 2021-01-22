const fs=require('fs')

fs.writeFile('./file.txt','Hei This is over writing the file please forgive me',(err,data)=>{
if (err){
    console.log(err);
}
else {
    console.log("A new messege has been created");
}
})

