import mongoose from "mongoose"


export const connectDatabase = async () => {
    try {
        const Connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`✅ MongoDB connected successfully: ${Connection.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}