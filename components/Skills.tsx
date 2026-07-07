"use client";

import SectionTitle from "@/components/SectionTitle";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/components/LanguageProvider";

const categoryStyles: Record<
  string,
  { accent: string; border: string; bg: string; icon: string }
> = {
  Mobile: {
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-transparent",
    icon: "📱",
  },
  Frontend: {
    accent: "text-blue-400",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-transparent",
    icon: "🖥️",
  },
  "State Management": {
    accent: "text-violet-400",
    border: "border-violet-500/20",
    bg: "from-violet-500/10 to-transparent",
    icon: "⚡",
  },
  Fintech: {
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "from-emerald-500/10 to-transparent",
    icon: "💰",
  },
  "Third-party SDK": {
    accent: "text-amber-400",
    border: "border-amber-500/20",
    bg: "from-amber-500/10 to-transparent",
    icon: "🔌",
  },
  Networking: {
    accent: "text-sky-400",
    border: "border-sky-500/20",
    bg: "from-sky-500/10 to-transparent",
    icon: "🌐",
  },
  Security: {
    accent: "text-rose-400",
    border: "border-rose-500/20",
    bg: "from-rose-500/10 to-transparent",
    icon: "🔒",
  },
  Tools: {
    accent: "text-slate-300",
    border: "border-slate-500/20",
    bg: "from-slate-500/10 to-transparent",
    icon: "🛠️",
  },
  Performance: {
    accent: "text-orange-400",
    border: "border-orange-500/20",
    bg: "from-orange-500/10 to-transparent",
    icon: "🚀",
  },
};

const featuredCategories = new Set(["Mobile", "Fintech", "Frontend"]);

export default function Skills() {
  const { t } = useLanguage();
  const featured = t.skillGroups.filter((g) => featuredCategories.has(g.category));
  const rest = t.skillGroups.filter((g) => !featuredCategories.has(g.category));

  return (
    <section id="skills" className="relative py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-px w-1/3 rotate-[-8deg] bg-gradient-to-r from-violet-500/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle
          label={t.skills.label}
          title={t.skills.title}
          description={t.skills.description}
        />

        <RevealOnScroll>
          <div className="mb-12 flex flex-wrap gap-3">
            {t.strengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-5 py-2.5 text-sm font-medium text-violet-300 transition-all hover:scale-105 hover:border-violet-500/40"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {strength}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {featured.map((group, index) => {
            const style = categoryStyles[group.category] ?? categoryStyles.Tools;
            return (
              <RevealOnScroll key={group.category} delay={index * 80}>
                <SkillCard group={group} style={style} featured />
              </RevealOnScroll>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((group, index) => {
            const style = categoryStyles[group.category] ?? categoryStyles.Tools;
            return (
              <RevealOnScroll key={group.category} delay={index * 60}>
                <SkillCard group={group} style={style} />
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  style,
  featured = false,
}: {
  group: { category: string; skills: string[] };
  style: { accent: string; border: string; bg: string; icon: string };
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.bg} p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 sm:p-6 ${
        featured ? "sm:min-h-[200px]" : ""
      }`}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/[0.02] blur-2xl transition-all group-hover:bg-white/[0.04]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg backdrop-blur-sm">
          {style.icon}
        </span>
        <div>
          <h3 className={`font-display text-sm font-semibold uppercase tracking-wider ${style.accent}`}>
            {group.category}
          </h3>
          <p className="text-xs text-slate-600">{group.skills.length} skills</p>
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/5 bg-[#040810]/40 px-2.5 py-1 text-xs text-slate-300 transition-colors group-hover:border-white/10 group-hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
