const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let events = [
  {
    id: 1,
    title: "Hackathon",
    date: "2026-03-10",
    location: "Auditorium",
    description: "24 hour coding challenge"
  }
];

// GET EVENTS
app.get("/api/events", (req, res) => {
  res.json(events);
});

// CREATE EVENT
app.post("/api/events", (req, res) => {
  const newEvent = {
    id: events.length + 1,
    ...req.body
  };

  events.push(newEvent);
  res.json(newEvent);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});