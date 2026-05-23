import { Comment } from "../types/form";

export async function sendComment(comment: Comment) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(comment),
  });

  if (!resp.ok) {
    throw new Error("Error sending comment");
  }

  return resp.json();
}
