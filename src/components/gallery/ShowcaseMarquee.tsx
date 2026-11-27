"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { withBasePath } from "@/lib/paths";

interface MarqueeBlock {
  id: string;
  label: string;
  category: string;
  href: string;
  accentLabel: string;
  previewType:
    | "portfolio-poster"
    | "bistro-plates"
    | "lumiere-hero"
    | "axiom-wave"
    | "bistro-booking"
    | "lumiere-swatches"
    | "kova-console"
    | "lumiere-lookbook";
}

const TOP_ROW_BLOCKS: MarqueeBlock[] = [
  {
    id: "portfolio-poster",
    label: "Hero Poster Chân Dung Đan Lớp",
    category: "KHÔI NGUYÊN · Portfolio",
    href: "/templates/khoi-nguyen-portfolio/",
    accentLabel: "Bưu thiếp tương tác",
    previewType: "portfolio-poster",
  },
  {
    id: "bistro-plates",
    label: "Đĩa Món Xoay & Nhận Xét Đồng Bộ",
    category: "MỘC BISTRO · Nhà hàng",
    href: "/templates/moc-bistro-nha-hang/",
    accentLabel: "4 món chụp trên cao",
    previewType: "bistro-plates",
  },
  {
    id: "lumiere-hero",
    label: "Hero Lookbook Nội Thất Bắc Âu",
    category: "LUMIÈRE · Bán lẻ",
    href: "/templates/lumiere-noi-that/",
    accentLabel: "Giỏ hàng tính VND",
    previewType: "lumiere-hero",
  },
  {
    id: "axiom-wave",
    label: "Đồ Thị Sóng Hình Sin Chạy 60fps",
    category: "AXIOM · Giáo dục STEM",
    href: "/templates/axiom-lop-hoc/",
    accentLabel: "Kéo công thức trực tiếp",
    previewType: "axiom-wave",
  },
];

const BOTTOM_ROW_BLOCKS: MarqueeBlock[] = [
  {
    id: "lumiere-swatches",
    label: "Chọn Chất Liệu Gỗ & Xem Nhanh",
    category: "LUMIÈRE · E-commerce",
    href: "/templates/lumiere-noi-that/",
    accentLabel: "Biến thể trực quan",
    previewType: "lumiere-swatches",
  },
  {
    id: "bistro-booking",
    label: "Thực Đơn & Đặt Bàn Trực Tuyến",
    category: "MỘC BISTRO · Hospitality",
    href: "/templates/moc-bistro-nha-hang/",
    accentLabel: "Giữ bàn tức thì",
    previewType: "bistro-booking",
  },
  {
    id: "kova-console",
    label: "Bảng Mô Phỏng Luồng AI Doanh Nghiệp",
    category: "KOVA AI · SaaS",
    href: "/templates/kova-ai-saas/",
    accentLabel: "Bảng giá Tháng / Năm",
    previewType: "kova-console",
  },
  {
    id: "lumiere-lookbook",
    label: "Không Gian Trưng Bày Editorial",
    category: "LUMIÈRE · Kiến trúc",
    href: "/templates/lumiere-noi-that/",
    accentLabel: "Trải nghiệm đa thiết bị",
    previewType: "lumiere-lookbook",
  },
];

function ShowcaseCardVisual({ block }: { block: MarqueeBlock }) {
  if (block.previewType === "portfolio-poster") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#E5E2D9] bg-[#F5F4F0] p-3.5 text-[#141413]">
        <div className="flex items-center justify-between text-[9px] font-semibold tracking-[0.14em] uppercase">
          <span className="inline-flex items-center gap-1 text-[#78756E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F44322]" />
            Đang viết · Ấn phẩm 02
          </span>
          <span className="font-black text-[#F44322]">KHÔI</span>
        </div>

        {/* Split oversized typography */}
        <p className="mt-1 text-[42px] leading-[0.82] font-black tracking-[-0.05em] text-[#F44322] select-none">
          KHÔI
        </p>
        <p className="mt-1 text-right text-[34px] leading-[0.84] font-black tracking-[-0.05em] text-[#141413] select-none">
          NGUYÊN
        </p>

        {/* Transparent studio portrait cutout overlapping text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/images/khoi-nguyen-portrait.webp")}
          alt="Chân dung Khôi Nguyên"
          loading="lazy"
          className="pointer-events-none absolute bottom-0 left-[46%] h-[88%] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_10px_18px_rgba(20,20,19,0.18)] transition-transform duration-500 group-hover:scale-105"
        />

        {/* Mini tilted letter stamp */}
        <div className="absolute right-3 bottom-3 -rotate-2 rounded border border-[#141413]/10 bg-[#FAF9F6] px-2.5 py-1.5 shadow-sm">
          <p className="font-mono text-[8px] font-semibold text-[#F44322]">
            THƯ 01 / 04
          </p>
          <p className="font-mono text-[8.5px] text-[#2C2927]">
            Gửi ngày mai...
          </p>
        </div>
      </div>
    );
  }

  if (block.previewType === "bistro-plates") {
    return (
      <div className="relative flex h-full w-full items-center justify-between overflow-hidden rounded-xl border border-[#ECE8E6] bg-[#F8F7F6] px-4 py-3.5 text-[#181818]">
        <div className="z-10 flex max-w-[54%] flex-col justify-between self-stretch">
          <div className="flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-[#8E1F24]" />
            <span className="font-serif text-xs font-bold text-[#8E1F24]">
              Mộc Bistro
            </span>
          </div>

          <div>
            <p className="text-[15px] leading-[1.15] font-bold tracking-tight text-[#181818]">
              Thưởng trọn hương vị tinh hoa
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="rounded-full bg-[#8E1F24] px-2.5 py-0.5 text-[9px] font-semibold text-white">
                Đặt món →
              </span>
              <span className="rounded-full bg-[#F4E4E4] px-2 py-0.5 text-[9px] font-semibold text-[#8E1F24]">
                Đặt bàn
              </span>
            </div>
          </div>

          {/* Mini circular dish selector strip */}
          <div className="flex items-center gap-2">
            {[
              "/images/bistro-dish-pasta.webp",
              "/images/bistro-dish-steak.webp",
              "/images/bistro-dish-salmon.webp",
            ].map((src, idx) => (
              <div
                key={src}
                className={`h-7 w-7 rounded-full p-0.5 ${
                  idx === 0
                    ? "bg-white ring-[1.5px] ring-[#8E1F24]"
                    : "bg-white/80 opacity-80"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(src)}
                  alt="Đĩa món Bistro"
                  loading="lazy"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero overhead porcelain plate */}
        <div className="relative h-34 w-34 shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath("/images/bistro-dish-pasta.webp")}
            alt="Salad Mỳ Ống & Phô Mai Burrata"
            loading="lazy"
            className="h-full w-full rounded-full object-contain drop-shadow-[0_14px_24px_rgba(24,24,24,0.16)]"
          />
        </div>
      </div>
    );
  }

  if (block.previewType === "lumiere-hero") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
          alt="Không gian nội thất LUMIÈRE"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1511]/80 via-[#1A1511]/20 to-transparent" />
        <div className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.12em] text-[#241E19] uppercase backdrop-blur-sm">
          LUMIÈRE · Lookbook 2026
        </div>
        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2 text-white">
          <div>
            <p className="font-serif text-base leading-tight font-medium">
              Nội thất Bắc Âu tối giản
            </p>
            <p className="mt-0.5 text-[10px] text-white/80">
              Gỗ sồi tự nhiên · Vải Bouclé Bỉ
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#241E19]">
            28.900.000 ₫
          </span>
        </div>
      </div>
    );
  }

  if (block.previewType === "axiom-wave") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-[#E5E8F0] bg-white p-3.5 text-[#111318]">
        {/* Subtle blueprint grid */}
        <svg
          aria-hidden="true"
          viewBox="0 0 340 160"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <pattern
              id="marquee-axiom-grid"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 18 0 L 0 0 0 18"
                fill="none"
                stroke="#F1F4FA"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="340" height="160" fill="url(#marquee-axiom-grid)" />
        </svg>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#111318] font-serif text-[10px] font-bold text-white">
              ∀
            </span>
            <span className="font-serif text-xs font-semibold">Axiom</span>
          </div>
          <span className="rounded-full border border-[#E5E8F0] bg-[#FAFBFD] px-2 py-0.5 font-mono text-[8.5px] font-semibold text-[#2F5CE5]">
            SÓNG HÌNH SIN 1/4
          </span>
        </div>

        {/* Crisp mini unit circle + sine wave SVG */}
        <svg
          aria-hidden="true"
          viewBox="0 0 320 82"
          fill="none"
          className="relative z-10 my-1 h-[74px] w-full"
        >
          <line x1="16" y1="42" x2="306" y2="42" stroke="#E5E9F2" strokeWidth="1" />
          <circle cx="58" cy="42" r="24" stroke="#D96B27" strokeWidth="1.5" />
          <line x1="58" y1="42" x2="77" y2="27" stroke="#111318" strokeWidth="1.3" />
          <circle cx="77" cy="27" r="3" fill="#111318" />
          <line
            x1="77"
            y1="27"
            x2="112"
            y2="27"
            stroke="#9AA1B2"
            strokeWidth="1"
            strokeDasharray="2.5 2.5"
          />
          <path
            d="M112 27 C124 8, 138 8, 152 42 C166 76, 180 76, 194 42 C208 8, 222 8, 236 42 C250 76, 264 76, 278 42 C288 18, 296 18, 304 34"
            stroke="#111318"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="112" cy="27" r="2.8" fill="#2F5CE5" />
          <line x1="132" y1="11" x2="216" y2="11" stroke="#8FA8EE" strokeWidth="1.1" />
          <text
            x="174"
            y="8"
            textAnchor="middle"
            fill="#2F5CE5"
            fontSize="10"
            fontStyle="italic"
            fontFamily="Georgia, serif"
          >
            λ
          </text>
        </svg>

        <div className="relative z-10 flex items-center justify-between border-t border-[#EEF0F5] pt-2 text-[11px]">
          <span className="font-serif">
            <em>y</em> ={" "}
            <strong className="italic text-[#D96B27]">A</strong> sin(
            <strong className="italic text-[#2F5CE5]">ω</strong>x +{" "}
            <strong className="italic text-[#D93860]">φ</strong>)
          </span>
          <span className="rounded-full bg-[#2F5CE5] px-2.5 py-0.5 text-[9px] font-semibold text-white">
            Chạy 60fps
          </span>
        </div>
      </div>
    );
  }

  if (block.previewType === "lumiere-swatches") {
    return (
      <div className="grid h-full w-full grid-cols-12 gap-2.5 overflow-hidden rounded-xl border border-[#E5DDD2] bg-[#FAF8F4] p-2.5 text-[#241E19]">
        <div className="relative col-span-7 overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"
            alt="Sofa Bouclé Atelier"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-[#241E19]">
            Bán chạy
          </span>
        </div>
        <div className="col-span-5 flex flex-col justify-between py-1">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.1em] text-[#9A6B3F] uppercase">
              Phòng khách
            </p>
            <p className="mt-1 text-xs leading-snug font-bold">
              Sofa Bouclé Atelier 3 Chỗ
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full border-2 border-[#241E19] bg-[#EAE3D7]" />
              <span className="h-4 w-4 rounded-full bg-[#9E9B95]" />
              <span className="h-4 w-4 rounded-full bg-[#6B442A]" />
            </div>
            <p className="mt-2 font-mono text-[11px] font-bold text-[#241E19]">
              28.900.000 ₫
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (block.previewType === "bistro-booking") {
    return (
      <div className="relative flex h-full w-full items-center justify-between gap-3 overflow-hidden rounded-xl border border-[#ECE8E6] bg-white p-3.5 text-[#181818]">
        <div className="flex flex-col justify-between self-stretch">
          <div>
            <span className="rounded-full bg-[#F4E4E4] px-2 py-0.5 text-[9px] font-semibold text-[#8E1F24]">
              Tối Thứ Sáu · Tặng Vang
            </span>
            <p className="mt-1.5 font-serif text-[15px] leading-snug font-bold text-[#181818]">
              Thăn Bò Áp Chảo & Tart Sô-cô-la
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["18:00", "19:00", "20:00"].map((slot, idx) => (
              <span
                key={slot}
                className={`rounded-full px-2.5 py-0.5 text-[9.5px] font-semibold ${
                  idx === 1
                    ? "bg-[#8E1F24] text-white"
                    : "border border-[#E6DFDC] bg-[#F8F7F6] text-[#4A4745]"
                }`}
              >
                {slot}
              </span>
            ))}
          </div>
        </div>

        {/* Paired overhead dishes */}
        <div className="relative flex shrink-0 items-center -space-x-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath("/images/bistro-dish-steak.webp")}
            alt="Thăn nội bò áp chảo"
            loading="lazy"
            className="h-24 w-24 rounded-full object-contain drop-shadow-[0_12px_20px_rgba(24,24,24,0.18)] transition-transform duration-500 group-hover:-rotate-6"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath("/images/bistro-dish-dessert.webp")}
            alt="Tart Sô-cô-la Phúc Bồn Tử"
            loading="lazy"
            className="mt-8 h-20 w-20 rounded-full object-contain drop-shadow-[0_12px_20px_rgba(24,24,24,0.18)] transition-transform duration-500 group-hover:rotate-6"
          />
        </div>
      </div>
    );
  }

  if (block.previewType === "kova-console") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0B0D12] p-3.5 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl"
        />
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-white px-2.5 py-0.5 text-[9px] font-bold text-black">
              Hợp đồng AI
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-zinc-400">
              CSKH 24/7
            </span>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-[9.5px] font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            640ms
          </span>
        </div>

        {/* Mini real-looking analytics bars + AI summary */}
        <div className="relative z-10 grid grid-cols-12 items-end gap-3">
          <div className="col-span-7 space-y-1.5">
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-300">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span className="truncate font-medium">
                Trích xuất 18 điều khoản rủi ro
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300" />
            </div>
            <p className="font-mono text-[9.5px] text-zinc-400">
              Độ chính xác 99.4% · 2.790.000 ₫/th
            </p>
          </div>

          <div className="col-span-5 flex h-14 items-end justify-end gap-1.5">
            {[42, 68, 54, 86, 100].map((height, idx) => (
              <span
                key={idx}
                style={{ height: `${height}%` }}
                className={`w-3 rounded-t-sm ${
                  idx === 4
                    ? "bg-emerald-400"
                    : idx === 3
                      ? "bg-emerald-500/70"
                      : "bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // lumiere-lookbook
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
        alt="Lookbook kiến trúc phòng khách"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1511]/75 via-[#1A1511]/25 to-transparent" />
      <div className="absolute inset-y-3 left-3 flex max-w-[65%] flex-col justify-between text-white">
        <span className="w-fit rounded-full bg-white/15 px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.12em] uppercase backdrop-blur-sm">
          Trưng bày thực tế
        </span>
        <div>
          <p className="font-serif text-base leading-snug font-medium">
            Phòng ăn gỗ sồi & ánh sáng tự nhiên
          </p>
          <p className="mt-1 text-[10px] text-white/80">
            Desktop · Tablet · Mobile Live Preview
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  blocks,
  direction,
}: {
  blocks: MarqueeBlock[];
  direction: "left" | "right";
}) {
  const halfSet = [...blocks, ...blocks];

  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div
        className={
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }
      >
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex === 1}
            className="flex shrink-0 gap-5 pr-5"
          >
            {halfSet.map((block, idx) => (
              <Link
                key={`${copyIndex}-${block.id}-${idx}`}
                href={block.href}
                tabIndex={copyIndex === 1 ? -1 : undefined}
                className="group flex w-[325px] shrink-0 flex-col rounded-[22px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 shadow-[0_6px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--text-muted)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:w-[375px]"
              >
                <div className="h-44 w-full sm:h-48">
                  <ShowcaseCardVisual block={block} />
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 px-1 pb-0.5">
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-bold tracking-tight text-[var(--text-primary)]">
                      {block.label}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-[var(--text-muted)]">
                      {block.category} · {block.accentLabel}
                    </p>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition-all group-hover:border-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-canvas)]">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowcaseMarquee() {
  return (
    <section
      aria-label="Trưng bày nhanh các khối giao diện tương tác"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/45 py-12 sm:py-16"
    >
      <div className="mx-auto mb-6 flex max-w-[1360px] items-center justify-between px-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
          Khối giao diện tương tác nổi bật · Bấm để xem bản Live
        </p>
        <span className="hidden text-xs text-[var(--text-muted)] sm:inline">
          Rê chuột để tạm dừng
        </span>
      </div>

      <div className="space-y-5">
        <MarqueeRow blocks={TOP_ROW_BLOCKS} direction="left" />
        <MarqueeRow blocks={BOTTOM_ROW_BLOCKS} direction="right" />
      </div>
    </section>
  );
}
