"use client";

import { useState } from "react";
import { sendComment } from "@/src/services/form";
import { CommentError } from "@/src/types/form";
import type { FormEvent } from "react";

import { toast } from "sonner";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [error, setError] = useState<CommentError>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validations: CommentError = {
      name: !name.trim(),
      email: !email.trim() || !validateEmail(email),
      comment: !comment.trim(),
    };
    setError(validations);

    const hasErrors = Object.values(validations).some(Boolean);
    if (hasErrors) return;

    const toastId = toast.loading("Sending comment...");
    try {
      setLoading(true);
      await sendComment({
        name,
        email,
        comment,
      });
      toast.success("Comment sent seccessfully!", { id: toastId });
      setSuccess(true);
      setName("");
      setEmail("");
      setComment("");
      setError({});
    } catch (error) {
      toast.error("An error has occurredd. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mt-12">
      <h2 className="text-2xl font-bold mb-6">Leave a comment</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`border rounded-lg p-3 outline-none ${
            error.name ? "border-red-500" : "border-gray-300"
          }`}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border rounded-lg p-3 outline-none ${
            error.email ? "border-red-500" : "border-gray-300"
          }`}
        />

        <textarea
          placeholder="Comment"
          value={comment}
          maxLength={500}
          onChange={(e) => setComment(e.target.value)}
          className={`border rounded-lg p-3 outline-none min-h-40 resize-none ${
            error.comment ? "border-red-500" : "border-gray-300"
          }`}
        />

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{comment.length}/500</span>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        {Object.values(error).some(Boolean) && (
          <p className="text-red-500 text-sm">Complete required fields</p>
        )}

        {success && (
          <p className="text-green-600 text-sm">Your comment has been sent</p>
        )}
      </form>
    </div>
  );
}
