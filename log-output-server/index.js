require("dotenv").config();
const express = require("express");
const fs = require("fs/promises");

const app = express();

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const logData = await fs.readFile("/mnt/shared/file.log", {
    encoding: "utf8",
  });

  const fileContent = await fs.readFile("/mnt/config/information.txt", {
    encoding: "utf8",
  });
  const MESSAGE = process.env.MESSAGE;

  console.log(fileContent, MESSAGE);
  const response = await fetch("http://ping-pong-svc:3000");
  const pongs = await response.json();
  const requestLog = `file content: ${fileContent} <br/> env variable: MESSAGE=${MESSAGE} <br/> ${logData} <br/> ${pongs.data}`;
  console.log(requestLog);

  res.send(requestLog);
});

app.get("/ready", async (req, res) => {
  try {
    await fetch("http://ping-pong-svc:3000");
    res.status(200).send("OK");
  } catch (err) {
    console.error("Readiness check failed:", err);
    res.status(500).send("Ping Pong app not reachable");
  }
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
