require("dotenv").config();
const express = require("express");
const fs = require("fs/promises");

const app = express();

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const logData = await fs.readFile("/mnt/shared/file.log", {
    encoding: "utf8",
  });
  // const requestLog = await fs.readFile("/mnt/data/requests.log", {
  //   encoding: "utf8",
  // });
  const response = await fetch("http://ping-pong-svc:1235/pingpong");
  const pongs = await response.json();
  const requestLog = logData + "<br/>" + pongs.data;
  console.log(requestLog);

  res.send(requestLog);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
