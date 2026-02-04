import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: false,
    },
    image_secondary: {
      type: Array,
      required: false,
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
    language: {
      type: Array,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    repo_url: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    selected_work: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
);

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
