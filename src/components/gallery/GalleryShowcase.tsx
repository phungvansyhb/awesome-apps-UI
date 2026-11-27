"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { TEMPLATE_CATEGORIES } from "@/templates/registry";
import type { TemplateCategoryId, TemplateMetadata } from "@/templates/types";
import { TemplateCard } from "./TemplateCard";

function getBentoColSpan(index: number): string {
  const row = Math.floor(index / 2);
  const isLeft = index % 2 === 0;
  if (row % 2 === 0) {
    return isLeft ? "lg:col-span-7" : "lg:col-span-5";
  }
  return isLeft ? "lg:col-span-5" : "lg:col-span-7";
}

interface GalleryShowcaseProps {
  templates: TemplateMetadata[];
}

export function GalleryShowcase({ templates }: GalleryShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<
    TemplateCategoryId | "all"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    counts.set("all", templates.length);
    for (const template of templates) {
      counts.set(template.category, (counts.get(template.category) ?? 0) + 1);
    }
    return counts;
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return templates.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;
      const haystack = [
        item.name,
        item.brandTitle,
        item.tagline,
        item.description,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, searchQuery, templates]);

  return (
    <section
      id="bo-suu-tap"
      className="mx-auto max-w-[1360px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
            Bộ sưu tập tuyển chọn
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Chọn ngành hàng, bấm xem giao diện thật.
          </h2>
        </div>

        {/* Search box */}
        <div className="relative w-full md:w-80">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            id="gallery-search-input"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Tìm theo ngành, phong cách..."
            className="w-full rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2.5 pr-9 pl-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Xóa từ khóa tìm kiếm"
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-0.5 text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Lọc theo danh mục website"
        className="mt-8 flex flex-wrap items-center gap-2"
      >
        <button
          id="filter-cat-all"
          role="tab"
          aria-selected={activeCategory === "all"}
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
            activeCategory === "all"
              ? "bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]"
              : "border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
          }`}
        >
          <span>Tất cả</span>
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] ${
              activeCategory === "all"
                ? "bg-[var(--accent-primary-fg)]/15 text-[var(--accent-primary-fg)]"
                : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
            }`}
          >
            {categoryCounts.get("all") ?? 0}
          </span>
        </button>

        {TEMPLATE_CATEGORIES.map((category) => {
          const count = categoryCounts.get(category.id) ?? 0;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              id={`filter-cat-${category.id}`}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span>{category.shortLabel}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  isActive
                    ? "bg-[var(--accent-primary-fg)]/15 text-[var(--accent-primary-fg)]"
                    : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Balanced Alternating Bento Grid (7+5 → 5+7) */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredTemplates.map((template, index) => (
            <TemplateCard
              key={template.slug}
              template={template}
              index={index}
              colSpanClass={getBentoColSpan(index)}
            />
          ))}

          {/* Auto-completes any odd Bento row to a clean 12/12 grid */}
          {filteredTemplates.length > 0 &&
            filteredTemplates.length % 2 === 1 && (
              <motion.aside
                key="bento-custom-studio-cta"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex flex-col ${getBentoColSpan(filteredTemplates.length)}`}
              >
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-all duration-300 hover:border-[var(--text-muted)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--accent-highlight)]/10 blur-3xl"
                  />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1 text-[11px] font-semibold text-[var(--text-secondary)]">
                      <Sparkles className="h-3.5 w-3.5 text-[var(--accent-highlight)]" />
                      <span>Thiết kế may đo theo thương hiệu</span>
                    </div>

                    <h3 className="mt-5 text-2xl leading-tight font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                      Chưa thấy đúng ngành hàng của bạn?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      Gửi yêu cầu hoặc ảnh phong cách bạn thích — đội ngũ{" "}
                      <span className="font-semibold text-[var(--text-primary)]">
                        {siteConfig.brandName}
                      </span>{" "}
                      dựng bản mẫu tương tác riêng theo nhận diện thương hiệu chỉ
                      trong 5–10 ngày.
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-dashed border-[var(--border-subtle)] pt-5 text-xs text-[var(--text-secondary)]">
                      {[
                        "Xem thử giao diện chạy thật trên Desktop, Tablet & Mobile",
                        "Tùy biến 100% bảng màu, phông chữ tiếng Việt & nội dung",
                        "Tối ưu tốc độ tải trang, SEO kỹ thuật & bàn giao mã sạch",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent-highlight)]/15 text-[var(--accent-highlight)]">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--border-subtle)]/80 pt-5">
                    <a
                      href="#lien-he"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-xs font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
                    >
                      <span>Đặt thiết kế riêng</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={siteConfig.contact.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Nhắn Zalo tư vấn</span>
                    </a>
                  </div>
                </div>
              </motion.aside>
            )}
        </AnimatePresence>
      </motion.div>

      {/* Graceful Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="mt-10 flex flex-col items-center justify-center rounded-[22px] border border-dashed border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-16 text-center">
          <p className="text-base font-semibold text-[var(--text-primary)]">
            {searchQuery
              ? `Không tìm thấy mẫu nào khớp với "${searchQuery}"`
              : "Danh mục này đang được Studio cập nhật mẫu mới"}
          </p>
          <p className="mt-2 max-w-md text-sm text-[var(--text-secondary)]">
            {searchQuery
              ? "Thử xóa từ khóa hoặc chuyển về mục Tất cả để xem các mẫu flagship hiện có."
              : "Bạn có thể xem trước các mẫu flagship đang mở hoặc liên hệ trực tiếp để nhận thiết kế riêng theo ngành của bạn."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-xs font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
            >
              Xem tất cả mẫu hiện có
            </button>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
            >
              <span>Đặt thiết kế riêng</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
