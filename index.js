import express from "express";
// import { authRoutes } from "./src/routes/authRoutes.js";
import { expenseRoutes } from "./src/routes/expenseRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://atkinsonlouis:8SaySOW3yDTlQv4Z@cluster0.mygeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("listening on 3000");
});

// app.use(authRoutes);
app.use(expenseRoutes);
