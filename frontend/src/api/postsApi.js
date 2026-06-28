const API_BASE_URL = "http://localhost:3000/api";

export async function getUserPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}