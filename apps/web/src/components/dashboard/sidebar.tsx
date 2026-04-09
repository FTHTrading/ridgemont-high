"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  Users,
  Newspaper,
  FolderKanban,
  Settings,
  Zap,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Labs", href: "/dashboard/labs", icon: FlaskConical },
  { name: "Teachers", href: "/dashboard/teachers", icon: Users },
  { name: "Today in AI", href: "/dashboard/today", icon: Newspaper },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-ridgemont-cassetteGray-700 px-5">
        <Zap className="h-6 w-6 text-ridgemont-neonMagenta-400" />
        <span className="font-heading text-lg font-bold text-white">
          Ridgemont
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-ridgemont-neonMagenta-500/10 text-ridgemont-neonMagenta-400"
                  : "text-ridgemont-cassetteGray-300 hover:bg-ridgemont-offBlack-800 hover:text-white"
              }`}
            >
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-ridgemont-cassetteGray-700 p-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ridgemont-cassetteGray-400 hover:bg-ridgemont-offBlack-800 hover:text-white transition-colors">
          <LogOut className="h-4.5 w-4.5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
