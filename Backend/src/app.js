import Fastify from "fastify";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import selfRoutes from "./routes/selfRoutes.js";
import multipart from "@fastify/multipart";
import cors from "@fastify/cors";

dotenv.config();

const app = Fastify({ logger: true });

// Connect DB
await connectDB();

await app.register(cors, {
    origin: ["http://localhost:3000", "https://your-website.com"], // allow these origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["x-auth-token", "x-user-type", "Content-Type"],
});

await app.register(selfRoutes);

// Global hook for all routes
app.addHook("preHandler", async (request, reply) => {
    const token = request.headers["x-auth-token"];
    const userType = request.headers["x-user-type"];

    if (!token || !userType) {
        return reply
            .code(401)
            .send({ error: "Unauthorized: x-auth-token and x-user-type required" });
    }

    request.user = { token, type: userType };
});

await app.register(multipart, {
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

// Test Route
app.get("/", async () => {
    return { status: "API Running 🚀" };
});

export default app;
