import mongoose from "mongoose";

const connectDB = async () => {
  return mongoose
    .connect(process.env.LOCAL_URL)
    .then(() => {
      console.log("conected Mongo DB Server");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default connectDB;
