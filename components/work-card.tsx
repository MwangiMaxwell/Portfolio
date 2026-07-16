import Link from "next/link";
import type { Work } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";

interface WorkCardProps {
  work: Work;
  index: number;
}

export function WorkCard({ work, index }: WorkCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-3xl border border-border/70",
        "bg-card/40 backdrop-blur-sm p-6 sm:p-8",
        "ring-1 ring-white/[0.04] shadow-lg shadow-black/10",
        "transition-all duration-300",
        "hover:border-primary/30 hover:ring-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{work.year}</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
        {work.title}
      </h3>

      <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base flex-1">
        {work.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 bg-muted/30 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50 flex gap-4">
        {work.github && (
          <a
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github />
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
