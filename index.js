const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello I am live");
});

app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/data.json");
});

app.listen(port);
