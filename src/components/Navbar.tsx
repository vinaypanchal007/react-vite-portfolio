import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Overview", "#overview"],
  ["Resume", "#resume"],
  ["Projects", "#projects"],
  ["GitHub", "#github"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white">
          Vinay Panchal
        </a>

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

        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-300 transition hover:text-white"
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
