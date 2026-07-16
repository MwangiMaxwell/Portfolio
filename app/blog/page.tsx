import { HeroBackground } from "@/components/hero-background";
import { BlogGallery } from "@/components/blog-gallery";
import { SectionHeader } from "@/components/section-header";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Maxwell Mwangi",
  description: "Writing on design, React, and building for the web.",
};

export default function BlogPage() {
  return (
    <main className="relative">
      <HeroBackground />

      <div className="relative max-w-3xl mx-auto px-6 pt-28 pb-32 sm:pb-20">
        <SectionHeader label="Writing" title="Blog" />

        <p className="text-muted-foreground max-w-2xl mb-12 -mt-6 leading-relaxed">
          Thoughts on interface design, frontend architecture, and the craft of
          building software that feels considered.
        </p>

        <BlogGallery posts={blogPosts} />
      </div>
    </main>
  );
}
