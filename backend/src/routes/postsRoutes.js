import express from "express";
import { getPosts, getPost, getMyPosts, createPost } from "../controllers/postsController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getPosts);
router.get("/post/:postId", requireAuth, getPost);
router.get("/me", requireAuth, getMyPosts);

router.post("/", requireAuth, createPost)

export default router;