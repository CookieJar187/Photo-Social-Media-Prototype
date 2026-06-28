import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import postsRoutes from "./routes/postsRoutes.js"
import profilesRoutes from "./routes/profilesRoutes.js"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes)
app.use("/api/profiles", profilesRoutes)

export default app;