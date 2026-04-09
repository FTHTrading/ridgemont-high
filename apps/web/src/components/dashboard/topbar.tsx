"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export function DashboardTopbar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900 px-6">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ridgemont-cassetteGray-500" />
        <input
          type="text"
          placeholder="Search courses, labs, teachers…"
          className="h-9 w-full rounded-lg border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800 pl-10 pr-4 text-sm text-white placeholder:text-ridgemont-cassetteGray-500 focus:border-ridgemont-electricBlue-500 focus:outline-none focus:ring-1 focus:ring-ridgemont-electricBlue-500"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-ridgemont-cassetteGray-400 hover:bg-ridgemont-offBlack-800 hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-ridgemont-neonMagenta-500" />
        </button>
        <button className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-ridgemont-offBlack-800 transition-colors">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ridgemont-electricBlue-500 to-ridgemont-neonMagenta-500 flex items-center justify-center text-xs font-bold text-white">
            K
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-ridgemont-cassetteGray-400" />
        </button>
      </div>
    </header>
  );
}
