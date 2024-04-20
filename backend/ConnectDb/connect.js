import mongoose from "mongoose";

export const connectDB = (url) => {
  return mongoose.connect(url); //returns a promise
};

