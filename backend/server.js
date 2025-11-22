import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;


mongoose
  .connect(MONGO_URI )
  .then(() => console.log("MongoDB is connected now"))
  .catch((err) => console.error("MongoDB connection failed:", err.message));


app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
