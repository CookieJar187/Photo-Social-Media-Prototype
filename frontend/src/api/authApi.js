const API_BASE_URL = "http://localhost:3000/api";

export async function loginUser(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed.");
  }

  return data;
}

export async function logoutUser() {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Logout failed");
  }

  return data;
}

export async function signupUser(username, email, password) {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed.");
  }

  return data;
}

export async function getStatus() {
    const response = await fetch(`${API_BASE_URL}/auth/status`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}

export async function getCurrentUser() {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Not authenticated.");
  }

  return data;
}