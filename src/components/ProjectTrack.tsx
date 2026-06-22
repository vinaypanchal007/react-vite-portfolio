type Project = { name: string; stack: string; summary: string };
type Props = { title: string; subtitle: string; projects: Project[] };

export function ProjectTrack({ title, subtitle, projects }: Props) {
  return (
    <div className="section-shell p-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 max-w-3xl text-slate-300">{subtitle}</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <div key={p.name + p.stack} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">{p.stack}</span>
            <h4 className="mt-4 text-lg font-semibold">{p.name}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{p.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}