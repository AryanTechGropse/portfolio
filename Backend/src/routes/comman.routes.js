import { uploadImage } from "../controllers/comman.controller.js";

export default async function (fastify) {
    fastify.post(
        "/upload-image",
        uploadImage
    );
}