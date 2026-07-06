import SectionTitle from "@/components/SectionTitle";
import { skillGroups, strengths } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="Skills"
          title="Technical expertise"
          description="A comprehensive toolkit for building modern mobile and web applications."
        />

        <div className="mb-10 flex flex-wrap gap-3">
          {strengths.map((strength) => (
            <span
              key={strength}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {strength}
            </span>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/10 sm:p-6"
            >
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400 transition-colors hover:border-cyan-500/20 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
