import mongoose from "mongoose";

DB_NAME = "Letter_Box";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(process.env.MONGO_URI);
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
}