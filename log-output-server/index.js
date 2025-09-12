require("dotenv").config();
const express = require("express");
const fs = require("fs/promises");

const app = express();

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const logData = await fs.readFile("/mnt/shared/file.log", {
    encoding: "utf8",
  });
  let logDataArray = logData.split("\n");
  logDataArray.pop();

  res.send(logDataArray);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
