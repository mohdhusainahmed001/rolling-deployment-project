const express = require("express");

const app = express();

const VERSION = process.env.VERSION || "v1";

app.get("/", (req, res) => {
  res.send(`Application Version: ${VERSION}`);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});