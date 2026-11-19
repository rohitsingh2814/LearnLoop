
import "dotenv/config";

// dns import
import dns from "node:dns";


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";

// Use Cloudflare DNS for MongoDB Atlas SRV resolution
dns.setServers(["1.1.1.1"]);
const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/health", (req, res) => {
    res.send("Backend is running");
});

// Home route
app.get("/", (req, res) => {
    res.json("Welcome to LearnLoop backend");
});

// Google authentication routes
app.use("/api/auth", authRoutes);

// Start server after MongoDB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};


startServer();
