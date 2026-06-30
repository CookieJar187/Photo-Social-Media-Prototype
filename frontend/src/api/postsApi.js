const API_BASE_URL = "http://localhost:3000/api";

export async function getPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}

export async function getMyPosts() {
  const response = await fetch(`${API_BASE_URL}/posts/me`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}

export async function createPost(title, description) {
  
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    body: JSON.stringify({
      title,
      description
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}