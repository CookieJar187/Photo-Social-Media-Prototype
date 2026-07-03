import pool from "../db.js";

export async function getPosts(req, res) {

  const result = await pool.query(
      `SELECT * FROM posts`
  );

  return res.json({
    success: true,
    posts: result.rows,
  });
}

export async function getPost(req, res) {
  const { postId } = req.params;

  const result = await pool.query(
      `SELECT * FROM posts
      WHERE posts.id = $1;`,
      [postId]
  );

  if (!result.rows[0]) {
    return res.status(404).json({
      success: false,
      message: "Post not found.",
    });
  }

  return res.json({
    success: true,
    post: result.rows[0],
  });
}

export async function getMyPosts(req, res) {

  const userId = req.user.userId;

  const result = await pool.query(
      `SELECT * FROM posts WHERE author_id = $1`,
      [userId]
  );

  return res.json({
    success: true,
    posts: result.rows,
  });
}

export async function createPost(req, res) {

  try {

    const userId = req.user.userId;
    const {title, description} = req.body;
    
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    const result = await pool.query(
      `INSERT INTO posts (author_id, title, description)
       VALUES ($1, $2, $3)
       RETURNING *;`,
      [
          userId,
          title,
          description
      ],
    );

    return res.status(201).json({
      success: true,
      post: result.rows[0],
    });

  } catch(err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to create post",
    });
  }
}