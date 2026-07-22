import dotenv from "dotenv";
dotenv.config();
import express from "express";

import { connectToDb } from "./database/db.js";
// import Holding from "./models/holdingSchema.js";
// import Position from "./models/positionsSchema.js";

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("hi");
// });

// app.get("/addholdings", async (req, res) => {
//   const { positions } = await import("../dashboard/src/data/data.js");

//   const data = await Position.insertMany(positions);
//   console.log(data);

//   res.send("Inserted");
// });

connectToDb();

app.listen(PORT, () => {
  console.log(`App started at PORT ${process.env.PORT}`);
});
