import { AgencyHero } from "@/components/gallery/AgencyHero";
import { BentoHighlightsSection } from "@/components/gallery/BentoHighlightsSection";
import { GalleryShowcase } from "@/components/gallery/GalleryShowcase";
import { ShowcaseMarquee } from "@/components/gallery/ShowcaseMarquee";
import { StudioFooter } from "@/components/gallery/StudioFooter";
import { StudioHeader } from "@/components/gallery/StudioHeader";
import { WallOfLoveSection } from "@/components/gallery/WallOfLoveSection";
import { TEMPLATE_REGISTRY } from "@/templates/registry";
import type { TemplateMetadata } from "@/templates/types";

export default function HomePage() {
  const serializableTemplates: TemplateMetadata[] = TEMPLATE_REGISTRY.map(
    ({ Component: _unused, ...meta }) => {
      void _unused;
      return meta;
    }
  );

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <StudioHeader />
      <main className="flex-1">
        <AgencyHero templateCount={serializableTemplates.length} />
        <ShowcaseMarquee />
        <GalleryShowcase templates={serializableTemplates} />
        <BentoHighlightsSection />
        <WallOfLoveSection />
      </main>
      <StudioFooter />
    </div>
  );
}
