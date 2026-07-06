import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-600">
          © {year} {profile.nameEn}. All rights reserved.
        </p>
        <p className="text-sm text-slate-600">
          Built with{" "}
          <span className="text-slate-500">Next.js</span> &amp;{" "}
          <span className="text-slate-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
