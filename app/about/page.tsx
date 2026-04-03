import type { Metadata } from "next";
import Image from "next/image";
import { experiences, achievements } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The journey of Shashwat Tripathi — from .NET engineer to Full Stack Engineer & Cloud Architect with over a decade of experience.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-amber-500/20 shadow-lg shadow-amber-500/5">
                <Image
                  src="/shashwat.jpg"
                  alt="Shashwat Tripathi"
                  fill
                  className="object-cover"
                  sizes="256px"
                  priority
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                About me
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Building systems that scale,
                <br />
                infrastructure that lasts.
              </h1>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  I&apos;m a Full Stack Engineer and Cloud Architect with over 10
                  years of experience across enterprise platforms and startups. I
                  work at the intersection of application development, cloud
                  infrastructure, and data engineering.
                </p>
                <p>
                  Currently at Divisions Maintenance Group, I build microservices
                  with Spring Boot and .NET Core, engineer data pipelines with
                  AWS Glue and Airflow, and architect Kubernetes-based
                  deployment platforms.
                </p>
                <p>
                  My career arc has taken me from writing .NET applications in
                  Lucknow to leading a Singtel project in Singapore, consulting
                  independently for multiple firms, and engineering at Sabre and
                  DMG. Along the way, I&apos;ve led teams of 20+, earned recognition
                  at IIM Lucknow, and built products used by thousands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve worked
          </h2>

          <div className="mt-12 space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group relative grid gap-4 border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr]"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {exp.company}
                  </span>
                  <span className="mt-1 text-xs text-muted">{exp.period}</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted transition-colors hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Recognition
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Achievements
          </h2>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-line p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 dark:text-amber-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Academic Background
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-line p-6">
              <h3 className="font-semibold text-foreground">
                Master of Computer Application
              </h3>
              <p className="mt-1 text-sm text-muted">
                Lovely Professional University
              </p>
            </div>
            <div className="rounded-xl border border-line p-6">
              <h3 className="font-semibold text-foreground">
                Bachelor of Computer Application
              </h3>
              <p className="mt-1 text-sm text-muted">
                Indira Gandhi National Open University
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
