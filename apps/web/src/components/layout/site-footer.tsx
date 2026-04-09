import Link from "next/link";
import { Zap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-heading text-sm font-bold text-white">
                Ridgemont AI
              </span>
            </div>
            <p className="text-xs text-ridgemont-cassetteGray-300">
              Online AI education with iconic-style instructors, real labs, and daily briefings.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Courses</Link></li>
              <li><Link href="/labs" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Labs</Link></li>
              <li><Link href="/today" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Today in AI</Link></li>
              <li><Link href="/projects" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="/instructors" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Meet the Instructors</Link></li>
              <li><Link href="/parents" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Parent Portal</Link></li>
              <li><Link href="/schools" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">For Schools</Link></li>
              <li><Link href="/pricing" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">About</Link></li>
              <li><Link href="/safety" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Safety</Link></li>
              <li><Link href="/privacy" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-ridgemont-cassetteGray-300 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-ridgemont-cassetteGray-700 pt-6 text-center">
          <p className="text-xs text-ridgemont-cassetteGray-400">
            &copy; {new Date().getFullYear()} Ridgemont AI Academy. Online AI education powered by iconic style and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
