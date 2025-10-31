import express from  "express"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"

dotenv.config()
const PORT =process.env.PORT
const app = express()

app.use("/products",productRoutes)

app.listen(PORT, () => {
    console.log("Server running on Port "+PORT);
})