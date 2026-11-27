export interface SiteContactInfo {
  hotline: string;
  hotlineHref: string;
  zaloUrl: string;
  email: string;
  facebookUrl: string;
  address: string;
  workingHours: string;
}

export interface SiteConfig {
  brandName: string;
  siteUrl: string;
  tagline: string;
  description: string;
  locale: string;
  contact: SiteContactInfo;
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: "Xưởng Giao Diện",
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://xuong-giao-dien.pages.dev"
  ).replace(/\/+$/, ""),
  tagline: "Tuyển tập mẫu website tương tác cho thương hiệu dẫn đầu",
  description:
    "Khám phá thư viện mẫu giao diện website được thiết kế chỉn chu theo từng ngành hàng: Bán lẻ, Landing Page SaaS, Tài liệu Kỹ thuật, Dashboard quản trị, Portfolio sáng tạo và Dịch vụ nghỉ dưỡng.",
  locale: "vi_VN",
  contact: {
    hotline: "0901 234 567",
    hotlineHref: "tel:+84901234567",
    zaloUrl: "https://zalo.me/0901234567",
    email: "hello@xuonggiaodien.vn",
    facebookUrl: "https://facebook.com/xuonggiaodien",
    address: "Tầng 8, Tòa nhà Sáng Tạo, Quận 1, TP. Hồ Chí Minh",
    workingHours: "Thứ 2 – Thứ 7 · 08:30 – 18:00",
  },
  navigation: [
    { label: "Bộ sưu tập", href: "#bo-suu-tap" },
    { label: "Điểm nổi bật", href: "#diem-noi-bat" },
    { label: "Đánh giá", href: "#danh-gia" },
    { label: "Liên hệ", href: "#lien-he" },
  ],
};
