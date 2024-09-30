import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

// json handling config 
app.use(express.json({ limit: "20kb" }))

// url encoding config
app.use(express.urlencoded({ extended: true, limit: "20kb" }))

// public folder config (stores files/folders in public folder)
app.use(express.static("public"))

// cookie parser config
app.use(cookieParser())

export { app };
