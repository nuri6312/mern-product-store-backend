import express from "express"
import { getAllProducts, createNewProduct, updateProduct, deleteProduct } from "../controllers/productController.js"
const router = express.Router()

router.get("/",getAllProducts)
router.post("/",createNewProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)


export default router