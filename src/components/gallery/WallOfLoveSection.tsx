import { Star } from "lucide-react";

interface ClientReview {
  initials: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  tag: string;
}

const CLIENT_REVIEWS: ClientReview[] = [
  {
    initials: "MH",
    name: "Minh Hoàng",
    role: "Nhà sáng lập",
    company: "An Mộc Home",
    quote:
      "Lần đầu đi làm web mà được bấm thử giỏ hàng, đổi màu gỗ ngay trên bản demo trước khi chốt hợp đồng. Đội ngũ làm việc rất có gu và bàn giao đúng hẹn.",
    tag: "Bán lẻ Nội thất",
  },
  {
    initials: "TL",
    name: "Thu Lan",
    role: "Giám đốc Marketing",
    company: "NexaFlow VN",
    quote:
      "Bản Landing Page mới giúp tỷ lệ khách để lại thông tin demo tăng hơn 35% ngay tháng đầu. Mình thích nhất cách trình bày bảng giá và phần mô phỏng tính năng rõ ràng.",
    tag: "Landing Page SaaS",
  },
  {
    initials: "QK",
    name: "Quốc Khánh",
    role: "Kiến trúc sư trưởng",
    company: "K-Atelier Studio",
    quote:
      "Rất ấn tượng ở độ chỉn chu của dấu chữ tiếng Việt và khoảng thở bố cục. Gửi link qua Zalo cho chủ đầu tư xem trên điện thoại hay máy tính đều mượt mà.",
    tag: "Thương hiệu & Portfolio",
  },
  {
    initials: "PN",
    name: "Phương Nhi",
    role: "Chủ thương hiệu",
    company: "Lá Trà Specialty",
    quote:
      "Không bị rối mắt như nhiều mẫu web bán sẵn khác. Khách hàng của mình khen giao diện sạch, tải cực nhanh và đặt hàng trên điện thoại rất tiện.",
    tag: "Bán lẻ F&B",
  },
  {
    initials: "ĐA",
    name: "Đức Anh",
    role: "Product Lead",
    company: "VinaCloud Ops",
    quote:
      "Cấu trúc code Next.js bàn giao rất sạch, team kỹ thuật bên mình tiếp nhận và gắn API nội bộ chỉ trong một buổi chiều mà không phải đập đi viết lại.",
    tag: "Sản phẩm Công nghệ",
  },
  {
    initials: "HT",
    name: "Hải Tâm",
    role: "Quản lý vận hành",
    company: "Sơn Trà Retreat",
    quote:
      "Chỉ cần gửi tên mẫu ưng ý trong thư viện là team tư vấn lên ngay phương án màu sắc và hình ảnh khớp 100% tinh thần khu nghỉ dưỡng.",
    tag: "Dịch vụ & Nghỉ dưỡng",
  },
];

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
            <span>4.9/5 từ khách hàng đã bàn giao</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CLIENT_REVIEWS.map((review) => (
            <article
              key={review.name}
              className="flex flex-col justify-between rounded-[20px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-[var(--text-muted)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-xs font-bold text-[var(--text-primary)]">
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[var(--text-primary)]">
                        {review.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {review.role} · {review.company}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  “{review.quote}”
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[var(--border-subtle)]/80 pt-3.5 text-[11px] text-[var(--text-muted)]">
                <span>{review.tag}</span>
                <span className="font-mono text-[var(--accent-highlight)]">
                  ★★★★★
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
