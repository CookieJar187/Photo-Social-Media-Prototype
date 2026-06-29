import express from "express";
import { getProfiles, getFollowers, getFollowing } from "../controllers/profilesController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getProfiles);
router.get("/followers", requireAuth, getFollowers);
router.get("/following", requireAuth, getFollowing);

export default router;