import { HeroBackground } from "@/components/hero-background";
import { SectionHeader } from "@/components/section-header";
import { WorkGallery } from "@/components/work-gallery";
import { works } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works — Maxwell Mwangi",
  description: "Selected projects and experiments.",
};

export default function WorksPage() {
  return (
    <main className="relative">
      <HeroBackground />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-32 sm:pb-20">
        <SectionHeader label="Portfolio" title="Works" />

        <p className="text-muted-foreground max-w-2xl mb-12 -mt-6 leading-relaxed">
           Projects I have spear headed or contributed  to, ranging from open-source libraries to full-stack applications.
        </p>

        <WorkGallery works={works} />
      </div>
    </main>
  );
}
