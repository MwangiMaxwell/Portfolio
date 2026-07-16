import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-2">
        {title}
      </h2>
    </div>
  );
}
