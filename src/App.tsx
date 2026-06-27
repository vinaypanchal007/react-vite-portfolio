import { ArrowRight, BrainCircuit, Database, Github, Linkedin, Mail, MapPin, Sparkles, Trophy } from "lucide-react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SectionHeading } from "./components/SectionHeading";
import { ResumeCard } from "./components/ResumeCard";
import { ProjectTrack } from "./components/ProjectTrack";
import { GithubProjects } from "./components/GithubProjects";
import { portfolio } from "./lib/portfolio";

export default function App() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />

      <section id="overview" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16">
        <div className="section-shell overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <Sparkles className="h-4 w-4" />Open to Data Analytics • AI/ML • Business Intelligence roles
              </div>
              <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-6xl">
                {portfolio.name}
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">{portfolio.title}</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{portfolio.heroBlurb}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#resume" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-center font-medium text-slate-950 transition hover:bg-sky-400 sm:w-auto">
                  Resume Tracks <ArrowRight className="h-4 w-4" />
                </a>
                <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center font-medium text-white transition hover:bg-white/10 sm:w-auto">
                  GitHub <Github className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["SQL","Power BI","Python","Machine Learning","NLP","RAG"].map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
                <div className="flex flex-col items-center text-center">
                  <img src={portfolio.profileImage} alt="Vinay Panchal profile" className="h-32 w-32 rounded-3xl border border-white/10 object-cover sm:h-36 sm:w-36" />
                  <h2 className="mt-4 text-xl font-bold sm:text-2xl">{portfolio.name}</h2>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4" /> {portfolio.location}</div>
                </div>

                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Certifications
                  </h3>

                  <div className="space-y-3">
                    {portfolio.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200"
                      >
                        <Trophy className="mt-0.5 h-4 w-4 text-sky-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Status
                  </h3>

                  <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4 text-sm text-sky-100">
                    💼 Open to Data Analyst and Data Scientist opportunities
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" className="chip inline-flex w-full items-center justify-center gap-2 text-center sm:w-auto"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                  <a href={`mailto:${portfolio.email}`} className="chip inline-flex w-full items-center justify-center gap-2 text-center sm:w-auto"><Mail className="h-4 w-4" /> Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeading
          eyebrow="Resume"
          title="Professional Resume"
          subtitle="A single resume showcasing my experience in Data Analytics, Data Science, Machine Learning, AI and RAG."
        />

        <div className="section-shell overflow-hidden p-5 sm:p-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/75 p-5 sm:p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] transition duration-300 hover:border-sky-400/30">
            <ResumeCard
              title="Vinay Panchal Resume"
              subtitle="Suitable for Data Analyst, Data Scientist, ML Engineer, AI Engineer and Business Intelligence roles."
              href={portfolio.resume}
              bullets={[
                "Python, SQL & Power BI",
                "Machine Learning & NLP",
                "RAG Applications",
                "FastAPI & React Projects",
                "End-to-End Data Analytics"
              ]}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          subtitle="Machine Learning, analytics, AI, and dashboarding projects built to solve real business problems."
        />

        <ProjectTrack
          title="Featured Projects"
          subtitle="Machine Learning, Analytics, AI and Dashboarding projects."
          projects={portfolio.projects}
        />

        <div className="mt-8 section-shell p-8 sm:p-10">
          <h3 className="mb-4 text-lg font-semibold text-white">Skills</h3>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.skills.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 transition duration-300 hover:border-sky-400/20 hover:bg-slate-900/70"
              >
                <div className="flex items-center gap-3 text-sm text-slate-100">
                  <Database className="h-4 w-4 text-sky-400" />
                  <span className="font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="github" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionHeading eyebrow="GitHub" title="Live repositories from GitHub" subtitle="Public non-fork repositories are pulled automatically so you don't need to manually maintain a project grid." />
        <GithubProjects />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="section-shell p-5 sm:p-8">
          <SectionHeading eyebrow="Contact" title="Let's build something useful from the numbers" subtitle={portfolio.about} />
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${portfolio.email}`} className="chip">{portfolio.email}</a>
            <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" className="chip">GitHub / {portfolio.github}</a>
            <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" className="chip">LinkedIn</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
