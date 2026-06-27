import { Download, FileText } from "lucide-react";

type Props = { title: string; subtitle: string; href: string; bullets: string[] };

export function ResumeCard({ title, subtitle, href, bullets }: Props) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-6 shadow-[0_22px_60px_rgba(56,189,248,0.08)] backdrop-blur-sm transition duration-300 hover:border-sky-400/30">
      <div className="mb-5 flex items-center gap-3">
        <FileText className="h-5 w-5 text-sky-400" />
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <p className="mb-6 text-sm leading-7 text-slate-300">{subtitle}</p>
      <ul className="mb-7 space-y-3 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/10 transition hover:bg-sky-400">
        Download Resume <Download className="h-4 w-4" />
      </a>
    </div>
  );
}