export function TechBadge({
  name,
  variant = "default",
}: {
  name: string;
  variant?: "default" | "outline";
}) {
  const styles = {
    default: "rounded-md bg-surface px-2 py-0.5 text-xs text-muted",
    outline:
      "rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-amber-500/30 hover:text-foreground",
  };

  return <span className={styles[variant]}>{name}</span>;
}
