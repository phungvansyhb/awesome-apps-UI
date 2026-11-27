import { Star } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

interface ClientReview {
  name: string;
  handle: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  tag: string;
}

const COLUMNS: {
  id: string;
  direction: "up" | "down";
  visibilityClass?: string;
  reviews: ClientReview[];
}[] = [
  {
    id: "col-1",
    direction: "up",
    reviews: [
      {
        name: "Minh Hoàng",
        handle: "@minhhoang.home",
        role: "Nhà sáng lập",
        company: "An Mộc Home",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Lần đầu đi làm web mà được bấm thử giỏ hàng, đổi màu gỗ ngay trên bản demo trước khi chốt hợp đồng. Đội ngũ làm việc rất có gu và bàn giao đúng hẹn.",
        tag: "Bán lẻ Nội thất",
      },
      {
        name: "Phương Nhi",
        handle: "@phuongnhi.tea",
        role: "Chủ thương hiệu",
        company: "Lá Trà Specialty",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Không bị rối mắt như nhiều mẫu web bán sẵn khác. Khách hàng khen giao diện sạch, tải cực nhanh và đặt hàng trên điện thoại rất tiện.",
        tag: "Bán lẻ F&B",
      },
      {
        name: "Gia Bảo",
        handle: "@giabao.studio",
        role: "Giám đốc sáng tạo",
        company: "Mộc Design Lab",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Mình dùng luôn link thư viện để gửi khách hàng chọn định hướng thiết kế trong buổi họp đầu tiên. Tiết kiệm ít nhất 1 tuần trao đổi qua lại.",
        tag: "Agency & Thiết kế",
      },
    ],
  },
  {
    id: "col-2",
    direction: "down",
    visibilityClass: "hidden md:block",
    reviews: [
      {
        name: "Thu Lan",
        handle: "@thulan.growth",
        role: "Giám đốc Marketing",
        company: "NexaFlow VN",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Bản Landing Page mới giúp tỷ lệ khách để lại thông tin demo tăng hơn 35% ngay tháng đầu. Cách trình bày bảng giá và mô phỏng luồng AI cực kỳ thuyết phục.",
        tag: "Landing Page SaaS",
      },
      {
        name: "Đức Anh",
        handle: "@ducanh.dev",
        role: "Product Lead",
        company: "VinaCloud Ops",
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Cấu trúc code Next.js bàn giao rất sạch, team kỹ thuật bên mình tiếp nhận và gắn API nội bộ chỉ trong một buổi chiều mà không phải đập đi viết lại.",
        tag: "Sản phẩm Công nghệ",
      },
      {
        name: "Khánh Linh",
        handle: "@khanhlinh.brand",
        role: "Brand Manager",
        company: "Sora Cosmetics",
        avatar:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Thích nhất chế độ xem thử Mobile trực tiếp. Đội ngũ chỉnh từng khoảng cách chữ tiếng Việt rất tinh tế, nhìn trên iPhone đẹp như app riêng.",
        tag: "Mỹ phẩm & Làm đẹp",
      },
    ],
  },
  {
    id: "col-3",
    direction: "up",
    visibilityClass: "hidden lg:block",
    reviews: [
      {
        name: "Quốc Khánh",
        handle: "@quockhanh.arch",
        role: "Kiến trúc sư trưởng",
        company: "K-Atelier Studio",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Rất ấn tượng ở độ chỉn chu của dấu chữ tiếng Việt và khoảng thở bố cục. Gửi link qua Zalo cho chủ đầu tư xem trên điện thoại hay máy tính đều mượt.",
        tag: "Kiến trúc & Portfolio",
      },
      {
        name: "Hải Tâm",
        handle: "@haitam.retreat",
        role: "Quản lý vận hành",
        company: "Sơn Trà Retreat",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Chỉ cần gửi tên mẫu ưng ý trong thư viện là team tư vấn lên ngay phương án màu sắc và hình ảnh khớp 100% tinh thần khu nghỉ dưỡng.",
        tag: "Dịch vụ & Nghỉ dưỡng",
      },
      {
        name: "Tuấn Kiệt",
        handle: "@tuankiet.ecom",
        role: "Đồng sáng lập",
        company: "Lumen Audio",
        avatar:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80",
        quote:
          "Tốc độ tải trang thực sự khác biệt. Khách mở từ quảng cáo Facebook gần như hiện ngay lập tức, tỷ lệ thoát trang giảm rõ rệt sau khi đổi giao diện.",
        tag: "Thương mại điện tử",
      },
    ],
  },
];

function ReviewCard({ review }: { review: ClientReview }) {
  return (
    <article className="flex flex-col justify-between rounded-[20px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--text-muted)]">
      <div>
        <div className="flex items-center gap-3">
          <SafeImage
            src={review.avatar}
            alt={`Ảnh đại diện của ${review.name}`}
            containerClassName="h-11 w-11 shrink-0 rounded-full border border-[var(--border-subtle)]"
            className="h-full w-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[var(--text-primary)]">
              {review.name}
            </p>
            <p className="truncate text-xs text-[var(--text-muted)]">
              {review.role} · {review.company}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          “{review.quote}”
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)]/80 pt-3 text-[11px] text-[var(--text-muted)]">
        <span className="font-medium">{review.tag}</span>
        <span className="font-mono text-[var(--accent-highlight)]">★★★★★</span>
      </div>
    </article>
  );
}

export function WallOfLoveSection() {
  return (
    <section
      id="danh-gia"
      className="scroll-mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
              Khách hàng nói gì
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Được tin chọn bởi các thương hiệu đề cao thẩm mỹ & tốc độ.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)]">
            <span className="flex items-center text-[var(--accent-highlight)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span>4.9/5 · Rê chuột vào cột để dừng đọc</span>
          </div>
        </div>

        {/* Vertical Multi-Column Scrolling Wall of Love */}
        <div className="marquee-mask-vertical mt-10 grid h-[560px] grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {COLUMNS.map((column) => (
            <div
              key={column.id}
              className={`h-full overflow-hidden ${column.visibilityClass ?? ""}`}
            >
              <div
                className={
                  column.direction === "up"
                    ? "marquee-col-up"
                    : "marquee-col-down"
                }
              >
                {[0, 1].map((copyIndex) => (
                  <div
                    key={copyIndex}
                    aria-hidden={copyIndex === 1}
                    className="flex flex-col gap-5 pb-5"
                  >
                    {column.reviews.map((review) => (
                      <ReviewCard
                        key={`${copyIndex}-${review.handle}`}
                        review={review}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
