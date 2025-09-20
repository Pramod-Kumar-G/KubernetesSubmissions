const express = require("express");
require("dotenv").config();
const cors = require("cors");
const Todo = require("./todo.model");
const connectDB = require("./dbConnect");

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/todos", async (_req, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

app.post("/todos", async (req, res) => {
  const savedTodo = await Todo.create(req.body);
  res.send(savedTodo);
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Todo Backend running on port ${PORT}`);
});
