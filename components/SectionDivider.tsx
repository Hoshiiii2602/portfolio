export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-8" aria-hidden="true">
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute left-[10%] top-0 h-px w-[40%] rotate-[-1.5deg] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute right-[10%] top-0 h-px w-[35%] rotate-[1deg] bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />
      </div>
    </div>
  );
}
