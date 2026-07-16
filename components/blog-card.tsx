import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block rounded-3xl border border-border/70",
        "bg-card/40 backdrop-blur-sm p-6 sm:p-8",
        "ring-1 ring-white/[0.04] shadow-lg shadow-black/10",
        "transition-all duration-300",
        "hover:border-primary/30 hover:ring-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <time className="font-mono text-xs text-muted-foreground">
          {formattedDate}
        </time>
        <span className="font-mono text-xs text-muted-foreground">
          {post.readTime}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
        {post.title}
      </h3>

      <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
        {post.excerpt}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 bg-muted/30 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        Read
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </Link>
  );
}
