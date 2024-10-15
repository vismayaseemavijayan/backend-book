const express = require("express");
const app = express();
app.use(express.json());
require ("dotenv").config();
require("./connection/conn");
const User = require("./routes/user");



// routes
app.use("/api/v1",User)

//creating port
app.listen(process.env.PORT,()=>{
    console.log(`server started at PORT ${process.env.PORT}`);
    
});