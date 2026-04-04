import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { companyColors, sectionColors } from "@/lib/colors";
import { SectionHeader } from "@/components/section-header";
import { TechBadge } from "@/components/tech-badge";
import { ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Shashwat Tripathi — cloud-native platforms, infrastructure automation, and developer tools.",
};

const sectionKeys = ["Problem", "Solution", "Impact"] as const;

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader label="Projects" title="Selected Work" as="h1" />
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
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>

              <p className="mt-4 leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {sectionKeys.map((label) => (
                  <div key={label}>
                    <h3
                      className={`text-xs font-semibold tracking-widest uppercase ${sectionColors[label]}`}
                    >
                      {label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {
                        project[
                          label.toLowerCase() as
                            | "problem"
                            | "solution"
                            | "impact"
                        ]
                      }
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="outline" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
