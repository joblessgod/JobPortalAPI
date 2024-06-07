import mongoose from "mongoose";

const connectDB = async (req,res) => {
try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected at ${mongoose.connection.host}`)
} catch (error) {
    console.log(`MongoDB ERROR: ${error}`)
}

}

export default connectDB