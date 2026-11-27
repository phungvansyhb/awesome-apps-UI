import { AgencyHero } from "@/components/gallery/AgencyHero";
import { GalleryShowcase } from "@/components/gallery/GalleryShowcase";
import { ProcessSection } from "@/components/gallery/ProcessSection";
import { StudioFooter } from "@/components/gallery/StudioFooter";
import { StudioHeader } from "@/components/gallery/StudioHeader";
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
        <GalleryShowcase templates={serializableTemplates} />
        <ProcessSection />
      </main>
      <StudioFooter />
    </div>
  );
}
