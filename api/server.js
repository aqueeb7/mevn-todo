const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require("./router/todo")
const userRouter = require("./router/user")


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to DB"))
  .catch(console.error)


app.use("/api", todoRouter)
app.use("/api/auth", userRouter)


app.listen(3001, () => console.log(`Server Started on localhost:3001`))