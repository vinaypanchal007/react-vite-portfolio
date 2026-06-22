import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Overview", "#overview"],
  ["Resumes", "#resumes"],
  ["Analytics", "#analytics"],
  ["Data Science", "#science"],
  ["GitHub", "#github"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white">
          Vinay Panchal
        </a>

        {/* Desktop nav */}
        <div className="hidden gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}