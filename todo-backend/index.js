const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

const PORT = process.env.PORT;

let todos = [
  { title: "go to gym" },
  { title: "Learn React" },
  { title: "Build Project" },
];

app.use(cors());
app.use(express.json());
app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  console.log(todo);
  todos.push(todo);
  res.send(todo);
});

app.listen(PORT, () => console.log(`Todo Backend running on port ${PORT}`));
