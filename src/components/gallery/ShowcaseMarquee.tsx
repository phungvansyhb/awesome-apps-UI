"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MarqueeBlock {
  id: string;
  label: string;
  category: string;
  href: string;
  tone: "light" | "dark";
  previewType:
    | "hero"
    | "cart"
    | "pricing"
    | "console"
    | "swatches"
    | "faq"
    | "responsive"
    | "lookbook";
}

const TOP_ROW_BLOCKS: MarqueeBlock[] = [
  {
    id: "hero-editorial",
    label: "Hero Lookbook Nội thất",
    category: "Bán lẻ",
    href: "/templates/lumiere-noi-that/",
    tone: "light",
    previewType: "hero",
  },
  {
    id: "ai-console",
    label: "Bảng mô phỏng luồng AI",
    category: "SaaS",
    href: "/templates/kova-ai-saas/",
    tone: "dark",
    previewType: "console",
  },
  {
    id: "cart-drawer",
    label: "Giỏ hàng trượt tính VND",
    category: "E-commerce",
    href: "/templates/lumiere-noi-that/",
    tone: "light",
    previewType: "cart",
  },
  {
    id: "pricing-toggle",
    label: "Bảng giá động Tháng / Năm",
    category: "Landing Page",
    href: "/templates/kova-ai-saas/",
    tone: "dark",
    previewType: "pricing",
  },
];

const BOTTOM_ROW_BLOCKS: MarqueeBlock[] = [
  {
    id: "material-swatches",
    label: "Bộ chọn màu & chất liệu gỗ",
    category: "Bán lẻ",
    href: "/templates/lumiere-noi-that/",
    tone: "light",
    previewType: "swatches",
  },
  {
    id: "responsive-stage",
    label: "Trình xem 3 khung thiết bị",
    category: "Trải nghiệm",
    href: "/templates/kova-ai-saas/",
    tone: "dark",
    previewType: "responsive",
  },
  {
    id: "faq-accordion",
    label: "Khối hỏi đáp tương tác",
    category: "SaaS",
    href: "/templates/kova-ai-saas/",
    tone: "dark",
    previewType: "faq",
  },
  {
    id: "editorial-lookbook",
    label: "Không gian trưng bày & Cam kết",
    category: "Editorial",
    href: "/templates/lumiere-noi-that/",
    tone: "light",
    previewType: "lookbook",
  },
];

function MiniBlockVisual({ block }: { block: MarqueeBlock }) {
  const isDark = block.tone === "dark";

  if (block.previewType === "console") {
    return (
      <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#0D0F12] p-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <span className="rounded-full bg-white px-2 py-0.5 text-[8px] font-bold text-black">
              Hợp đồng
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[8px] text-stone-400">
              CSKH
            </span>
          </div>
          <span className="font-mono text-[8px] text-emerald-400">640ms</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-white/25" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    );
  }

  if (block.previewType === "pricing") {
    return (
      <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#0F1115] p-3 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold text-stone-300">
            Tăng trưởng
          </span>
          <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-400">
            -20%
          </span>
        </div>
        <p className="font-mono text-sm font-bold tracking-tight text-white">
          2.790.000 ₫
        </p>
        <div className="h-5 w-full rounded-full bg-emerald-500/90" />
      </div>
    );
  }

  if (block.previewType === "cart") {
    return (
      <div className="flex h-full flex-col justify-between rounded-xl border border-[#E5DDD2] bg-[#FAF8F4] p-3 text-[#241E19]">
        <div className="flex items-center justify-between text-[9px] font-semibold">
          <span>Giỏ hàng (2)</span>
          <span className="text-[#9A6B3F]">Miễn phí ship</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#E8E0D5]">
          <div className="h-full w-4/5 bg-[#9A6B3F]" />
        </div>
        <div className="flex items-center justify-between border-t border-[#E8E0D5] pt-2">
          <span className="text-[9px] text-[#7D7063]">Tổng cộng</span>
          <span className="text-[10px] font-bold">33.550.000 ₫</span>
        </div>
      </div>
    );
  }

  if (block.previewType === "swatches") {
    return (
      <div className="flex h-full flex-col justify-between rounded-xl border border-[#E5DDD2] bg-[#FAF8F4] p-3 text-[#241E19]">
        <div className="h-9 w-full rounded-lg bg-gradient-to-br from-[#DFD5C7] to-[#C8B9A6]" />
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full border border-[#241E19] bg-[#EAE3D7]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#9E9B95]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#6B442A]" />
          </div>
          <span className="text-[9px] font-semibold text-[#5E5247]">
            Sồi tự nhiên
          </span>
        </div>
      </div>
    );
  }

  if (block.previewType === "responsive") {
    return (
      <div className="flex h-full items-end justify-center gap-2 rounded-xl border border-white/10 bg-[#121418] p-3">
        <div className="h-14 w-20 rounded-md border border-white/15 bg-white/5 p-1.5">
          <div className="h-2 w-10 rounded bg-white/30" />
          <div className="mt-1.5 h-6 w-full rounded bg-white/10" />
        </div>
        <div className="h-12 w-10 rounded-md border border-white/20 bg-white/10 p-1">
          <div className="h-1.5 w-5 rounded bg-white/40" />
          <div className="mt-1 h-5 w-full rounded bg-white/15" />
        </div>
        <div className="h-10 w-6 rounded-md border border-emerald-400/50 bg-emerald-500/15 p-1">
          <div className="h-1 w-full rounded bg-emerald-400/70" />
        </div>
      </div>
    );
  }

  if (block.previewType === "faq") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-white/10 bg-[#0F1114] p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="h-1.5 w-2/3 rounded-full bg-white/45" />
          <span className="text-[9px] text-emerald-400">−</span>
        </div>
        <div className="h-1.5 w-5/6 rounded-full bg-white/15" />
        <div className="flex items-center justify-between border-t border-white/10 pt-1.5">
          <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
          <span className="text-[9px] text-stone-500">+</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-full flex-col justify-between rounded-xl border p-3 ${
        isDark
          ? "border-white/10 bg-[#111216] text-white"
          : "border-[#E5DDD2] bg-[#F7F4EF] text-[#241E19]"
      }`}
    >
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-5 space-y-1.5 pt-1">
          <div className="h-1.5 w-10 rounded-full bg-[#9A6B3F]/60" />
          <div className="h-2.5 w-full rounded bg-[#241E19]/80" />
          <div className="h-2 w-4/5 rounded bg-[#241E19]/30" />
        </div>
        <div className="col-span-7 h-14 rounded-lg bg-gradient-to-br from-[#D8CBB8] via-[#E8E0D4] to-[#BFA98E]" />
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
            className="flex shrink-0 gap-4 pr-4"
          >
            {halfSet.map((block, idx) => (
              <Link
                key={`${copyIndex}-${block.id}-${idx}`}
                href={block.href}
                tabIndex={copyIndex === 1 ? -1 : undefined}
                className="group flex w-[275px] shrink-0 flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--text-muted)]"
              >
                <div className="h-24 w-full">
                  <MiniBlockVisual block={block} />
                </div>
                <div className="mt-2.5 flex items-center justify-between gap-2 px-1">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[var(--text-primary)]">
                      {block.label}
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)]">
                      {block.category}
                    </p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text-primary)]" />
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
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/45 py-8 sm:py-10"
    >
      <div className="mx-auto mb-5 flex max-w-[1360px] items-center justify-between px-5 sm:px-8">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
          Khối giao diện tương tác nổi bật · Bấm để xem bản Live
        </p>
        <span className="hidden text-xs text-[var(--text-muted)] sm:inline">
          Rê chuột để tạm dừng
        </span>
      </div>

      <div className="space-y-4">
        <MarqueeRow blocks={TOP_ROW_BLOCKS} direction="left" />
        <MarqueeRow blocks={BOTTOM_ROW_BLOCKS} direction="right" />
      </div>
    </section>
  );
}
