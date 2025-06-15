// routes/product.route.js

import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
router.get("/", getProducts);

// @desc    Create a new product
// @route   POST /api/products
router.post("/", createProduct);

// @desc    Update a product by ID
// @route   PUT /api/products/:id
router.put("/:id", updateProduct);

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
router.delete("/:id", deleteProduct);

export default router;
