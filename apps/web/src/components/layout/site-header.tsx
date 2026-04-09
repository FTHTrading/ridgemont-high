import Link from "next/link";
import { Zap } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500 shadow-neon-magenta group-hover:shadow-neon-blue transition-shadow">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading text-lg font-bold text-white">
            Ridgemont <span className="text-ridgemont-neonMagenta-400">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#courses"
            className="text-sm text-ridgemont-cassetteGray-200 hover:text-white transition-colors"
          >
            Courses
          </Link>
          <Link
            href="#labs"
            className="text-sm text-ridgemont-cassetteGray-200 hover:text-white transition-colors"
          >
            Labs
          </Link>
          <Link
            href="#teachers"
            className="text-sm text-ridgemont-cassetteGray-200 hover:text-white transition-colors"
          >
            Teachers
          </Link>
          <Link
            href="#today"
            className="text-sm text-ridgemont-cassetteGray-200 hover:text-white transition-colors"
          >
            Today in AI
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/signin"
            className="text-sm font-medium text-ridgemont-cassetteGray-200 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex h-9 items-center rounded-lg bg-ridgemont-neonMagenta-500 px-4 text-sm font-medium text-white shadow-neon-magenta hover:bg-ridgemont-neonMagenta-600 hover:shadow-none transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
