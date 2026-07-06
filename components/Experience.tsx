import SectionTitle from "@/components/SectionTitle";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="Experience"
          title="Professional journey"
          description="From intern to mobile developer — building products across fintech, enterprise, and consumer apps."
        />

        <div className="relative space-y-0">
          <div className="absolute left-[1.125rem] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent sm:block" />

          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className="relative grid gap-4 pb-12 sm:grid-cols-[12rem_1fr] sm:gap-8 sm:pb-16 last:pb-0"
            >
              <div className="flex items-start gap-4 sm:block">
                <div className="relative z-10 mt-1 hidden h-[2.25rem] w-[2.25rem] shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-[#060b14] sm:flex">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>
                <div>
                  <p className="font-mono text-xs font-medium text-cyan-400 sm:text-sm">
                    {exp.period}
                  </p>
                  {index === 0 && (
                    <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04] sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-base text-violet-300">{exp.company}</p>

                <ul className="mt-6 space-y-3">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-400 sm:text-base"
                    >
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-cyan-500/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
