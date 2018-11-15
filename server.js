const express = require('express');
const app = express();
const status = ["down", "up", "degraded"];

const ranGen = () => {
  return Math.floor((Math.random() * 3));
}

app.get('/', (req, res) => {
  res.json({
    "system1": status[ranGen()],
    "system2": status[ranGen()],
    "system3": status[ranGen()],
    "system4": status[ranGen()],
    "system5": status[ranGen()],
    "system6": status[ranGen()],
  })
})

app.listen(3000, () => {
  console.log("Listening");
});