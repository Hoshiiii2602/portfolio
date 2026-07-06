type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
