require("dotenv").config();
const express = require("express");
const fs = require("fs/promises");

const app = express();

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const logData = await fs.readFile("/mnt/shared/file.log", {
    encoding: "utf8",
  });
  const requestLog = await fs.readFile("/mnt/data/requests.log", {
    encoding: "utf8",
  });

  res.send(logData + "<br>Ping / Pongs: " + requestLog);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
