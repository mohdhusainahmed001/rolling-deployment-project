const express = require("express");

const app = express();

const VERSION = process.env.VERSION || "v2";

app.get("/", (req, res) => {
  res.send(`Application Version: ${VERSION}`);
});

app.listen(9999, () => {
  console.log("App running on port 3000");
});