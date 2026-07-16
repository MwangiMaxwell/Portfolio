import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Python",
  "DJango",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "CI/CD Pipelines",
  "Framer Motion",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
];

export default function HomePage() {
  return (
    <main className="relative">
      <HeroBackground />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-24 pb-32 sm:pb-16">
        <div className="max-w-3xl mx-auto w-full">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Software Engineer & ML Engineer
          </p>

          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
            {siteConfig.name.split(" ").map((word, i) => (
              <span key={word} className="block">
                <span className={i === 1 ? "text-muted-foreground" : ""}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {siteConfig.bio}
          </p>

          <SocialLinks className="mt-10" iconSize={22} />

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              View works
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/70 hover:bg-muted/40 transition-colors text-sm font-medium"
            >
              Read blog
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
          I'm a Software Engineer who enjoys building systems that solve problems and increase efficiency.
          Outside of my work, I serve as an advisor at Endfakeball, a sports charity, and mentor students in digital skills through grassroots initiatives. I also stay active through sports.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 text-sm rounded-full border border-border/60 bg-muted/20 text-muted-foreground font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 pb-32 sm:pb-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-4">
            Let&apos;s build something.
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block mt-6 text-lg text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            {siteConfig.email}
          </a>
          <SocialLinks className="mt-8 justify-center sm:justify-start" />
        </div>
      </section>
    </main>
  );
}
