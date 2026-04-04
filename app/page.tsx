import Image from "next/image";
import Link from "next/link";
import { projects, skillCategories } from "@/lib/data";
import { companyColors, categoryColors } from "@/lib/colors";
import { ExperienceYears } from "@/components/dynamic-year";
import { SkillIcon } from "@/components/skill-icon";
import { SectionHeader } from "@/components/section-header";
import { TechBadge } from "@/components/tech-badge";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[max(calc(100dvh-4rem),600px)] items-center justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="animate-in mx-auto mb-8 relative h-40 w-40 overflow-hidden rounded-full border-2 border-amber-500/30 shadow-lg shadow-amber-500/10">
            <Image
              src="/shashwat-hero.jpg"
              alt="Shashwat Tripathi"
              fill
              className="object-cover scale-[1.5] translate-y-[15%]"
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
            I architect cloud infrastructure, build full-stack systems, and
            engineer data pipelines. <ExperienceYears /> years of shipping
            production software across enterprise and startups.
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
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line px-8 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Get in touch
            </Link>
          </div>

          <div
            className="animate-in mt-16"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#work"
              className="inline-block text-muted/50 transition-colors hover:text-muted"
              aria-label="Scroll down"
            >
              <ChevronDownIcon className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="border-t border-line py-24 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-end justify-between">
            <SectionHeader label="Selected work" title="Featured Projects" />
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
                    <TechBadge key={tech} name={tech} />
                  ))}
                  {project.technologies.length > 4 && (
                    <TechBadge
                      name={`+${project.technologies.length - 4}`}
                    />
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
          <SectionHeader label="Expertise" title="Skills & Technologies" />

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
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors ${colors?.pill || "border-line text-muted"}`}
                      >
                        <SkillIcon name={skill} />
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
