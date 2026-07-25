"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-yellow-500/20 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-yellow-400"
        >
          ShineGo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-gray-300 transition hover:text-yellow-400"
          >
            Services
          </a>

          <a
            href="#pricing"
            className="text-gray-300 transition hover:text-yellow-400"
          >
            Pricing
          </a>

          <a
            href="#about"
            className="text-gray-300 transition hover:text-yellow-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-300 transition hover:text-yellow-400"
          >
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/book">
            <Button className="hidden rounded-full bg-yellow-400 px-6 text-black hover:bg-yellow-300 md:flex">
              Book Now
            </Button>
          </Link>

          <button className="text-white md:hidden">
            <Menu size={30} />
          </button>
        </div>

      </div>
    </nav>
  );
}