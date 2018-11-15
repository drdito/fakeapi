const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const status = ["down", "up", "degraded"];

const ranGen = () => {
  return Math.floor((Math.random() * 3));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get('/data', (req, res) => {
  res.json({
    "system1": status[ranGen()],
    "system2": status[ranGen()],
    "system3": status[ranGen()],
    "system4": status[ranGen()],
    "system5": status[ranGen()],
    "system6": status[ranGen()],
  })
})

app.listen(PORT, ()=> {
  console.log("Server is listening on port" + PORT);
});