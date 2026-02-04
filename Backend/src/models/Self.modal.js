import mongoose from "mongoose";

const selfSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    profilePhoto: {
      type: String, // URL or base64 string
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
);

const Self = mongoose.model("Self", selfSchema);

export default Self;
