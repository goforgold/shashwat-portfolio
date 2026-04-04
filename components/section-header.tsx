type HeadingLevel = "h1" | "h2";

export function SectionHeader({
  label,
  title,
  as: Heading = "h2",
}: {
  label: string;
  title: string;
  as?: HeadingLevel;
}) {
  return (
    <div>
      <p className="text-sm font-medium tracking-widest text-accent uppercase">
        {label}
      </p>
      <Heading className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </Heading>
    </div>
  );
}
