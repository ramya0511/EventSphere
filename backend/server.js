const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/events", (req,res)=>{
    res.json([{name:"Hackathon"},{name:"Tech Talk"}]);
});

app.listen(5000,()=>{
    console.log("Backend running");
});