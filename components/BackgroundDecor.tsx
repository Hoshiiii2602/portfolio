export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="diagonal-lines absolute inset-0" />
      <div className="diagonal-lines-alt absolute inset-0" />
      <div className="diagonal-accent absolute -right-[20%] top-[10%] h-[60vh] w-[50vw] rotate-[-18deg] bg-gradient-to-b from-cyan-500/[0.05] via-transparent to-violet-500/[0.04]" />
      <div className="diagonal-accent absolute -left-[15%] bottom-[15%] h-[50vh] w-[45vw] rotate-[12deg] bg-gradient-to-t from-rose-500/[0.04] via-transparent to-transparent" />
      <div className="absolute left-[8%] top-[30%] h-px w-[35vw] rotate-[-25deg] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      <div className="absolute right-[5%] top-[55%] h-px w-[40vw] rotate-[20deg] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute left-[20%] bottom-[25%] h-px w-[30vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-rose-400/15 to-transparent" />
      <div className="absolute left-[40%] top-[70%] h-px w-[25vw] rotate-[-35deg] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      <div className="absolute right-[25%] top-[15%] h-px w-[20vw] rotate-[30deg] bg-gradient-to-r from-transparent via-violet-400/12 to-transparent" />
    </div>
  );
}
