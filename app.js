const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/add/:numberOne/:numberTwo", (req, res) => {
  const { numberOne, numberTwo } = req.params;
  res.send(numberOne + numberTwo);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
