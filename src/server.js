import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

dotenv.config()

mongoose.connect(process.env.MONGO_CONNECT_STRING)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.log("not connected and got error", err);
  });

const app = express();

app.listen(5000, () => {
  console.log("server starting at port 5000");
});


app.use('/user', userRouter)