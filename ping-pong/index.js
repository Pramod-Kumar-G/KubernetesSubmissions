require("dotenv").config();
const app = require("express")();

const PORT = process.env.PORT;

let count = -1;

app.get("/pingpong", (req, res) => {
  count += 1;
  res.send(`pong ${count}`);
});

app.listen(PORT, () => console.log(`ping pong started on port ${PORT}`));
