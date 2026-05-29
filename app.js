const express = require("express");

const app = express();

const VERSION = process.env.VERSION || "v2";

app.get("/", (req, res) => {
  res.send(`Rolling Deployment App ${VERSION}`);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log(`App running on port 3000`);
});