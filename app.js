const express = require('express');
const app = express()



let PORT =8080;
app.listen(PORT,()=>{
console.log(`server is connected to port ${PORT}`);    
})