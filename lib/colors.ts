export const companyColors: Record<string, string> = {
  DMG: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  Sabre: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Personal: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export const categoryColors: Record<string, { label: string; pill: string }> = {
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

export const sectionColors: Record<string, string> = {
  Problem: "text-rose-500 dark:text-rose-400",
  Solution: "text-sky-500 dark:text-sky-400",
  Impact: "text-emerald-500 dark:text-emerald-400",
};
