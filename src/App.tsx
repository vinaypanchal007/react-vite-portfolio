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

      <section id="overview" className="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:pt-16">
        <div className="section-shell overflow-hidden p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <Sparkles className="h-4 w-4" />Open to Data Analyst + Data Scientist roles
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                {portfolio.name}
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">{portfolio.title}</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{portfolio.heroBlurb}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#resumes" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-slate-950 hover:bg-sky-400">
                  Resume Tracks <ArrowRight className="h-4 w-4" />
                </a>
                <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10">
                  GitHub <Github className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {["SQL","Power BI","Python","Machine Learning","NLP","RAG"].map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <div className="flex flex-col items-center text-center">
                  <img src={portfolio.profileImage} alt="Vinay Panchal profile" className="h-36 w-36 rounded-3xl border border-white/10 object-cover" />
                  <h2 className="mt-4 text-2xl font-bold">{portfolio.name}</h2>
                  {/* <p className="mt-1 text-slate-300">{portfolio.title}</p> */}
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

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" className="chip inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                  <a href={`mailto:${portfolio.email}`} className="chip inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resumes" className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading eyebrow="Resume Paths" title="Choose the version that matches the role" subtitle="One portfolio, two resume routes: analytics-focused and machine-learning-focused." />
        <div className="grid gap-6 lg:grid-cols-2">
          <ResumeCard title="Data Analyst Resume" subtitle="Use this for SQL, Power BI, dashboarding, reporting, business analysis and KPI-focused roles." href={portfolio.analystResume} bullets={["Highlights Banking Analytics Dashboard and E-Commerce Sales Analysis","Positions you around SQL, Power BI, KPI reporting, EDA and business insights","Best for Data Analyst, BI Analyst, Reporting Analyst and dashboard-heavy roles"]}/>
          <ResumeCard title="Data Scientist / ML Resume" subtitle="Use this for ML, NLP, AI and RAG-oriented roles where model-building matters more than dashboarding." href={portfolio.scientistResume} bullets={["Highlights Fake Job Prediction using RAG and ML-based employee performance prediction","Positions you around Python, ML, NLP, TF-IDF, feature engineering and model evaluation","Best for Data Scientist, ML Engineer fresher and AI project-based roles"]}/>
        </div>
      </section>

      <section id="analytics" className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading eyebrow="Track 1" title="Data Analytics portfolio lane" subtitle="This lane speaks to recruiters who want SQL, Power BI, dashboarding, KPI analysis, business problem solving and decision-ready reporting." />
        <ProjectTrack title="Analytics Projects" subtitle="Projects that strengthen your analyst profile." projects={portfolio.analystProjects} />
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.analystSkills.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="flex items-center gap-3"><Database className="h-4 w-4 text-sky-400" /><span className="font-medium">{item}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="science" className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading eyebrow="Track 2" title="Data Science / ML / RAG portfolio lane" subtitle="This lane is for recruiters who care about predictive modeling, NLP, ML pipelines, experimentation and AI projects." />
        <ProjectTrack title="Data Science Projects" subtitle="Projects and capabilities that strengthen your ML / AI profile." projects={portfolio.scientistProjects} />
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {portfolio.scientistSkills.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="flex items-center gap-3"><BrainCircuit className="h-4 w-4 text-violet-400" /><span className="font-medium">{item}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="github" className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeading eyebrow="GitHub" title="Live repositories from GitHub" subtitle="Public non-fork repositories are pulled automatically so you don’t need to manually maintain a project grid." />
        <GithubProjects />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-10">
        <div className="section-shell p-8 sm:p-10">
          <SectionHeading eyebrow="Contact" title="Let’s build something useful from the numbers" subtitle={portfolio.about} />
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