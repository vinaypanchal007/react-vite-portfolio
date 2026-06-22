import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { GitHubRepo } from "../lib/portfolio";

function formatRepoName(name: string) {
  return name
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function ProjectCard({ repo }: { repo: GitHubRepo }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-sky-400/40">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold leading-snug text-white">
          {formatRepoName(repo.name)}
        </h3>
      </div>

      <p className="min-h-[96px] text-sm leading-7 text-slate-300">
        {repo.description ||
          "Project repository with implementation details, code, and supporting files."}
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {repo.language && <span className="chip">{repo.language}</span>}

        <span className="chip inline-flex items-center gap-1 text-slate-300">
          <CalendarDays className="h-3.5 w-3.5" />
          Updated {formatDate(repo.updated_at)}
        </span>
      </div>

      <div className="mt-6">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
        >
          View Repository <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}