const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        mes:"this is home page"
    });
})

app.listen(3000,()=>{
    console.log("Server started successfull");  
})