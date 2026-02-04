import About from "../models/About.modal.js";
import mongoose from "mongoose";

// GET all entries
export const getAllAbout = async (request, reply) => {
  try {
    const data = await About.find();
    return reply.code(200).send(data);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error" });
  }
};

// GET By ID
export const getAbout = async (request, reply) => {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return reply.code(400).send({ error: "Invalid ID format" });
    }

    const data = await About.findById(id);

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
export const addAbout = async (request, reply) => {
  try {
    const { title, image, description, tags, status } = request.body;
    if (!title) {
      reply.code(500).send({ error: "title is require" });
    }
    if (!image) {
      reply.code(500).send({ error: "image is require" });
    }
    if (!description) {
      reply.code(500).send({ error: "description is require" });
    }
    if (!tags || !Array.isArray(tags)) {
      reply.code(400).send({ error: "tags is required and must be an array" });
    }
    const newSelf = new About({ title, image, description, tags, status });
    await newSelf.save();
    return reply.code(201).send(newSelf);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error" });
  }
};

// PUT update entry by ID
export const updateAbout = async (request, reply) => {
  try {
    const { id } = request.params;
    const { title, image, description, tags, status } = request.body;
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
    const updatedAbout = await About.findByIdAndUpdate(
      id,
      { title, image, description, tags, status },
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
export const deleteAbout = async (request, reply) => {
  try {
    const { id } = request.params;

    const data = await About.findByIdAndDelete(id);

    return reply.code(200).send(data);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "Server Error." });
  }
};
