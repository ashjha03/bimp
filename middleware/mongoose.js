import mongoose from "mongoose";

export const connectDB = (handler) => async (req, res) => {
  console.log("recieved");
  if (mongoose.connection[0].readyState) return handler(req, res);

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Mongoose Connected");
  return handler(req, res);
};
