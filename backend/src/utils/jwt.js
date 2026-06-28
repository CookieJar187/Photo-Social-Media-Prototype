import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from "../config/env.js";

export function createToken(payload) {
  console.debug(ACCESS_TOKEN_SECRET)
  const smth = jwt.sign(payload, ACCESS_TOKEN_SECRET)
  return smth;
}

export function verifyToken(token) {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
}