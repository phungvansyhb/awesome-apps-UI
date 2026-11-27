"use client";

import { useState } from "react";
import { Check, Globe, Layers, Monitor, Smartphone, Tablet } from "lucide-react";

const THEME_PRESETS = [
  { id: "terracotta", label: "Cam Đất", color: "#EA580C", soft: "#FFF7ED" },
  { id: "emerald", label: "Ngọc Lục", color: "#10B981", soft: "#ECFDF5" },
  { id: "cobalt", label: "Xanh Biển", color: "#2563EB", soft: "#EFF6FF" },
  { id: "ink", label: "Đen Mực", color: "#18181B", soft: "#F4F4F5" },
];

export function BentoHighlightsSection() {
  const [selectedPreset, setSelectedPreset] = useState(THEME_PRESETS[0]);

  return (
    <section
      id="diem-noi-bat"
      className="scroll-mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
            Điểm khác biệt tại Xưởng Giao Diện
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Mọi yếu tố chuẩn chỉnh trong một hệ thiết kế thống nhất.
          </h2>
        </div>

        {/* 12-col Modular Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Card 1: Interactive Live Brand Color Customizer Preview */}
          <div className="flex flex-col justify-between rounded-[22px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 lg:col-span-7">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Cá nhân hóa thương hiệu
              </span>
              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Đổi bảng màu thương hiệu linh hoạt theo bộ nhận diện của bạn
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)]">
                Mọi mẫu giao diện đều xây dựng bằng biến màu (Design Tokens)
                chuẩn hóa — bấm thử các gam màu bên dưới để xem giao diện thích
                ứng tức thì.
              </p>
            </div>

            {/* Interactive Mini Preview Box */}
            <div className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3.5">
                <div className="flex items-center gap-2">
                  {THEME_PRESETS.map((preset) => {
                    const active = selectedPreset.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedPreset(preset)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                          active
                            ? "border-[var(--text-primary)] bg-[var(--bg-subtle)] text-[var(--text-primary)]"
                            : "border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]"
                        }`}
                      >
                        <span
                          style={{ backgroundColor: preset.color }}
                          className="h-2.5 w-2.5 rounded-full"
                        />
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {selectedPreset.color}
                </span>
              </div>

              <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <span
                    style={{ color: selectedPreset.color }}
                    className="text-[11px] font-bold tracking-wider uppercase"
                  >
                    Bản xem thử màu chủ đạo
                  </span>
                  <p className="mt-1 text-base font-bold text-[var(--text-primary)]">
                    Website đồng bộ 100% nhận diện doanh nghiệp
                  </p>
                </div>
                <span
                  style={{ backgroundColor: selectedPreset.color }}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-colors duration-300"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Đặt lịch tư vấn</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-Device Responsive Fidelity */}
          <div className="flex flex-col justify-between rounded-[22px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 lg:col-span-5">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Đa thiết bị chuẩn xác
              </span>
              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Trình chiếu trực tiếp Desktop, Tablet & Mobile
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Mỗi bản demo chạy trong khung cô lập hoàn toàn để kiểm chứng bố
                cục di động thực tế trước khi triển khai.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2.5">
              {[
                { icon: Monitor, title: "Desktop", size: "1440px" },
                { icon: Tablet, title: "Tablet", size: "768px" },
                { icon: Smartphone, title: "Mobile", size: "390px" },
              ].map((device) => {
                const Icon = device.icon;
                return (
                  <div
                    key={device.title}
                    className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-5 text-center"
                  >
                    <Icon className="h-5 w-5 text-[var(--text-primary)]" />
                    <p className="mt-2.5 text-xs font-bold text-[var(--text-primary)]">
                      {device.title}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                      {device.size}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 3: Shareable SEO / Zalo Link Preview */}
          <div className="flex flex-col justify-between rounded-[22px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 lg:col-span-5">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Tốc độ & SEO tích hợp
              </span>
              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Xuất tĩnh siêu nhẹ, gửi link Zalo hiển thị sắc nét
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Tối ưu OpenGraph và tốc độ tải tức thì trên hạ tầng biên toàn
                cầu, sẵn sàng chia sẻ cho đối tác chỉ bằng một đường dẫn.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                <Globe className="h-3.5 w-3.5 text-[var(--accent-highlight)]" />
                <span className="font-mono">xuong-giao-dien.pages.dev</span>
              </div>
              <p className="mt-2 text-sm font-bold text-[var(--text-primary)]">
                LUMIÈRE Nội Thất — Bán lẻ / E-commerce | Xưởng Giao Diện
              </p>
              <p className="mt-1 line-clamp-2 text-xs text-[var(--text-secondary)]">
                Trải nghiệm bản demo tương tác trực tiếp với bộ lọc sản phẩm và
                giỏ hàng tính tiền thực tế.
              </p>
            </div>
          </div>

          {/* Card 4: Clean Modular Architecture */}
          <div className="flex flex-col justify-between rounded-[22px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 lg:col-span-7">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                Kiến trúc mô-đun hiện đại
              </span>
              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Sở hữu mã nguồn gọn sạch, dễ mở rộng tính năng về sau
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                Không phụ thuộc nền tảng đóng. Mỗi dự án bàn giao theo cấu trúc
                component rõ ràng trên Next.js + TypeScript, dễ kết nối CRM,
                thanh toán hoặc CMS khi doanh nghiệp mở rộng.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { step: "01", title: "Chọn mẫu Live", note: "Thử tương tác thật" },
                { step: "02", title: "May đo thương hiệu", note: "Màu sắc, ảnh & copy" },
                { step: "03", title: "Bàn giao trọn gói", note: "Tối ưu SEO & tốc độ" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-subtle)] font-mono text-xs font-bold text-[var(--accent-highlight)]">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[var(--text-primary)]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
              <Layers className="h-3.5 w-3.5" />
              <span>Next.js App Router · TypeScript · Tailwind CSS · Static Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
