import { Check, Clock, Sparkles } from "lucide-react";

const TRADITIONAL_POINTS = [
  "Mất nhiều tuần nghiên cứu, dựng wireframe và chờ duyệt ảnh thiết kế tĩnh",
  "Khó hình dung chính xác cảm giác tương tác thực tế trên điện thoại",
  "Phát sinh thêm thời gian và chi phí khi chỉnh sửa bố cục qua nhiều vòng",
  "Phải tự điều phối rời rạc giữa thiết kế giao diện, lập trình và tối ưu SEO",
];

const STUDIO_POINTS = [
  "Bấm thử trực tiếp bản giao diện sống động đa thiết bị trước khi đặt làm",
  "May đo toàn bộ bảng màu, bộ chữ và nội dung theo đúng nhận diện thương hiệu",
  "Kiến trúc Next.js + TypeScript gọn sạch, dễ dàng mở rộng tính năng về sau",
  "Tối ưu sẵn tốc độ tải biên toàn cầu, Sitemap và hiển thị đẹp khi gửi Zalo",
];

const INCLUDED_GUARANTEES = [
  "Sở hữu 100% mã nguồn sạch, không bị khóa vào nền tảng đóng",
  "Tùy biến toàn diện màu sắc, hình ảnh và nội dung tiếng Việt sắc nét",
  "Chuẩn kỹ thuật SEO, Sitemap, Robots.txt & hiển thị đẹp trên Zalo/Facebook",
  "Tương thích hoàn hảo Desktop, Tablet, Mobile và hỗ trợ bàn giao trọn gói",
];

export function BentoHighlightsSection() {
  return (
    <section
      id="diem-noi-bat"
      className="scroll-mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16 sm:py-24"
    >
      {/* Section Heading aligned to main container */}
      <div className="mx-auto max-w-[1200px] px-5 pb-10 sm:px-8 sm:pb-12">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
          Điểm khác biệt tại Xưởng Giao Diện
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Minh bạch giá trị bằng con số, không phải lời hứa chung chung.
        </h2>
      </div>

      {/* Architectural Dashed Blueprint Grid */}
      <div className="w-full border-y border-dashed border-[var(--border-subtle)]">
        {/* Top Comparison Row with subtle outer architectural rails */}
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 lg:grid-cols-[80px_1fr_1fr_80px]">
          {/* Left empty architectural rail */}
          <div
            aria-hidden="true"
            className="hidden border-r border-dashed border-[var(--border-subtle)] lg:block"
          />

          {/* Left Column: Traditional */}
          <div className="flex flex-col justify-between border-b border-dashed border-[var(--border-subtle)] px-6 py-10 sm:px-10 sm:py-12 lg:border-r lg:border-b-0">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <Clock className="h-4 w-4 text-[var(--text-muted)]" />
                <span>Thiết kế truyền thống từ đầu</span>
              </div>

              <p className="mt-7 text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Thời gian triển khai trung bình
              </p>
              <div className="mt-2 flex items-baseline gap-2.5">
                <span className="text-4xl font-bold tracking-[-0.03em] text-[var(--text-primary)] tabular-nums sm:text-5xl">
                  45–70
                </span>
                <span className="text-base font-medium text-[var(--text-muted)]">
                  ngày
                </span>
              </div>

              <ul className="mt-7 space-y-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {TRADITIONAL_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 border-t border-dashed border-[var(--border-subtle)] pt-7">
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Số vòng duyệt & chỉnh sửa
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-[-0.03em] text-[var(--text-primary)] tabular-nums sm:text-4xl">
                  4–6
                </span>
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  vòng duyệt lại
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Xuong Giao Dien */}
          <div className="flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:border-r lg:border-dashed lg:border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <Sparkles className="h-4 w-4 text-[var(--accent-highlight)]" />
                <span>Triển khai tại Xưởng Giao Diện</span>
              </div>

              <p className="mt-7 text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Thời gian từ chọn mẫu tới bàn giao
              </p>
              <div className="mt-2 flex items-baseline gap-2.5">
                <span className="text-4xl font-bold tracking-[-0.03em] text-[var(--text-primary)] tabular-nums sm:text-5xl">
                  5–10
                </span>
                <span className="text-base font-medium text-[var(--text-muted)]">
                  ngày
                </span>
              </div>

              <ul className="mt-7 space-y-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {STUDIO_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 border-t border-dashed border-[var(--border-subtle)] pt-7">
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Tốc độ ra mắt thị trường
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-[-0.03em] text-[var(--text-primary)] tabular-nums sm:text-4xl">
                  5x
                </span>
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  nhanh hơn
                </span>
              </div>
            </div>
          </div>

          {/* Right empty architectural rail */}
          <div aria-hidden="true" className="hidden lg:block" />
        </div>

        {/* Horizontal Architectural Spacer Band */}
        <div
          aria-hidden="true"
          className="h-7 border-y border-dashed border-[var(--border-subtle)] sm:h-9"
        />

        {/* Bottom Value Summary Row */}
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 lg:grid-cols-[80px_1fr_80px]">
          <div
            aria-hidden="true"
            className="hidden border-r border-dashed border-[var(--border-subtle)] lg:block"
          />

          <div className="px-6 py-9 sm:px-10 sm:py-11 lg:border-r lg:border-dashed lg:border-[var(--border-subtle)]">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
              Dù chọn mẫu ngành hàng nào, bạn luôn nhận trọn gói
            </h3>

            <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3.5 md:grid-cols-2">
              {INCLUDED_GUARANTEES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
