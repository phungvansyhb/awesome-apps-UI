import { AxiomClassroomTemplate } from "./axiom-lop-hoc";
import { KhoiNguyenPortfolioTemplate } from "./khoi-nguyen-portfolio";
import { KovaAiSaasTemplate } from "./kova-ai-saas";
import { LumiereNoiThatTemplate } from "./lumiere-noi-that";
import { MocBistroTemplate } from "./moc-bistro-nha-hang";
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
  {
    id: "giao-duc",
    label: "Giáo dục / Lớp học",
    shortLabel: "Giáo dục",
    description:
      "Nền tảng học tập tương tác, phòng thí nghiệm trực quan và quản lý lớp học.",
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
  {
    slug: "khoi-nguyen-portfolio",
    name: "KHÔI NGUYÊN — Editorial Portfolio",
    brandTitle: "Khôi Nguyên — Tác Giả & Giám Đốc Sáng Tạo",
    category: "portfolio",
    tagline:
      "Portfolio cá nhân phong cách tạp chí nghệ thuật — typography cỡ lớn đan lớp chân dung cutout, bưu thiếp tương tác & phòng đọc tiểu luận.",
    description:
      "Mẫu website Portfolio Editorial cao cấp dành cho tác giả, giám đốc sáng tạo, nhà nghiên cứu và chuyên gia tư vấn cá nhân — kết hợp bố cục tạp chí tương phản đỏ son & than chì cùng các khối đọc sách, tiểu luận và bưu thiếp tương tác.",
    tags: ["Editorial Poster", "Chân dung đan lớp", "Bưu thiếp tương tác"],
    accentColor: "#F44322",
    surfaceTone: "light",
    bentoSpan: "wide",
    featured: true,
    highlights: [
      "Hero bố cục poster tạp chí với typography cỡ lớn đan lớp chân dung tách nền",
      "Bưu thiếp 'Thư gửi ngày mai' tương tác — lật thư, viết thử & đóng dấu niêm phong",
      "Lọc tác phẩm, tab hành trình & khung đọc trích đoạn sách/tiểu luận trực tiếp",
    ],
    Component: KhoiNguyenPortfolioTemplate,
  },
  {
    slug: "moc-bistro-nha-hang",
    name: "MỘC BISTRO — Nhà Hàng Ẩm Thực",
    brandTitle: "Mộc Bistro — Nhà Hàng Ẩm Thực Đương Đại",
    category: "dich-vu",
    tagline:
      "Nhà hàng Bistro tối giản sắc đỏ rượu vang — xoay đổi đĩa món trực quan trên Hero, giỏ đặt món VND & đặt bàn trực tuyến.",
    description:
      "Mẫu website nhà hàng Fine Bistro & Hospitality thanh lịch với trình chọn món dạng đĩa chụp từ trên cao xoay mượt, trích dẫn thực khách đồng bộ, thực đơn lọc theo nhóm, giỏ đặt món trượt và biểu mẫu đặt bàn trực tuyến có mã xác nhận.",
    tags: ["Nhà hàng Bistro", "Đặt bàn trực tuyến", "Tối giản Rượu vang"],
    accentColor: "#8E1F24",
    surfaceTone: "light",
    bentoSpan: "standard",
    featured: true,
    highlights: [
      "Trình chọn 4 đĩa món chụp từ trên cao xoay chuyển mượt trên Hero kèm nhận xét đồng bộ",
      "Thực đơn lọc danh mục & Giỏ đặt món Drawer tính tổng tiền VND trực tiếp",
      "Ưu đãi áp dụng nhanh vào biểu mẫu đặt bàn chọn ngày, giờ, khu vực ngồi & mã giữ bàn",
    ],
    Component: MocBistroTemplate,
  },
  {
    slug: "axiom-lop-hoc",
    name: "AXIOM — Lớp Học Toán Trực Quan",
    brandTitle: "Axiom — Nền Tảng Lớp Học Toán & Khoa Học Trực Quan",
    category: "giao-duc",
    tagline:
      "Lớp học STEM & Toán học tương tác trực tiếp — kéo thả công thức vẽ đồ thị 60fps ngay trên bảng giấy kẻ ô Hero.",
    description:
      "Mẫu website Giáo dục & Lớp học tương tác lấy cảm hứng từ phong cách học thuật tối giản: bảng thí nghiệm đồ thị 4 mô phỏng sống động (Sóng hình sin, Ném xiên parabol, Con lắc đơn, Lãi kép), thư viện chủ đề, giáo án từng chương và học phí linh hoạt.",
    tags: ["Giáo dục STEM", "Đồ thị tương tác 60fps", "Học thuật Tối giản"],
    accentColor: "#2F5CE5",
    surfaceTone: "light",
    bentoSpan: "wide",
    featured: true,
    highlights: [
      "4 phòng thí nghiệm đồ thị chạy 60fps ngay Hero (Sóng hình sin, Ném xiên, Con lắc, Lãi kép)",
      "Kéo thanh tham số A, ω, φ, θ, L, r đổi công thức & đường cong theo thời gian thực",
      "Lọc chủ đề STEM, đề cương khóa học mở rộng, chế độ trường học & học phí Tháng/Năm",
    ],
    Component: AxiomClassroomTemplate,
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
