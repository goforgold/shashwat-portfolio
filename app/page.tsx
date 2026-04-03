import Image from "next/image";
import Link from "next/link";
import { projects, skillCategories, siteConfig } from "@/lib/data";

const categoryColors: Record<string, { label: string; pill: string }> = {
  Languages: {
    label: "text-amber-500 dark:text-amber-400",
    pill: "border-amber-500/25 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10",
  },
  "Cloud & Infrastructure": {
    label: "text-sky-500 dark:text-sky-400",
    pill: "border-sky-500/25 text-sky-700 dark:text-sky-400 hover:bg-sky-500/10",
  },
  Frameworks: {
    label: "text-violet-500 dark:text-violet-400",
    pill: "border-violet-500/25 text-violet-700 dark:text-violet-400 hover:bg-violet-500/10",
  },
  "Data Engineering": {
    label: "text-emerald-500 dark:text-emerald-400",
    pill: "border-emerald-500/25 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10",
  },
  Databases: {
    label: "text-rose-500 dark:text-rose-400",
    pill: "border-rose-500/25 text-rose-700 dark:text-rose-400 hover:bg-rose-500/10",
  },
  "CI/CD & DevOps": {
    label: "text-cyan-500 dark:text-cyan-400",
    pill: "border-cyan-500/25 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500/10",
  },
};

const companyColors: Record<string, string> = {
  DMG: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  Sabre: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Personal: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[max(calc(100dvh-4rem),600px)] items-center justify-center overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Centered subtle glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="animate-in mx-auto mb-8 relative h-40 w-40 overflow-hidden rounded-full border-2 border-amber-500/30 shadow-lg shadow-amber-500/10">
            <Image
              src="/shashwat-hero.jpg"
              alt="Shashwat Tripathi"
              fill
              className="object-cover object-[center_15%] scale-[1.4]"
              sizes="160px"
              priority
            />
          </div>
          <p
            className="animate-in text-sm font-medium tracking-widest text-accent uppercase"
            style={{ animationDelay: "100ms" }}
          >
            Full Stack Engineer &amp; Cloud Architect
          </p>
          <h1
            className="animate-in mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "200ms" }}
          >
            <span className="gradient-text">Shashwat Tripathi</span>
          </h1>
          <p
            className="animate-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "300ms" }}
          >
            {siteConfig.description}
          </p>
          <div
            className="animate-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "400ms" }}
          >
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:from-amber-500 dark:to-orange-500"
            >
              View my work
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line px-8 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Get in touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-in mt-16"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#work"
              className="inline-block text-muted/50 transition-colors hover:text-muted"
              aria-label="Scroll down"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="border-t border-line py-24 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm text-muted transition-colors hover:text-accent sm:block"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-line p-6 transition-all hover:border-amber-500/30 hover:bg-surface/50"
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${companyColors[project.company] || "bg-surface text-muted"}`}
                >
                  {project.company}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Expertise
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills &amp; Technologies
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => {
              const colors = categoryColors[category.name];
              return (
                <div key={category.name}>
                  <h3
                    className={`text-sm font-semibold ${colors?.label || "text-foreground"}`}
                  >
                    {category.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-3 py-1 text-sm transition-colors ${colors?.pill || "border-line text-muted"}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Whether you need a cloud architecture review, a full-stack
            application, or help scaling your infrastructure — I&apos;d love to
            hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:from-amber-500 dark:to-orange-500"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
