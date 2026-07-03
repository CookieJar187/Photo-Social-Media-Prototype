import bcrypt from 'bcrypt'

import { createToken, verifyToken } from '../utils/jwt.js'

import pool from "../db.js";

export async function login(req, res) {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required.",
    });
  }

  try {

    const result = await pool.query(
      `SELECT id, username, password_hash
      FROM users
      WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const token = createToken({
      userId: user.id,
      username: user.username
    })

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        username: user.username,
        userId: user.id,
      },
    });

  } catch(err) {
    console.error("Login error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

export async function logout(req, res) {

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res.json({
    success: true,
    message: "Logged out successfully.",
  });
}

export async function signupUser(req, res) {

  const { username, password, email } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required.",
    });
  }

  try {

    const usernameResult = await pool.query(
      `SELECT id FROM users
      WHERE username = $1`,
      [username]
    );
    if (usernameResult.rows[0]) {
      return res.status(401).json({
        success: false,
        message: "Username already taken.",
      });
    }

    const emailResult = await pool.query(
      `SELECT id FROM users
      WHERE email = $1`,
      [email]
    );
    if (emailResult.rows[0]) {
      return res.status(401).json({
        success: false,
        message: "Email already in use.",
      });
    }

    const password_hash = await bcrypt.hash(password, 13);
    const signupResult = await pool.query(
      `INSERT INTO users (username, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, username;`,
      [username, email, password_hash]
    );
    const user = signupResult.rows[0]

    const token = createToken({
      userId: user.id,
      username: user.username
    })
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000
    });

    return res.status(200).json({
      success: true,
      message: "Signup successful.",
      user: {
        username: user.username,
        userId: user.id,
      },
    });

  } catch(err) {
    console.error("Signup error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

export function getStatus(req, res) {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(200).json({
      authenticated: false,
      user: null,
    });
  }

  try {
    const payload = verifyToken(token);

    return res.status(200).json({
      authenticated: true,
      user: payload,
    });
  }
  catch {
    return res.status(200).json({
      authenticated: false,
      user: null,
    });
  }
}

export function getMe(req, res) {
  return res.json({
    success: true,
    user: req.user,
  })
}

