import dotenv from "dotenv";
dotenv.config();
import express from "express";

import { connectToDb } from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectToDb();

app.listen(PORT, () => {
  console.log(`App started at PORT ${process.env.PORT}`);
});
