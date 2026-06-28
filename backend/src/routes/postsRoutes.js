import express from "express";
import { getPosts } from "../controllers/postsController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getPosts);

export default router;