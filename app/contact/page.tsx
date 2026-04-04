import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shashwat Tripathi for cloud architecture, full-stack development, or infrastructure consulting.",
};

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader label="Contact" title="Get in touch" as="h1" />
        <p className="mt-4 max-w-lg text-muted">
          Have a project in mind, need a cloud architecture review, or just want
          to say hello? I&apos;d love to hear from you.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-[1fr_280px]">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-muted transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">Socials</h3>
              <div className="mt-2">
                <SocialLinks showLabels />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Location
              </h3>
              <p className="mt-1 text-sm text-muted">Lucknow, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
