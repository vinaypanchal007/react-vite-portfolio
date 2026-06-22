import { portfolio } from "../lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.name}. Built with React + Vite + Tailwind.</p>
        <p>Dual-track portfolio for Data Analyst and Data Scientist roles.</p>
      </div>
    </footer>
  );
}