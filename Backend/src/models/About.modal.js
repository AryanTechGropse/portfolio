import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // URL or base64 string
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: Array,
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

const About = mongoose.model("About", AboutSchema);

export default About;
