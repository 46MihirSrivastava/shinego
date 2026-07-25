"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-white transition hover:border-red-400 hover:text-red-400"
    >
      Logout
    </button>
  );
}