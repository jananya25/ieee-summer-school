import mongoose from "mongoose";

const connectDB = async () => {
   if (mongoose.connection.readyState >= 1) {
     console.log("MongoDB is already connected.");
     return;
   }
  try {
    console.log("Connecting to MongoDB...");
    const conn = await mongoose.connect(process.env.MONGO_URI!, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
