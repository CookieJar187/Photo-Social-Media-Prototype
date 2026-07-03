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

export async function getProfile(req, res) {
  const { userId } = req.params;

  const result = await pool.query(
      `SELECT username FROM users
      WHERE users.id = $1;`,
      [userId]
  );

  if (!result.rows[0]) {
    return res.status(404).json({
      success: true,
      message: "Profile not found.",
    })
  };

  return res.json({
    success: true,
    profile: result.rows[0],
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