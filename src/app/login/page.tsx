"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/admin",
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          ShineGo Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-500 py-3 font-semibold text-black hover:bg-yellow-400"
        >
          Login
        </button>
      </form>
    </main>
  );
}