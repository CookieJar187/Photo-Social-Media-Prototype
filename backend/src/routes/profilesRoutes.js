import express from "express";
import pool from "../db.js";
import { getProfiles, getFollowers, getFollowing } from "../controllers/profilesController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getProfiles);
router.get("/followers", requireAuth, getFollowers);
router.get("/following", requireAuth, getFollowing);

router.get("/test", async (req, res) => {

    const result = await pool.query(
        "SELECT * FROM users"
    );

    res.json(result.rows);
});

export default router;