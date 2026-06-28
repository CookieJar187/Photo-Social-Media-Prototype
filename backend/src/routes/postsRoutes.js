import express from "express";
import { getPosts, getMyPosts } from "../controllers/postsController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getPosts);
router.get("/me", requireAuth, getMyPosts);

export default router;