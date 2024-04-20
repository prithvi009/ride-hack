import express from 'express';

import { authenticateUser } from '../middleware/auth.js';

import {  addToCart, deleteFromCart } from '../Controllers/cart_controller.js';

const router = express.Router();

router.post('/addtocart', authenticateUser, addToCart)
router.post('/deletecartitem', authenticateUser, deleteFromCart)

export default router;