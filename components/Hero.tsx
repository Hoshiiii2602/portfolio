import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -right-32 top-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-sm text-cyan-300">Available for opportunities</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                {profile.nameEn}
              </span>
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">
              {profile.title}
            </p>

            <p className="mt-2 flex flex-wrap gap-2 text-sm text-slate-500 sm:text-base">
              {profile.roles.map((role) => (
                <span key={role} className="after:content-['·'] last:after:content-none">
                  {role}
                </span>
              ))}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Building high-performance mobile applications in{" "}
              <span className="text-slate-300">Fintech</span> and{" "}
              <span className="text-slate-300">product-based</span> domains with
              Flutter &amp; React Native.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
              >
                View my work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-500">
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {profile.phone}
              </a>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </span>
            </div>
          </div>

          <div className="animate-fade-up animation-delay-200 mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative flex h-56 w-56 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#111827] shadow-2xl sm:h-72 sm:w-72">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-3xl font-bold text-white shadow-lg sm:h-28 sm:w-28 sm:text-4xl">
                    XT
                  </div>
                  <p className="font-display text-lg font-semibold text-white">Mobile Dev</p>
                  <p className="mt-1 text-sm text-slate-500">Flutter · React Native</p>
                </div>
              </div>

              <div className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-[#0d1526]/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-right-8">
                <p className="text-2xl font-bold text-cyan-400">3+</p>
                <p className="text-xs text-slate-500">Years Experience</p>
              </div>

              <div className="absolute -left-4 bottom-8 rounded-xl border border-white/10 bg-[#0d1526]/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-8">
                <p className="text-2xl font-bold text-violet-400">6+</p>
                <p className="text-xs text-slate-500">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition-colors hover:text-cyan-400 sm:flex"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
