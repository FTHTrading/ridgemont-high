"use client";

import Link from "next/link";
import { FolderKanban, Plus, Clock, CheckCircle2, Circle } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "AI-Powered Study Assistant",
    track: "AI-Assisted Coding",
    status: "in_progress" as const,
    milestones: { completed: 3, total: 5 },
    mentor: "Mr. Stacks",
    updatedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Bias Detection in Hiring Algorithms",
    track: "AI Ethics & Society",
    status: "in_progress" as const,
    milestones: { completed: 1, total: 4 },
    mentor: "Judge Fairfax",
    updatedAt: "5 days ago",
  },
  {
    id: "3",
    title: "Prompt Chain for Creative Writing",
    track: "Prompt Engineering",
    status: "completed" as const,
    milestones: { completed: 4, total: 4 },
    mentor: "Mx. Cipher",
    updatedAt: "1 week ago",
  },
];

const statusConfig = {
  in_progress: {
    label: "In Progress",
    icon: Circle,
    color: "text-ridgemont-electricBlue-400",
    bg: "bg-ridgemont-electricBlue-500/10",
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    color: "text-ridgemont-arcadeGreen-400",
    bg: "bg-ridgemont-arcadeGreen-500/10",
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">
            Projects
          </h1>
          <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
            Capstone projects with milestones, mentor feedback, and shareable outputs.
          </p>
        </div>
        <Link
          href="/dashboard/projects/new"
          className="inline-flex items-center gap-2 rounded-lg bg-ridgemont-neonMagenta-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-ridgemont-neonMagenta-400 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((project) => {
          const status = statusConfig[project.status];
          const StatusIcon = status.icon;
          return (
            <Link
              key={project.id}
              href={`/dashboard/projects/${project.id}`}
              className="flex items-center justify-between rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5 hover:border-ridgemont-cassetteGray-500 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <FolderKanban className="h-6 w-6 text-ridgemont-warmGold-400 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-ridgemont-electricBlue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-ridgemont-cassetteGray-400 mt-0.5">
                    {project.track} · Mentor: {project.mentor}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-ridgemont-cassetteGray-400">
                    Milestones
                  </p>
                  <p className="text-sm font-medium text-white">
                    {project.milestones.completed}/{project.milestones.total}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-md ${status.bg} px-2.5 py-1 text-xs font-medium ${status.color}`}
                >
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                </span>
                <span className="flex items-center gap-1 text-xs text-ridgemont-cassetteGray-500">
                  <Clock className="h-3 w-3" /> {project.updatedAt}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
