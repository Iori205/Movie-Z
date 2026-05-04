import React from "react";
import Link from "next/link";
import { Mail, Phone, Film } from "lucide-react";

type Sns = {
  label: string;
};

export const Footer = () => {
  const snss: Sns[] = [
    { label: "Facebook" },
    { label: "Instagram" },
    { label: "Twitter" },
    { label: "Youtube" },
  ];

  return (
    <footer className="w-screen relative mt-20">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="relative sm:max-w-[1440px] w-full flex sm:flex-row flex-col justify-between m-auto py-16 sm:px-20 px-5 text-foreground">
        <div className="mb-8 sm:mb-0">
          <Link
            className="flex gap-3 items-center mb-4 group"
            href="/"
          >
            <div className="relative">
              <Film size={24} className="text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full scale-150" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Movie<span className="text-primary">Z</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your cinematic journey begins here.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-4">
            2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex sm:gap-20 gap-8 sm:flex-row flex-col">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex gap-3 items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-full glass">
                <Mail size={14} className="text-primary" />
              </div>
              <span>support@movieZ.com</span>
            </div>
            <div className="flex gap-3 items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-full glass">
                <Phone size={14} className="text-primary" />
              </div>
              <span>+976 (11) 123-4567</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {snss.map((sns) => (
                <Link 
                  key={sns.label} 
                  href="/" 
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground glass rounded-full hover:bg-primary/10 transition-all duration-300"
                >
                  {sns.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
