import { createToken, verifyToken } from '../utils/jwt.js'

const fakeUser = {
  username: "benjamin",
  password: "test123",
  userId: "1"
};

export function login(req, res) {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required.",
    });
  }

  const isValidLogin =
    username === fakeUser.username &&
    password === fakeUser.password;

  if (!isValidLogin) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password.",
    });
  }

  const token = createToken({
    userId: fakeUser.userId,
    username: fakeUser.username
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
      username: fakeUser.username,
      userId: fakeUser.userId,
    },
  });
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