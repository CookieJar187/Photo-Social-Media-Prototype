import pool from "../db.js";

export async function getProfiles(req, res) {

  const result = await pool.query(
      "SELECT * FROM users"
  );

  return res.json({
    success: true,
    profiles: result.rows,
  });
}

export async function getFollowers(req, res) {

  const userId = req.user.userId;

  const result = await pool.query(
    `SELECT users.id, users.username
    FROM follows
    JOIN users ON follows.following_id = users.id
    WHERE follows.follower_id = $1`,
    [userId]
  );

  return res.json({
    success: true,
    profiles: result.rows,
  });
}

export async function getFollowing(req, res) {

  const userId = req.user.userId;

  const result = await pool.query(
    `SELECT users.id, users.username
    FROM follows
    JOIN users ON follows.follower_id = users.id
    WHERE follows.following_id = $1`,
    [userId]
  );

  return res.json({
    success: true,
    profiles: result.rows,
  });
}