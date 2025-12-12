// const express = require("dotenv");

// const server = express();

// server.get("/", (req, res) => {
//   res.end("Express server successfully launched");
// });

// server.get("/about",(req,res) => {
//     res.end("about is running");
// })

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });

// 

// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log("conneced to db"))
// .catch((err)=>console.log(err));
// const express = require("express")
// const server = express();
// server.get('/',(req,res)=>{
//         res.end("express is running now");
// }).listen(4000);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userroute.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

server.use("/", userRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

server.listen(4000, () => console.log("Server started"));