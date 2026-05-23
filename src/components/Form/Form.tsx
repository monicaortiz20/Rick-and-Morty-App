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
    <section
      className="
      relative
      w-full
      overflow-hidden
      rounded-[10px]
      bg-white/[0.03]
      md:p-10
    "
      style={{ padding: "12px 18px" }}
    >
      <div
        className="
        pointer-events-none
        absolute
        bottom-[-120px]
        left-[-120px]
        h-[240px]
        w-[240px]
        rounded-full
        bg-[var(--neon-green-soft)]
        blur-[120px]
      "
      />

      <div
        className="
        relative
        z-10
        flex
        flex-col
        gap-8
      "
      >
        <div className="flex flex-col gap-3">
          <h2
            className="
            text-3xl
            font-black
            text-white
            md:text-4xl
          "
            style={{
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            Leave a comment
          </h2>

          <p
            className="
            text-sm
            text-zinc-500
            md:text-base
          "
          >
            Share your thoughts about this episode.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="
          flex
          flex-col
          gap-5
        "
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`
            input-ui
            rounded-2xl
            border
            bg-white/[0.03]
            px-5
            py-4
            text-white
            placeholder:text-zinc-500
            transition-all
            duration-300
            focus:border-[var(--neon-green)]
            focus:outline-none
            cursor-pointer
            ${error.name ? "border-rose-400/70" : "border-white/5"}
          `}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`
            input-ui
            rounded-2xl
            border
            bg-white/[0.03]
            px-5
            py-4
            text-white
            placeholder:text-zinc-500
            transition-all
            duration-300
            focus:border-[var(--neon-green)]
            focus:outline-none
            cursor-pointer
            ${error.email ? "border-rose-400/70" : "border-white/5"}
          `}
          />
          <textarea
            placeholder="Comment"
            value={comment}
            maxLength={500}
            onChange={(e) => setComment(e.target.value)}
            className={`
            input-ui
            min-h-[180px]
            resize-none
            rounded-2xl
            border
            bg-white/[0.03]
            px-5
            py-4
            text-white
            text-white
            placeholder:text-zinc-500
            transition-all
            duration-300
            focus:border-[var(--neon-green)]
            focus:outline-none
            cursor-pointer
            ${error.comment ? "border-rose-400/70" : "border-white/5"}
          `}
          />
          <div
            className="
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
          "
          >
            <span
              className="
              text-sm
              text-zinc-500
            "
            >
              {comment.length}/500
            </span>

            <button
              type="submit"
              disabled={loading}
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-[var(--neon-green)]
              px-8
              py-4
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_25px_rgba(163,255,18,0.25)]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
              style={{
                fontFamily: "Orbitron, sans-serif",
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
