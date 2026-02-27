const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let events=[];
let registrations=[];

// GET EVENTS
app.get("/api/events",(req,res)=>{
res.json(events);
});

// CREATE EVENT
app.post("/api/events",(req,res)=>{
const event={id:Date.now(),...req.body};
events.push(event);
res.json(event);
});

// DELETE EVENT
app.delete("/api/events/:id",(req,res)=>{
events=events.filter(e=>e.id!=req.params.id);
res.send("Deleted");
});

// REGISTER EVENT
app.post("/api/register",(req,res)=>{
registrations.push(req.body);
res.send("Registered");
});

// VIEW REGISTRATIONS
app.get("/api/registrations",(req,res)=>{
res.json(registrations);
});

app.listen(5000,()=>console.log("Server running"));