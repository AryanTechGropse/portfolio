import Projects from "../models/Projects.modal.js";
import mongoose from "mongoose";

// GET all entries
export const getAll = async (request, reply) => {
  try {
    const data = await Projects.find();
    return reply.code(200).send(data);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error" });
  }
};

// GET By ID
export const getProjects = async (request, reply) => {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return reply.code(400).send({ error: "Invalid ID format" });
    }

    const data = await Projects.findById(id);

    if (!data) {
      return reply.code(404).send({ error: "Entry not found" });
    }

    return reply.code(200).send(data);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error" });
  }
};

// POST add new entry
export const addProjects = async (request, reply) => {
  try {
    const {
      title,
      image,
      description,
      video,
      image_secondary,
      tags,
      language,
      url,
      repo_url,
      type,
      selected_work,
      status,
    } = request.body;
    if (!title) {
      reply.code(500).send({ error: "title is require" });
    }
    if (!image) {
      reply.code(500).send({ error: "image is require" });
    }
    if (!description) {
      reply.code(500).send({ error: "description is require" });
    }
    if (!tags) {
      reply.code(500).send({ error: "tags is require" });
    }
    if (!language) {
      reply.code(500).send({ error: "language is require" });
    }
    if (!url) {
      reply.code(500).send({ error: "url is require" });
    }
    if (!repo_url) {
      reply.code(500).send({ error: "repo_url is require" });
    }
    if (!type) {
      reply.code(500).send({ error: "type is require" });
    }
    const newSelf = new Projects({
      title,
      image,
      description,
      video,
      image_secondary,
      tags,
      language,
      url,
      repo_url,
      type,
      selected_work,
      status,
    });
    await newSelf.save();
    return reply.code(201).send(newSelf);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error" });
  }
};

// PUT update entry by ID
export const updateProjects = async (request, reply) => {
  try {
    const { id } = request.params;
    const {
      title,
      image,
      description,
      video,
      image_secondary,
      tags,
      language,
      url,
      repo_url,
      type,
      selected_work,
      status,
    } = request.body;
    if (!title) {
      reply.code(500).send({ error: "title is require" });
    }
    if (!image) {
      reply.code(500).send({ error: "image is require" });
    }
    if (!description) {
      reply.code(500).send({ error: "description is require" });
    }
    if (!tags) {
      reply.code(500).send({ error: "tags is require" });
    }
    if (!language) {
      reply.code(500).send({ error: "language is require" });
    }
    if (!url) {
      reply.code(500).send({ error: "url is require" });
    }
    if (!repo_url) {
      reply.code(500).send({ error: "repo_url is require" });
    }
    if (!type) {
      reply.code(500).send({ error: "type is require" });
    }
    const updatedAbout = await Projects.findByIdAndUpdate(
      id,
      {
        title,
        image,
        description,
        video,
        image_secondary,
        tags,
        language,
        url,
        repo_url,
        type,
        selected_work,
        status,
      },
      { new: true },
    );

    if (!updatedAbout) {
      return reply.code(404).send({ error: "Entry not found." });
    }

    return reply.code(200).send(updatedAbout);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error." });
  }
};

// DELETE entry by ID
export const deleteProjects = async (request, reply) => {
  try {
    const { id } = request.params;

    const data = await Projects.findByIdAndDelete(id);

    return reply.code(200).send(data);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error." });
  }
};
