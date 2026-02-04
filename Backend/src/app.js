import Fastify from "fastify";
import dotenv from "dotenv";
import multipart from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "path";

import { connectDB } from "./config/db.js";
import selfRoutes from "./routes/self.routes.js";
import commanRoutes from "./routes/comman.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import projectsRoutes from "./routes/projects.routes.js";

dotenv.config();

const app = Fastify({ logger: true });

/**
 * 🚨 MUST BE FIRST
 * This enables multipart/form-data
 */
await app.register(multipart, {
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

// Connect DB
await connectDB();

// CORS
await app.register(cors, {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["x-auth-token", "x-user-type", "Content-Type"],
});

// Static files
app.register(fastifyStatic, {
    root: path.join(process.cwd(), "public", "uploads"),
    prefix: "/public/uploads/",
});

// Routes
await app.register(selfRoutes);
await app.register(commanRoutes);
await app.register(aboutRoutes);
await app.register(projectsRoutes);

// Global auth hook (skip upload)
app.addHook("preHandler", async (request, reply) => {
    if (request.url.startsWith("/upload-image")) return;

    if (request.url.startsWith("/public/uploads/")) return;

    const token = request.headers["x-auth-token"];
    const userType = request.headers["x-user-type"];

    if (!token || !userType) {
        return reply.code(401).send({ error: "Unauthorized" });
    }
});

// Test
app.get("/", async () => {
    return { status: "API Running 🚀" };
});

export default app;
