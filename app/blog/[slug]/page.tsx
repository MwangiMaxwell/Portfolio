import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroBackground } from "@/components/hero-background";
import { blogPosts, getBlogPost } from "@/lib/data";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} — Maxwell Mwangi`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="relative">
      <HeroBackground />

      <article className="relative max-w-2xl mx-auto px-6 pt-28 pb-32 sm:pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <header>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <time>{formattedDate}</time>
            <span>{post.readTime} read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4 leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 bg-muted/30 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-12 prose prose-invert prose-neutral max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3
                  key={i}
                  className="text-lg font-semibold mt-8 mb-3 text-foreground"
                >
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }
            return (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </main>
  );
}
