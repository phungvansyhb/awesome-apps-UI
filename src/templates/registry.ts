import type {
  TemplateCategory,
  TemplateCategoryId,
  TemplateRegistryEntry,
} from "./types";

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: "ban-le",
    label: "Bán lẻ / E-commerce",
    shortLabel: "Bán lẻ",
    description: "Cửa hàng trực tuyến tối ưu chuyển đổi với giỏ hàng tương tác.",
  },
  {
    id: "landing-page",
    label: "Landing Page SaaS",
    shortLabel: "Landing Page",
    description: "Trang giới thiệu sản phẩm công nghệ sắc nét, tập trung chốt khách.",
  },
  {
    id: "technical",
    label: "Technical / Dev Docs",
    shortLabel: "Technical",
    description: "Cổng tài liệu kỹ thuật, API reference và trải nghiệm lập trình viên.",
  },
  {
    id: "dashboard",
    label: "Dashboard Analytics",
    shortLabel: "Dashboard",
    description: "Bảng điều khiển dữ liệu thời gian thực, biểu đồ và quản trị vận hành.",
  },
  {
    id: "portfolio",
    label: "Portfolio Creative",
    shortLabel: "Portfolio",
    description: "Hồ sơ năng lực nghệ thuật cho studio, kiến trúc và thiết kế.",
  },
  {
    id: "dich-vu",
    label: "Dịch vụ / Hospitality",
    shortLabel: "Dịch vụ",
    description: "Trải nghiệm thương hiệu nghỉ dưỡng, nhà hàng và đặt lịch cao cấp.",
  },
];

/**
 * Single source of truth for all templates rendered in the Gallery and Preview routes.
 * Populated during Construction Units (UNIT-03 through UNIT-05).
 */
export const TEMPLATE_REGISTRY: TemplateRegistryEntry[] = [];

export function getTemplateBySlug(
  slug: string
): TemplateRegistryEntry | undefined {
  return TEMPLATE_REGISTRY.find((item) => item.slug === slug);
}

export function getTemplatesByCategory(
  category: TemplateCategoryId | "all"
): TemplateRegistryEntry[] {
  if (category === "all") {
    return TEMPLATE_REGISTRY;
  }
  return TEMPLATE_REGISTRY.filter((item) => item.category === category);
}

export function getCategoryLabel(categoryId: TemplateCategoryId): string {
  return (
    TEMPLATE_CATEGORIES.find((cat) => cat.id === categoryId)?.label ??
    categoryId
  );
}

export function getAdjacentTemplates(slug: string): {
  prev: TemplateRegistryEntry | null;
  next: TemplateRegistryEntry | null;
} {
  const index = TEMPLATE_REGISTRY.findIndex((item) => item.slug === slug);
  if (index === -1 || TEMPLATE_REGISTRY.length <= 1) {
    return { prev: null, next: null };
  }
  const prevIndex =
    (index - 1 + TEMPLATE_REGISTRY.length) % TEMPLATE_REGISTRY.length;
  const nextIndex = (index + 1) % TEMPLATE_REGISTRY.length;
  return {
    prev: TEMPLATE_REGISTRY[prevIndex] ?? null,
    next: TEMPLATE_REGISTRY[nextIndex] ?? null,
  };
}
