import React from "react";
import Link from "next/link";
import { Film } from "lucide-react";

export const NavLogo = () => {
  return (
    <Link
      href="/"
      className="flex gap-3 items-center group"
    >
      <div className="relative">
        <Film size={28} className="text-primary relative z-10" />
        <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full scale-150 group-hover:scale-175 transition-transform duration-500" />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Movie<span className="text-primary text-glow-cyan">Z</span>
      </span>
    </Link>
  );
};
