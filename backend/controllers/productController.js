import mongoose from "mongoose"
import ProductTb from "../models/Product.js"
export async function getAllProducts (req,res) {
    try {
        const product = await ProductTb.find({})
        res.status(200).json({success:true, data:product})
    } catch (error) {
        console.log("Error fetching products:", error.message)
        res.status(500).json({success:false, message: "Internal server error"})
    }
}

export async function createNewProduct (req,res) {
    const product = req.body
    if(!product.name || !product.image || !product.price) {
        return res.status(400).json({success:false, message:"Provide all fields"})
    }
    const newProduct = new ProductTb(product)
    try {
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct})
         
    } catch (error) {
        console.log("Error: "+error.message)
        res.status(500).json({success:false,message: "Server error"})
    }
}

export async function updateProduct (req,res) {
    const {id} = req.params
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false,message:"product not found"})
    }
    try {
        const updatedProduct = await ProductTb.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({success:true, data:updatedProduct})
    } catch (error) {
        return res.status(500).json({success:false,message:"server error"})
    }
}

export async function deleteProduct (req,res) {
    const {id} = req.params
    try {
        await ProductTb.findByIdAndDelete(id)
        res.status(201).json({success:true, message:"product deleted successfully"})
    } catch (error) {
        res.status(404).json({success:false,message:"product not found"})
    }
}