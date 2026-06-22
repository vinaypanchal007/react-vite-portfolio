import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { GitHubRepo } from "../lib/portfolio";
import { portfolio } from "../lib/portfolio";

export function GithubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${portfolio.github}/repos?sort=updated&per_page=20&type=public`);
        if (!res.ok) throw new Error("Failed");
        const data: GitHubRepo[] = await res.json();
        const filtered = data
          .filter((repo) => !repo.fork && (repo.visibility ? repo.visibility === "public" : true))
          .sort((a, b) => {
            const aScore = a.stargazers_count * 2 + new Date(a.updated_at).getTime() / 1e11;
            const bScore = b.stargazers_count * 2 + new Date(b.updated_at).getTime() / 1e11;
            return bScore - aScore;
          })
          .slice(0, 6);
        setRepos(filtered);
      } catch {
        setError("GitHub repositories could not be loaded right now.");
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  if (loading) return <div className="section-shell p-8 text-slate-300">Loading GitHub projects...</div>;
  if (error) return <div className="section-shell p-8 text-slate-300">{error}</div>;

  return <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">{repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}</div>;
}