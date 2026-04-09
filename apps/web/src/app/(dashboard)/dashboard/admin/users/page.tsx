"use client";

import { useState } from "react";
import { Search, UserPlus, MoreVertical, Shield, GraduationCap, Eye } from "lucide-react";

type Role = "student" | "guardian" | "instructor" | "content_editor" | "admin";

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "active" | "suspended" | "pending";
  enrollments: number;
  lastActive: string;
  joinedAt: string;
}

const mockUsers: UserRow[] = [
  { id: "1", name: "Alex Johnson", email: "alex@school.edu", role: "student", status: "active", enrollments: 3, lastActive: "5 min ago", joinedAt: "2024-09-01" },
  { id: "2", name: "Sarah Williams", email: "sarah@parent.com", role: "guardian", status: "active", enrollments: 0, lastActive: "1 hour ago", joinedAt: "2024-09-01" },
  { id: "3", name: "Professor Hartwell", email: "hartwell@ridgemont.ai", role: "instructor", status: "active", enrollments: 0, lastActive: "30 min ago", joinedAt: "2024-08-15" },
  { id: "4", name: "Ms. Chen", email: "chen@ridgemont.ai", role: "instructor", status: "active", enrollments: 0, lastActive: "2 hours ago", joinedAt: "2024-08-15" },
  { id: "5", name: "Jamie Torres", email: "jamie@school.edu", role: "student", status: "active", enrollments: 5, lastActive: "10 min ago", joinedAt: "2024-09-05" },
  { id: "6", name: "Kim Park", email: "kpark@school.edu", role: "student", status: "suspended", enrollments: 2, lastActive: "3 days ago", joinedAt: "2024-09-10" },
  { id: "7", name: "Coach Williams", email: "coach@ridgemont.ai", role: "instructor", status: "active", enrollments: 0, lastActive: "45 min ago", joinedAt: "2024-08-15" },
  { id: "8", name: "Taylor Reed", email: "treed@school.edu", role: "student", status: "pending", enrollments: 0, lastActive: "Never", joinedAt: "2024-10-01" },
];

const roleColors: Record<Role, string> = {
  student: "bg-blue-500/20 text-blue-400",
  guardian: "bg-purple-500/20 text-purple-400",
  instructor: "bg-emerald-500/20 text-emerald-400",
  content_editor: "bg-amber-500/20 text-amber-400",
  admin: "bg-fuchsia-500/20 text-fuchsia-400",
};

const statusColors = {
  active: "text-emerald-400",
  suspended: "text-red-400",
  pending: "text-amber-400",
};

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "all">("all");

  const filtered = mockUsers.filter((u) => {
    if (roleFilter !== "all" && u.role !== roleFilter) return false;
    if (search && !u.name.toLowerCase().includes(search.toLowerCase()) && !u.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">User Management</h1>
          <p className="text-sm text-zinc-400">Manage platform users, roles, and access</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white hover:bg-fuchsia-500">
          <UserPlus className="h-4 w-4" />
          Add User
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-fuchsia-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-800/60 p-1">
          {(["all", "student", "guardian", "instructor", "admin"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                roleFilter === r ? "bg-fuchsia-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Enrollments</th>
              <th className="px-4 py-3">Last Active</th>
              <th className="px-4 py-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filtered.map((user) => (
              <tr key={user.id} className="transition-colors hover:bg-zinc-800/40">
                <td className="px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-zinc-500">{user.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${roleColors[user.role]}`}>
                    {user.role.replace("_", " ")}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium capitalize ${statusColors[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-400">{user.enrollments}</td>
                <td className="px-4 py-3 text-xs text-zinc-500">{user.lastActive}</td>
                <td className="px-4 py-3">
                  <button className="rounded p-1 text-zinc-500 hover:bg-zinc-700 hover:text-white">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
