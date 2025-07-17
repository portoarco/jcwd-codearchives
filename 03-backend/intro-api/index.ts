import express, { Application, Request, Response } from "express";
import fs from "fs";
import studentRoute from "./routers/student.router";

// fs : library untuk mengelola file atau directory, karena salah satunya untuk akses file db.json




const PORT: number = 5000; //bebas yang penting 4 digit

// DEFINE API CONFIG
const app: Application = express();
// General middleware config
app.use(express.json()); // untuk membaca data dari req.body

// GET Methods

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Express API Introduction</h1>");
});

// CONFIGURATION ROUTE TO GET DATA
app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`API is Running at http://localhost:${PORT}`);
});


