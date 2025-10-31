import express from  "express"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import { connectDatabase } from "./config/database.js"

dotenv.config()
const PORT =process.env.PORT
const app = express()

app.use(express.json())
app.use("/products",productRoutes)

connectDatabase().then(()=>{
    app.listen(PORT, () => {
    console.log("✅ Server running on Port "+PORT);
    })
})

