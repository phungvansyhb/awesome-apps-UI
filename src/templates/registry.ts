import { KovaAiSaasTemplate } from "./kova-ai-saas";
import { LumiereNoiThatTemplate } from "./lumiere-noi-that";
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
    description:
      "Trang giới thiệu sản phẩm công nghệ sắc nét, tập trung chốt khách.",
  },
  {
    id: "technical",
    label: "Technical / Dev Docs",
    shortLabel: "Technical",
    description:
      "Cổng tài liệu kỹ thuật, API reference và trải nghiệm lập trình viên.",
  },
  {
    id: "dashboard",
    label: "Dashboard Analytics",
    shortLabel: "Dashboard",
    description:
      "Bảng điều khiển dữ liệu thời gian thực, biểu đồ và quản trị vận hành.",
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
    description:
      "Trải nghiệm thương hiệu nghỉ dưỡng, nhà hàng và đặt lịch cao cấp.",
  },
];

/**
 * Single source of truth for all templates rendered in the Gallery and Preview routes.
 */
export const TEMPLATE_REGISTRY: TemplateRegistryEntry[] = [
  {
    slug: "lumiere-noi-that",
    name: "LUMIÈRE Nội Thất",
    brandTitle: "LUMIÈRE Nội Thất Cao Cấp",
    category: "ban-le",
    tagline:
      "Cửa hàng nội thất tối giản phong cách Bắc Âu — lọc phòng, chọn chất liệu & giỏ hàng trượt tính tiền thực tế.",
    description:
      "Mẫu website bán lẻ E-commerce cao cấp dành cho thương hiệu nội thất, kiến trúc và thời trang với trải nghiệm xem nhanh sản phẩm, đổi phiên bản màu và giỏ hàng tương tác đầy đủ.",
    tags: ["Nội thất tối giản", "Giỏ hàng tương tác", "Editorial Sáng"],
    accentColor: "#9A6B3F",
    surfaceTone: "light",
    bentoSpan: "wide",
    featured: true,
    highlights: [
      "Bộ lọc danh mục & sắp xếp giá trực tiếp",
      "Chọn biến thể màu/gỗ ngay trên thẻ sản phẩm",
      "Xem nhanh chi tiết & Giỏ hàng Drawer tự tính tổng VND",
    ],
    Component: LumiereNoiThatTemplate,
  },
  {
    slug: "kova-ai-saas",
    name: "KOVA AI Workspace",
    brandTitle: "KOVA AI — Tự Động Hóa Doanh Nghiệp",
    category: "landing-page",
    tagline:
      "Trang giới thiệu nền tảng AI B2B sắc nét với bảng mô phỏng quy trình trực tiếp, đổi giá Tháng/Năm và FAQ.",
    description:
      "Mẫu Landing Page công nghệ chuẩn quốc tế 100% tiếng Việt dành cho sản phẩm SaaS, AI và phần mềm doanh nghiệp — tối ưu niềm tin và tỷ lệ đăng ký dùng thử.",
    tags: ["SaaS & AI", "Obsidian Tối", "Bảng giá động"],
    accentColor: "#10B981",
    surfaceTone: "dark",
    bentoSpan: "standard",
    featured: true,
    highlights: [
      "Bảng điều khiển mô phỏng 3 quy trình AI trực tiếp",
      "Công tắc bảng giá Tháng / Năm tiết kiệm 20%",
      "Hệ thống câu hỏi thường gặp Accordion mượt mà",
    ],
    Component: KovaAiSaasTemplate,
  },
];

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
