import pool from "../db.js";

export async function getPosts(req, res) {

  const result = await pool.query(
      "SELECT * FROM posts"
  );

  return res.json({
    success: true,
    posts: result.rows,
  });
}

export async function getMyPosts(req, res) {

  const userId = req.user.userId;

  const result = await pool.query(
      "SELECT * FROM posts WHERE author_id = $1",
      [userId]
  );

  return res.json({
    success: true,
    posts: result.rows,
  });
}