import express from "express";
import { login, logout, getStatus, getMe } from "../controllers/authController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout)
router.get("/me", requireAuth, getMe)
router.get("/status", getStatus)

export default router;