import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[20rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#111827] p-8 text-center sm:p-12 lg:p-16">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
            Open to new opportunities as a Mobile Developer. Feel free to reach out
            for collaborations, projects, or just a friendly chat.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {profile.phone}
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
