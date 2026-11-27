export type BistroCategoryId =
  | "tat-ca"
  | "khai-vi"
  | "mon-chinh"
  | "hai-san"
  | "trang-mieng";

export interface BistroDish {
  id: string;
  name: string;
  subtitle: string;
  category: Exclude<BistroCategoryId, "tat-ca">;
  categoryLabel: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
  pairing: string;
  guestQuote: {
    name: string;
    role: string;
    avatar: string;
    text: string;
  };
}

export interface BistroOffer {
  id: string;
  badge: string;
  title: string;
  priceLabel: string;
  description: string;
  note: string;
}

export interface BistroReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  dish: string;
  quote: string;
}

export const BISTRO_NAV_ITEMS = [
  { label: "Về chúng tôi", href: "#ve-chung-toi" },
  { label: "Thực đơn", href: "#thuc-don" },
  { label: "Đánh giá", href: "#danh-gia" },
  { label: "Ưu đãi", href: "#uu-dai" },
  { label: "Liên hệ", href: "#dat-ban" },
];

export const BISTRO_CATEGORIES: { id: BistroCategoryId; label: string }[] = [
  { id: "tat-ca", label: "Tất cả món" },
  { id: "khai-vi", label: "Khai vị & Salad" },
  { id: "mon-chinh", label: "Món chính" },
  { id: "hai-san", label: "Hải sản & Risotto" },
  { id: "trang-mieng", label: "Tráng miệng" },
];

export const BISTRO_DISHES: BistroDish[] = [
  {
    id: "pasta-burrata",
    name: "Salad Mỳ Ống Penne & Phô Mai Burrata",
    subtitle: "Penne hữu cơ · Mozzarella tươi · Cà chua bi Đà Lạt · Sốt giấm Balsamic ủ gỗ",
    category: "khai-vi",
    categoryLabel: "Khai vị & Salad",
    price: 245000,
    image: "/images/bistro-dish-pasta.webp",
    badge: "Bán chạy nhất",
    description:
      "Mỳ ống Ý luộc chuẩn al dente trộn cùng phô mai viên tươi, lá rocket, dưa leo giòn và sốt giấm nho đen sánh mịn.",
    pairing: "Gợi ý kèm: Vang trắng Sauvignon Blanc lạnh",
    guestQuote: {
      name: "Minh Hoàng",
      role: "Kiến trúc sư · Quận 1",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Không gian thật tinh tế và món ăn thực sự xuất sắc. Vị sốt cân bằng hoàn hảo — rất đáng để quay lại!",
    },
  },
  {
    id: "wagyu-steak",
    name: "Thăn Nội Bò Áp Chảo Sốt Vang Đỏ",
    subtitle: "Thăn bò Úc nướng medium-rare · Măng tây xanh · Khoai tây bi thảo mộc",
    category: "mon-chinh",
    categoryLabel: "Món chính",
    price: 580000,
    image: "/images/bistro-dish-steak.webp",
    badge: "Bếp trưởng khuyên dùng",
    description:
      "Thăn bò áp chảo bơ tỏi và lá hương thảo tươi, dùng kèm măng tây nướng than, cà chua bi nướng mật và sốt vang đỏ cô đặc 12 giờ.",
    pairing: "Gợi ý kèm: Vang đỏ Cabernet Sauvignon niên vụ 2021",
    guestQuote: {
      name: "Quốc Khánh",
      role: "Giám đốc Thương hiệu",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Thăn bò chín hồng chuẩn mực, mềm tan và sốt vang đỏ đậm đà không bị ngấy. Điểm hẹn lý tưởng cho tiệc tối tiếp đối tác.",
    },
  },
  {
    id: "ca-hoi-risotto",
    name: "Cá Hồi Na Uy Áp Chảo & Risotto Thảo Mộc",
    subtitle: "Cá hồi da giòn · Cơm Ý thảo mộc xanh · Cam đỏ · Sốt kem nhụy hoa nghệ tây",
    category: "hai-san",
    categoryLabel: "Hải sản & Risotto",
    price: 420000,
    image: "/images/bistro-dish-salmon.webp",
    badge: "Đặc trưng mùa mới",
    description:
      "Phi lê cá hồi áp chảo giòn da, bên trong mọng ngọt, đặt trên nền cơm Ý nấu nước dùng thảo mộc và chấm sốt kem nghệ tây dịu nhẹ.",
    pairing: "Gợi ý kèm: Vang trắng Chardonnay ủ sồi nhẹ",
    guestQuote: {
      name: "Thu Lan",
      role: "Biên tập viên Ẩm thực",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Lớp da cá hồi giòn rụm kết hợp vị thanh mát của múi cam đỏ và risotto béo nhẹ. Một trong những món ăn chỉn chu nhất tôi từng thử.",
    },
  },
  {
    id: "tart-socola-phuc-bon-tu",
    name: "Bánh Tart Sô-cô-la Đen & Phúc Bồn Tử",
    subtitle: "Ganache cacao 72% Bến Tre · Phúc bồn tử tươi Đà Lạt · Vàng lá 24K",
    category: "trang-mieng",
    categoryLabel: "Tráng miệng",
    price: 185000,
    image: "/images/bistro-dish-dessert.webp",
    badge: "Thủ công mỗi ngày",
    description:
      "Vỏ bánh bơ cacao giòn tan ôm trọn lớp ganache sô-cô-la đen đắng nhẹ, cân bằng cùng vị chua thanh của phúc bồn tử tươi và sốt quả mọng.",
    pairing: "Gợi ý kèm: Espresso rang mộc hoặc Vang ngọt Moscato",
    guestQuote: {
      name: "Phương Nhi",
      role: "Nhà thiết kế Thời trang",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      text: "Món tráng miệng đẹp như một tác phẩm nghệ thuật, vị ngọt rất thanh chứ không gắt. Kết thúc bữa tối cực kỳ trọn vẹn.",
    },
  },
];

export const BISTRO_OFFERS: BistroOffer[] = [
  {
    id: "business-lunch",
    badge: "Thứ 2 – Thứ 6 · 11:00 – 14:00",
    title: "Set Trưa Doanh Nhân 3 Món",
    priceLabel: "390.000 ₫ / khách",
    description:
      "Trọn vẹn 01 món khai vị thanh nhẹ, 01 món chính tự chọn (Cá hồi hoặc Mỳ Ý) cùng tráng miệng hoặc trà thảo mộc lạnh.",
    note: "Phục vụ nhanh trong 45 phút, phù hợp gặp gỡ đối tác.",
  },
  {
    id: "wine-friday",
    badge: "Mỗi tối Thứ Sáu",
    title: "Đêm Vang Đỏ & Bò Nướng",
    priceLabel: "Tặng 02 ly vang đỏ",
    description:
      "Tặng ngay 02 ly vang đỏ tuyển chọn từ hầm rượu Mộc Bistro khi đặt bàn từ 02 khách và gọi món chính Thăn Nội Bò Áp Chảo.",
    note: "Áp dụng khi đặt bàn trước ít nhất 3 tiếng.",
  },
  {
    id: "private-celebration",
    badge: "Tiệc Kỷ Niệm & Sinh Nhật",
    title: "Bàn Tiệc Riêng Tư & Bánh Kỷ Niệm",
    priceLabel: "Ưu đãi 15% tổng hóa đơn",
    description:
      "Trang trí nến, hoa tươi tông đỏ rượu vang và tặng kèm bánh Tart Sô-cô-la viết chữ chúc mừng cho nhóm từ 04 khách trở lên.",
    note: "Có sẵn phòng riêng 8–16 khách không thu phụ phí.",
  },
];

export const BISTRO_REVIEWS: BistroReview[] = [
  {
    id: "rev-1",
    name: "Minh Hoàng",
    role: "Kiến trúc sư",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    dish: "Salad Mỳ Ống & Burrata",
    quote:
      "Hiếm có nhà hàng nào giữ được sự tinh giản thanh lịch từ không gian đến từng đĩa món như Mộc Bistro. Dịch vụ chu đáo nhưng vẫn rất riêng tư.",
  },
  {
    id: "rev-2",
    name: "Thu Lan",
    role: "Biên tập viên Ẩm thực",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    dish: "Cá Hồi Áp Chảo & Risotto",
    quote:
      "Cách bếp trưởng xử lý nguyên liệu địa phương theo kỹ thuật Âu đương đại thật sự thuyết phục. Cá hồi giòn da và sốt nghệ tây cực kỳ tinh tế.",
  },
  {
    id: "rev-3",
    name: "Phương Nhi",
    role: "Nhà thiết kế Thời trang",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    dish: "Tart Sô-cô-la Phúc Bồn Tử",
    quote:
      "Ánh sáng dịu nhẹ, tiếng nhạc jazz vừa đủ và món tráng miệng ngon khó quên. Luôn là lựa chọn đầu tiên của tôi cho những dịp kỷ niệm đặc biệt.",
  },
];

export const RESERVATION_SLOTS = [
  "11:30",
  "12:30",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

export const RESERVATION_ZONES = [
  "Phòng ăn chính",
  "Góc cửa sổ sân vườn",
  "Quầy bếp mở Chef's Table",
  "Phòng riêng VIP",
];
