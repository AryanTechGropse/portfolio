import Self from "../models/Self.js";
import mongoose from "mongoose";

// GET all entries
export const getAllSelf = async (request, reply) => {
    try {
        const data = await Self.find();
        return reply.code(200).send(data);
    } catch (error) {
        console.error(error);
        return reply.code(500).send({ error: "Server Error" });
    }
};

// GET SELF By ID
export const getSelf = async (request, reply) => {
    try {
        const { id } = request.params;

        console.log(id);

        // Check if id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return reply.code(400).send({ error: "Invalid ID format" });
        }

        const data = await Self.findById(id);

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
export const addSelf = async (request, reply) => {
    try {
        const { title, profilePhoto, description } = request.body;
        const newSelf = new Self({ title, profilePhoto, description });
        await newSelf.save();
        return reply.code(201).send(newSelf);
    } catch (error) {
        console.error(error);
        return reply.code(500).send({ error: "Server Error" });
    }
};

// PUT update entry by ID
export const updateSelf = async (request, reply) => {
    try {
        const { id } = request.params;
        const { title, profilePhoto, description } = request.body;

        const updatedSelf = await Self.findByIdAndUpdate(
            id,
            { title, profilePhoto, description },
            { new: true }
        );

        if (!updatedSelf) {
            return reply.code(404).send({ error: "Entry not found" });
        }

        return reply.code(200).send(updatedSelf);
    } catch (error) {
        console.error(error);
        return reply.code(500).send({ error: "Server Error" });
    }
};
