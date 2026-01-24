import dotenv from "dotenv";
dotenv.config(); // 👈 MUST be at the top

import app from "./app.js";

const start = async () => {
    try {
        await app.listen({
            port: process.env.PORT || 5000,
            host: "0.0.0.0", // 👈 FIXED (see issue 2)
        });
        console.log("Server running 🚀");
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
