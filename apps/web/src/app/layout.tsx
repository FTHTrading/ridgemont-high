import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridgemont AI Academy — Learn AI from Unforgettable Mentors",
  description:
    "A production-grade educational platform where 80s/90s generational nostalgia meets modern AI education. Learn AI, prompting, agent systems, RAG, media literacy, and building — guided by themed mentors in interactive labs.",
  keywords: [
    "AI education",
    "learn AI",
    "prompt engineering",
    "agent systems",
    "RAG",
    "media literacy",
    "coding",
    "AI labs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
