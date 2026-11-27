export type LumiereCategory =
  | "tat-ca"
  | "phong-khach"
  | "phong-an"
  | "den-decor"
  | "phong-ngu";

export interface ProductFinish {
  name: string;
  hex: string;
}

export interface LumiereProduct {
  id: string;
  name: string;
  category: Exclude<LumiereCategory, "tat-ca">;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  dimensions: string;
  material: string;
  description: string;
  image: string;
  finishes: ProductFinish[];
}

export const LUMIERE_CATEGORIES: { id: LumiereCategory; label: string }[] = [
  { id: "tat-ca", label: "Tất cả" },
  { id: "phong-khach", label: "Phòng khách" },
  { id: "phong-an", label: "Phòng ăn" },
  { id: "den-decor", label: "Đèn & Decor" },
  { id: "phong-ngu", label: "Phòng ngủ" },
];

export const LUMIERE_HERO_IMAGE =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85";

export const LUMIERE_LOOKBOOK_IMAGE =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85";

export const LUMIERE_PRODUCTS: LumiereProduct[] = [
  {
    id: "sofa-atelier-3",
    name: "Sofa Bọc Vải Bouclé Atelier 3 Chỗ",
    category: "phong-khach",
    categoryLabel: "Phòng khách",
    price: 28900000,
    originalPrice: 32500000,
    badge: "Bán chạy",
    dimensions: "235 × 96 × 78 cm",
    material: "Khung gỗ sồi trắng Bắc Mỹ, vải Bouclé Bỉ chống bám bụi",
    description:
      "Đường cong mềm mại mang cảm hứng kiến trúc Bắc Âu tối giản, đệm mút cao cấp giữ phom lâu dài và nâng đỡ tối ưu cho phòng khách hiện đại.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    finishes: [
      { name: "Kem Ngà", hex: "#EAE3D7" },
      { name: "Xám Đá", hex: "#9E9B95" },
      { name: "Nâu Cacao", hex: "#5C493E" },
    ],
  },
  {
    id: "ghe-thu-gian-sol",
    name: "Ghế Thư Giãn Gỗ Óc Chó Sol",
    category: "phong-khach",
    categoryLabel: "Phòng khách",
    price: 11400000,
    badge: "Mới về",
    dimensions: "72 × 80 × 76 cm",
    material: "Gỗ óc chó tự nhiên hoàn thiện dầu lau mờ, da bò Ý nguyên tấm",
    description:
      "Sự cân bằng giữa khung gỗ chạm khắc thủ công và phần tựa lưng nghiêng 108 độ, lý tưởng cho góc đọc sách và không gian tiếp khách tinh tế.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
    finishes: [
      { name: "Óc Chó / Da Nâu", hex: "#6B442A" },
      { name: "Sồi Tự Nhiên / Kem", hex: "#C8A986" },
    ],
  },
  {
    id: "ban-an-kyoto-oak",
    name: "Bàn Ăn Gỗ Sồi Nguyên Tấm Kyoto",
    category: "phong-an",
    categoryLabel: "Phòng ăn",
    price: 21500000,
    dimensions: "200 × 95 × 75 cm",
    material: "Gỗ sồi trắng nhập khẩu, khớp mộng âm truyền thống",
    description:
      "Mặt bàn vát cạnh thanh thoát kết hợp chân trụ đôi vững chãi, đủ rộng rãi cho 6–8 thành viên quây quần mỗi tối.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
    finishes: [
      { name: "Sồi Sáng", hex: "#D1B38A" },
      { name: "Sồi Hun Khói", hex: "#5C4A3D" },
    ],
  },
  {
    id: "den-ban-travertine",
    name: "Đèn Bàn Đá Travertine Vòm Ánh Sáng",
    category: "den-decor",
    categoryLabel: "Đèn & Decor",
    price: 4650000,
    badge: "Giới hạn",
    dimensions: "28 × 28 × 42 cm",
    material: "Đá Travertine tự nhiên, chao thủy tinh mờ thổi thủ công",
    description:
      "Tạo nguồn sáng vàng dịu 2700K với hệ điều chỉnh độ sáng cảm ứng ba nấc, biến góc bàn làm việc hoặc đầu giường trở nên ấm cúng.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85",
    finishes: [
      { name: "Đá Kem Tự Nhiên", hex: "#DDD3C5" },
      { name: "Đá Xám Khói", hex: "#8B8782" },
    ],
  },
  {
    id: "giuong-ngu-zen-linen",
    name: "Giường Ngủ Đầu Bọc Linen Tĩnh Tại",
    category: "phong-ngu",
    categoryLabel: "Phòng ngủ",
    price: 24800000,
    originalPrice: 27900000,
    dimensions: "180 × 200 × 98 cm (King)",
    material: "Gỗ tần bì kết hợp vải Linen tự nhiên thoáng khí",
    description:
      "Thiết kế chân thấp chuẩn khách sạn nghỉ dưỡng, tựa đầu đệm dày có thể tháo rời vệ sinh dễ dàng.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85",
    finishes: [
      { name: "Cát Ấm", hex: "#CFC4B4" },
      { name: "Xanh Rêu Nhạt", hex: "#7B8477" },
    ],
  },
  {
    id: "tu-console-atelier",
    name: "Tủ Sideboard Cánh Sọc Gỗ Tần Bì",
    category: "phong-an",
    categoryLabel: "Phòng ăn",
    price: 16200000,
    dimensions: "160 × 45 × 78 cm",
    material: "Gỗ tần bì phủ veneer tự nhiên, bản lề giảm chấn Hafele",
    description:
      "Bề mặt nan sọc tạo chiều sâu ánh sáng ấn tượng, không gian lưu trữ 3 khoang lớn gọn gàng cho phòng khách và phòng ăn.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85",
    finishes: [
      { name: "Tần Bì Nâu Mật", hex: "#9E7652" },
      { name: "Đen Mờ Than", hex: "#2A2827" },
    ],
  },
];
