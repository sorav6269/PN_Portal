import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      emum: ["instructor", "student"],
      default: "student",
    },
    enrolledCourese: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
    ],
    photoURI: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", UserSchema);
