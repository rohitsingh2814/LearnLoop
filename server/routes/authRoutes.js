
import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = express.Router();

// Google login and registration
router.post("/google", async (req, res) => {
    try {
        const { credential } = req.body;

        if (!credential) {
            return res.status(400).json({
                success: false,
                message: "Google credential is missing"
            });
        }

        if (!process.env.GOOGLE_CLIENT_ID || !process.env.JWT_SECRET) {
            return res.status(500).json({
                success: false,
                message: "Authentication configuration is missing"
            });
        }

        // Verify Google ID token
        const googleClient = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID
        );

        const ticket = await googleClient.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();

        const {
            sub: googleId,
            name,
            email,
            picture,
            email_verified: emailVerified
        } = payload;

        if (!googleId || !email || !emailVerified) {
            return res.status(401).json({
                success: false,
                message: "Google account is not verified"
            });
        }

        // Find existing Google user
        let user = await User.findOne({ googleId });

        // Register new user
        if (!user) {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    message: "An account with this email already exists. Please use your existing login method."
                });
            }

            user = await User.create({
                googleId,
                name,
                email,
                profilePicture: picture || "",
                role: "student",
                isVerified: true
            });
        }

        // Reject disabled accounts
        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message: "Your account has been disabled"
            });
        }

        // Generate LearnLoop JWT
        const token = jwt.sign(
            {
                userId: user._id.toString()
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // Create HTTP-only cookie
        res.cookie("learnloop_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
            path: "/"
        });

        return res.status(200).json({
            success: true,
            message: "Google authentication successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture
            }
        });

    } catch (error) {
        console.error("Google Auth Error:", error);

        return res.status(401).json({
            success: false,
            message: "Google authentication failed"
        });
    }
});

// Logout
router.post("/logout", (req, res) => {
    res.clearCookie("learnloop_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/"
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
});

export default router;
