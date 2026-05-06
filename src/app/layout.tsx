import { ThemeProvider } from "@/components/headerAndFooter/theme-provider";

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/components/headerAndFooter";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieZ | Cinematic Experience",
  description:
    "Discover the art of cinema. Explore Now Playing, Upcoming, Popular, and Top Rated films in an immersive experience.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark bg-background">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Ambient background effects */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-glow-purple/20 blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-glow-cyan/20 blur-[100px] animate-pulse-glow animate-float-delayed" />
            <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-glow-green/10 blur-[80px] animate-float" />
          </div>
          
          {/* Noise texture overlay */}
          <div className="noise-overlay" />
          
          <div className="relative z-10">
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
