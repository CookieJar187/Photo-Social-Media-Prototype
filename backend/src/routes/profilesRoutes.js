import express from "express";
import { getProfiles } from "../controllers/profilesController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getProfiles);

export default router;