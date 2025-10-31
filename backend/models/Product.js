import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{timestamps:true})

const ProductTb = mongoose.model("ProductTb",productSchema)

export default ProductTb