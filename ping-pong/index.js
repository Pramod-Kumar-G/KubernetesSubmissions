require("dotenv").config();
const app = require("express")();
const fs = require("node:fs");

const PORT = process.env.PORT;

let count = -1;
// const writeToFile = () => {
//   fs.writeFile("/mnt/data/requests.log", `${count}`, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("file written successfully!");
//     }
//   });
// };
app.get("/pingpong", (req, res) => {
  count += 1;
  // writeToFile();
  res.send({ data: `Ping / Pongs: ${count}` });
});

app.listen(PORT, () => console.log(`ping pong started on port ${PORT}`));
