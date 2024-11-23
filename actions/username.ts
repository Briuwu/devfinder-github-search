"use server";

export const getUserByUsername = async (username: string = "Briuwu") => {
  const response = await fetch(`${process.env.GITHUB_API}/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  if (!data) {
    return null;
  }

  return data;
};
