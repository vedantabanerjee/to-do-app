const express = require("express");
const app = express();
const zod = require("zod");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const { createTodo } = require("./types.js");
const { updateTodo } = require("./types.js");
const { todo } = require("./db.js");

//route to create a todo
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(403).json({
      msg: "Invalid Input",
    });
    return;
  } else {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: "Todo Created",
    });
  }
});

//route to get all todos
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json({
    todos: todos,
  });
});

//route to update a todo
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid Input",
    });
    return;
  } else {
    //update in mongoDB
    await todo.updateOne(
      {
        _id: updatePayload.id,
      },
      {
        completed: true,
      }
    );
    res.json({
      msg: "Todo marked as completed",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
