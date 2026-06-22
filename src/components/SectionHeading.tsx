type Props = { eyebrow: string; title: string; subtitle?: string };

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p> : null}
    </div>
  );
}