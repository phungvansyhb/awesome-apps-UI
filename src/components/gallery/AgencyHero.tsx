"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface AgencyHeroProps {
  templateCount: number;
}

const EASE_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AgencyHero({ templateCount }: AgencyHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1360px] px-5 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-24">
        {/* Editorial metadata hairline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
          className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4 text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase"
        >
          <span>Thư viện giao diện tuyển chọn · Phiên bản 2026</span>
          <span>Thiết kế tương tác · Xem trực tiếp đa thiết bị</span>
        </motion.div>

        {/* Display H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE_EDITORIAL }}
          className="max-w-5xl text-[2.45rem] leading-[1.06] font-extrabold tracking-[-0.035em] text-[var(--text-primary)] sm:text-6xl lg:text-[4.75rem]"
        >
          Những mẫu website{" "}
          <span className="font-serif font-medium italic text-[var(--accent-highlight)]">
            sống động
          </span>{" "}
          được chế tác cho thương hiệu dẫn đầu.
        </motion.h1>

        {/* Asymmetric editorial bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE_EDITORIAL }}
          className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Không chỉ là ảnh thiết kế tĩnh. Mỗi giao diện trong bộ sưu tập đều
              có thể bấm thử, lọc dữ liệu, kiểm tra trên máy tính, máy tính bảng
              và điện thoại ngay trong trình duyệt.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                id="hero-explore-btn"
                href="#bo-suu-tap"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-stone-800"
              >
                <span>Khám phá bộ sưu tập</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                id="hero-contact-btn"
                href="#lien-he"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-stone-400"
              >
                <span>Trao đổi ý tưởng</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-[var(--border-subtle)] pt-6 lg:col-span-6 lg:border-t-0 lg:pt-0">
            <div className="border-l border-[var(--border-subtle)] pl-4">
              <p className="font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                {String(templateCount).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
                Mẫu flagship sẵn sàng trải nghiệm trực tiếp
              </p>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-4">
              <p className="font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                100%
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
                Nội dung tiếng Việt & tương tác thực tế
              </p>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-4">
              <p className="font-serif text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                3
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
                Khung thiết bị Desktop, Tablet & Mobile
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
