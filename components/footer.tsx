import { siteConfig } from "@/lib/data";
import { CurrentYear } from "./dynamic-year";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; <CurrentYear /> {siteConfig.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
