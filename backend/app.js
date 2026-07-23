import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { connectToDb } from "./database/db.js";
import Holding from "./models/holdingSchema.js";
import Position from "./models/positionsSchema.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("hi");
// });

// app.get("/addholdings", async (req, res) => {
//   const { positions } = await import("../dashboard/src/data/data.js");

//   const data = await Position.insertMany(positions);
//   console.log(data);

//   res.send("Inserted");
// });

app.get("/", (req, res) => {
  res.send("ho");
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await Holding.find({});
  // console.log(allHoldings);
  return res.json(allHoldings);
});

app.get("/allPosition", async (req, res) => {
  const allPosition = await Position.find({});
  // console.log(allPosition);
  return res.json(allPosition);
});

connectToDb();

app.listen(PORT, () => {
  console.log(`App started at PORT ${process.env.PORT}`);
});
