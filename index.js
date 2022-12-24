const express = require('express'); 
const app = express();                      
const fs=require('fs');  

// folder created                 
if(!fs.existsSync('./Time')){             
  fs.mkdir('./Time',(err)=>{                
    if(err) throw err;                                 
    console.log('folder created');
  });
}
 
//set the timeout for the insert the data
setInterval(()=>{                               
  fs.appendFile('./Time/Currentdate-time.txt',`\n${new Date().toLocaleTimeString()}`,'utf8',(err)=>{
    if(err) throw err;
    console.log("Data");
  })
},1000);

//home
app.get('/',(req,res)=>{
  res.sendFile('./watch/CurrentTimeStamp.txt',{root:__dirname});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log("Listening to PORT",PORT);
});
