import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplateBySlug, TEMPLATE_REGISTRY } from "@/templates/registry";

interface RawPreviewPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TEMPLATE_REGISTRY.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: RawPreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) {
    return { title: "Demo không tồn tại" };
  }
  return {
    title: `${template.brandTitle} — Bản Demo Trực Tiếp`,
    description: template.tagline,
  };
}

export default async function RawTemplatePreviewPage({
  params,
}: RawPreviewPageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template || !template.Component) {
    notFound();
  }

  const TemplateComponent = template.Component;
  return <TemplateComponent />;
}
