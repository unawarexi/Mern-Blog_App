import mongoose from "mongoose";
// Set up default mongoose connection

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_URI, {})
    .then(() => {
      console.log("MongoDB connected successfully");
      
    })
    .catch((error) => {
      console.error(`MongoDB connection error: ${error}`);
      // Handle the error appropriately (e.g., exit the application)
      process.exit(1);
    });
};


export default connectDB;

