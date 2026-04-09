import React from "react";
import Link from "next/link";
import { Film } from "lucide-react";

export const NavLogo = () => {
  return (
    <Link
      href="/"
      className="flex gap-2 text-indigo-700 text-base leading-5 italic font-bold items-center"
    >
      <Film size={20} color="#4338CA" /> Movie Z
    </Link>
  );
};
