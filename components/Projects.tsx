"use client";

import SectionTitle from "@/components/SectionTitle";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useLanguage } from "@/components/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label={t.projectsMeta.label}
          title={t.projectsMeta.title}
          description={t.projectsMeta.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {t.projectList.map((project, index) => (
            <RevealOnScroll key={project.name} delay={index * 80} direction={index % 2 === 0 ? "up" : "scale"}>
              <article className="group glass-card flex h-full flex-col rounded-2xl p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-cyan-300 sm:text-xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-violet-300">{project.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-500">
                    {project.period}
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300 transition-colors group-hover:bg-cyan-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-auto space-y-2 border-t border-white/5 pt-5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-slate-400 sm:text-sm"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs font-medium text-slate-600">{project.role}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
