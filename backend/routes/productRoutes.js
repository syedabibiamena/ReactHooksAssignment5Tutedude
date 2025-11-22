import express from "express";
import Products from "../models/Product.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
  // console.log("running");
  // res.send("helloe0");
});

export default router;
