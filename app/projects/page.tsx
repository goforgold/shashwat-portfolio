import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Shashwat Tripathi — cloud-native platforms, infrastructure automation, and developer tools.",
};

const companyColors: Record<string, string> = {
  DMG: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  Sabre: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Personal: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

const sectionColors: Record<string, string> = {
  Problem: "text-rose-500 dark:text-rose-400",
  Solution: "text-sky-500 dark:text-sky-400",
  Impact: "text-emerald-500 dark:text-emerald-400",
};

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium tracking-widest text-accent uppercase">
          Projects
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected Work
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          A selection of projects I&apos;ve built across cloud infrastructure,
          full-stack applications, and developer platforms.
        </p>

        <div className="mt-16 space-y-12">
          {projects.map((project, i) => (
            <article
              key={i}
              className="rounded-xl border border-line p-8 transition-colors hover:border-amber-500/30"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${companyColors[project.company] || "bg-surface text-muted"}`}
                  >
                    {project.company}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold text-foreground">
                    {project.title}
                  </h2>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-amber-500/40 hover:text-foreground"
                  >
                    Visit
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="mt-4 leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {(["Problem", "Solution", "Impact"] as const).map((label) => (
                  <div key={label}>
                    <h3
                      className={`text-xs font-semibold tracking-widest uppercase ${sectionColors[label]}`}
                    >
                      {label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project[label.toLowerCase() as "problem" | "solution" | "impact"]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-amber-500/30 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
