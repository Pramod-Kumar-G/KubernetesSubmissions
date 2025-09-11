require("dotenv").config();
const express = require("express");
const randomStringGenerator = require("./randomStringGenerator");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  const date = new Date();
  res.send({ timestamp: date, randomString });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

const randomString = randomStringGenerator();
setInterval(() => {
  const date = new Date();
  console.log(date, randomString);
}, 5000);
