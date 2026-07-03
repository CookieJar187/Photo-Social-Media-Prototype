const API_BASE_URL = "http://localhost:3000/api";

export async function getProfiles() {
  const response = await fetch(`${API_BASE_URL}/profiles`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}

export async function getProfile(userId) {

  const response = await fetch(`${API_BASE_URL}/profiles/profile/${userId}`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}

export async function getFollowers() {
  const response = await fetch(`${API_BASE_URL}/profiles/followers`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}

export async function getFollowing() {
  const response = await fetch(`${API_BASE_URL}/profiles/following`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unhandled error.");
  }

  return data;
}