import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/path.js";
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credential: true,
  })
);
connectDB();

// APIs
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
