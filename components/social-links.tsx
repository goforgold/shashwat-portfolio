import { siteConfig } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, StackOverflowIcon } from "./icons";

const links = [
  { href: siteConfig.links.github, label: "GitHub", icon: GitHubIcon },
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  {
    href: siteConfig.links.stackoverflow,
    label: "Stack Overflow",
    icon: StackOverflowIcon,
  },
];

export function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <div
      className={
        showLabels
          ? "space-y-2"
          : "flex items-center gap-5"
      }
    >
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted transition-colors hover:text-foreground ${
            showLabels ? "flex items-center gap-2 text-sm" : ""
          }`}
          aria-label={label}
        >
          <Icon className="w-4 h-4" />
          {showLabels && label}
        </a>
      ))}
    </div>
  );
}
