import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewShell } from "@/components/preview/PreviewShell";
import {
  getAdjacentTemplates,
  getCategoryLabel,
  getTemplateBySlug,
  TEMPLATE_REGISTRY,
} from "@/templates/registry";

interface TemplatePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TEMPLATE_REGISTRY.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) {
    return { title: "Không tìm thấy mẫu giao diện" };
  }

  const categoryLabel = getCategoryLabel(template.category);
  return {
    title: `${template.name} — ${categoryLabel}`,
    description: template.description,
    openGraph: {
      title: `${template.name} (${categoryLabel})`,
      description: template.description,
      type: "website",
    },
  };
}

export default async function TemplateViewerPage({
  params,
}: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const { prev, next } = getAdjacentTemplates(template.slug);

  return (
    <PreviewShell
      slug={template.slug}
      name={template.name}
      categoryLabel={getCategoryLabel(template.category)}
      prevTemplate={prev ? { slug: prev.slug, name: prev.name } : null}
      nextTemplate={next ? { slug: next.slug, name: next.name } : null}
    />
  );
}
