"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";
import Link from "next/link";

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] w-full bg-gradient-to-r from-ridgemont-neonMagenta-600 via-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-sm sm:px-6">
        <Zap className="hidden sm:block h-4 w-4 flex-shrink-0 animate-pulse" />
        <p className="text-center font-medium">
          <span className="font-bold">Early Access:</span> First 100 students get{" "}
          <span className="rounded bg-white/20 px-1.5 py-0.5 font-bold tracking-wide">
            25% OFF
          </span>{" "}
          all premium tracks —{" "}
          <Link
            href="/auth/signup"
            className="underline underline-offset-2 font-bold hover:text-white/90 transition-colors"
          >
            Claim your spot &rarr;
          </Link>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 sm:right-4 flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
