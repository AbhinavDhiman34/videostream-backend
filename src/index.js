// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({path: "./env" });
connectDB();

// 1st method of connecting with mongodb in the index.js only

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Error while connecting with mongodb", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error while connecting with mongodb", error);
//     throw error;
//   }
// })();
