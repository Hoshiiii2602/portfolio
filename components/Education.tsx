import SectionTitle from "@/components/SectionTitle";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle label="Education" title="Academic background" />

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {education.school}
              </h3>
              <p className="mt-2 text-base text-violet-300">{education.degree}</p>
              <p className="mt-1 text-sm text-slate-500">{education.major}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {education.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-row gap-4 sm:flex-col sm:items-end sm:gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center">
                <p className="font-mono text-xs text-slate-500">GPA</p>
                <p className="font-display text-2xl font-bold text-cyan-400">{education.gpa}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center">
                <p className="font-mono text-xs text-slate-500">Period</p>
                <p className="text-sm font-medium text-slate-300">{education.period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
