import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="Projects"
          title="Featured work"
          description="A selection of mobile and web projects across fintech, enterprise, and consumer domains."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20 hover:bg-white/[0.04] sm:p-8"
            >
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
                    className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-auto space-y-2 border-t border-white/5 pt-5">
                {project.highlights.slice(0, 3).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-500 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-xs text-slate-600">{project.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
