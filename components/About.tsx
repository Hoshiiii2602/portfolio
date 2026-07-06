import SectionTitle from "@/components/SectionTitle";
import { hobbies, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="About"
          title="Crafting mobile experiences that matter"
          description="Passionate about building scalable, secure, and performant mobile products."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                {profile.objective}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">
                Interests
              </h3>
              <ul className="space-y-3">
                {hobbies.map((hobby) => (
                  <li key={hobby} className="flex items-start gap-3 text-sm text-slate-400 sm:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
