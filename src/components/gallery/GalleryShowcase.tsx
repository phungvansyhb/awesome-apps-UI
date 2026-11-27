"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { TEMPLATE_CATEGORIES } from "@/templates/registry";
import type { TemplateCategoryId, TemplateMetadata } from "@/templates/types";
import { TemplateCard } from "./TemplateCard";

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
              ? "bg-[var(--accent-primary)] text-white"
              : "border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-stone-400 hover:text-[var(--text-primary)]"
          }`}
        >
          <span>Tất cả</span>
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] ${
              activeCategory === "all"
                ? "bg-white/15 text-white"
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
                  ? "bg-[var(--accent-primary)] text-white"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-stone-400 hover:text-[var(--text-primary)]"
              }`}
            >
              <span>{category.shortLabel}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bento Grid */}
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
            />
          ))}
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
              className="rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Xem tất cả mẫu hiện có
            </button>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-stone-400"
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
