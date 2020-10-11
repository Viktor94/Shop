import express from 'express';
import {getProductById, getProducts} from "../controllers/productController.js";

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route('/').get(getProducts);

// @desc Fetch a product with the provided id
// @route GET /api/products/id
// @access Public
router.route('/:id').get(getProductById);

export default router;