import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { randomUUID } from "crypto";

export const uploadImage = async (request, reply) => {
    try {
        // Get file from request
        const file = await request.file();

        if (!file) {
            return reply.code(400).send({ error: "No image uploaded" });
        }

        const ext = path.extname(file.filename || file.fileName || ""); // fallback
        const filename = `${randomUUID()}${ext}`;
        const filePath = path.join("public/uploads", filename);

        // Save the file
        await pipeline(file.file, fs.createWriteStream(filePath));

        const imageUrl = `/uploads/${filename}`;

        return reply.code(200).send({
            success: true,
            imageUrl
        });

    } catch (error) {
        console.error(error);
        reply.code(500).send({ error: "Image upload failed" });
    }
};
