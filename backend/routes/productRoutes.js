import express from "express"
import { getAllProducts, createNewProduct, updateProduct, deleteProduct, getProductsById } from "../controllers/productController.js"
const router = express.Router()

router.get("/",getAllProducts)
router.get("/:id",getProductsById)
router.post("/",createNewProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)


export default router