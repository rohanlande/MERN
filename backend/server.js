const express = require("express");
const notes = require("./data/notes");
const env = require('dotenv')
//dotenv file contains all the secret information of our wesite
//or importamt data
const app = express(); // Object created which includes express

app.get("/", (req, res) => { 
  res.send("API is running..");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id/:id2", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(req.params);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT= process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
