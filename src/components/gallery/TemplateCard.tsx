"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { TemplateMetadata } from "@/templates/types";
import { getCategoryLabel } from "@/templates/registry";
import { ScaledPreviewFrame } from "./ScaledPreviewFrame";

interface TemplateCardProps {
  template: TemplateMetadata;
  index: number;
  colSpanClass?: string;
}

export function TemplateCard({
  template,
  index,
  colSpanClass,
}: TemplateCardProps) {
  const categoryLabel = getCategoryLabel(template.category);

  const spanClass =
    colSpanClass ??
    (template.bentoSpan === "wide" ? "lg:col-span-7" : "lg:col-span-5");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.06, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group flex flex-col ${spanClass}`}
    >
      <Link
        id={`template-card-${template.slug}`}
        href={`/templates/${template.slug}/`}
        className="flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--text-muted)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-4"
      >
        {/* Uniform-height live scaled preview stage keeps every Bento row flush */}
        <div className="relative h-[235px] w-full overflow-hidden sm:h-[310px] lg:h-[360px]">
          <ScaledPreviewFrame
            slug={template.slug}
            title={template.name}
            surfaceTone={template.surfaceTone}
          />

          {/* Subtle hover overlay CTA */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111111]/92 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
              <span>Mở Live Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Metadata footer */}
        <div className="mt-4 flex flex-1 flex-col justify-between px-1 pb-1">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
                {categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-0.5">
                <span>Xem trực tiếp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>

            <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
              {template.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {template.tagline}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[var(--border-subtle)]/80 pt-3.5">
            {template.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
