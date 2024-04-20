import express from "express";
import {
  getProducts,
  newCollections,
  addProduct,
  removeProduct,
  updateProduct,
} from "../Controllers/product_controller.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/newcollections", newCollections);

router.post("/addproduct", addProduct);

router.post("/removeproduct", removeProduct);

router.patch("/updateproduct", updateProduct);

export default router;
