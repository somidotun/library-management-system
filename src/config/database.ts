import mongoose from "mongoose";

const connectDB = async () => {
  // mongo db import
  const mongoDB: string | undefined = process.env.MONGO_URL;

  if (!mongoDB) {
    console.error("MongoDB connection string is not defined in .env");
    process.exit(1);
  }

  try {
    const connectSuccessfully = await mongoose.connect(mongoDB);
    console.log(connectSuccessfully, "mongoDB is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
