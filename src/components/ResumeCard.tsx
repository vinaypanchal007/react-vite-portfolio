import { Download, FileText } from "lucide-react";

type Props = { title: string; subtitle: string; href: string; bullets: string[] };

export function ResumeCard({ title, subtitle, href, bullets }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-glow">
      <div className="mb-4 flex items-center gap-3">
        <FileText className="h-5 w-5 text-sky-400" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mb-4 text-sm leading-6 text-slate-300">{subtitle}</p>
      <ul className="mb-6 space-y-2 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-sky-400" /> <span>{b}</span></li>
        ))}
      </ul>
      <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400">
        Download Resume <Download className="h-4 w-4" />
      </a>
    </div>
  );
}