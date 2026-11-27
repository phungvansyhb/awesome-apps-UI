"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { withBasePath } from "@/lib/paths";

export type ViewportMode = "desktop" | "tablet" | "mobile";

export interface PreviewToolbarProps {
  slug: string;
  name: string;
  categoryLabel: string;
  viewport: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  onEnterFullscreen: () => void;
  prevTemplate: { slug: string; name: string } | null;
  nextTemplate: { slug: string; name: string } | null;
}

const VIEWPORT_OPTIONS: {
  id: ViewportMode;
  label: string;
  widthHint: string;
  icon: typeof Monitor;
}[] = [
  { id: "desktop", label: "Máy tính", widthHint: "100%", icon: Monitor },
  { id: "tablet", label: "Máy tính bảng", widthHint: "768px", icon: Tablet },
  { id: "mobile", label: "Điện thoại", widthHint: "390px", icon: Smartphone },
];

export function PreviewToolbar({
  slug,
  name,
  categoryLabel,
  viewport,
  onViewportChange,
  onEnterFullscreen,
  prevTemplate,
  nextTemplate,
}: PreviewToolbarProps) {
  const rawPreviewHref = withBasePath(`/preview/${slug}/`);

  return (
    <header className="sticky top-0 z-40 flex h-14 w-full shrink-0 items-center justify-between border-b border-white/10 bg-[#111111]/95 px-3 text-white backdrop-blur-md sm:px-5">
      {/* Left: Back to gallery & template identity */}
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
        <Link
          id="preview-back-btn"
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-stone-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Thư viện</span>
        </Link>

        <div className="hidden h-4 w-px bg-white/15 sm:block" />

        <div className="flex min-w-0 items-baseline gap-2">
          <h1 className="truncate text-sm font-semibold tracking-tight text-white">
            {name}
          </h1>
          <span className="hidden truncate text-xs text-stone-400 md:inline">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Center: Responsive viewport switcher */}
      <div
        role="group"
        aria-label="Chọn kích thước màn hình xem trước"
        className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex"
      >
        {VIEWPORT_OPTIONS.map((option) => {
          const Icon = option.icon;
          const isActive = viewport === option.id;
          return (
            <button
              key={option.id}
              id={`viewport-${option.id}`}
              type="button"
              onClick={() => onViewportChange(option.id)}
              title={`${option.label} (${option.widthHint})`}
              className={`relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                isActive ? "text-stone-950" : "text-stone-300 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-viewport-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-white"
                />
              )}
              <Icon className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10 hidden lg:inline">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right: Prev/Next presentation controls & fullscreen */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {(prevTemplate || nextTemplate) && (
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5">
            {prevTemplate ? (
              <Link
                id="preview-prev-btn"
                href={`/templates/${prevTemplate.slug}/`}
                title={`Mẫu trước: ${prevTemplate.name}`}
                aria-label={`Mẫu trước: ${prevTemplate.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-stone-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Link>
            ) : (
              <span className="flex h-7 w-7 items-center justify-center text-stone-600">
                <ChevronLeft className="h-4 w-4" />
              </span>
            )}

            <div className="h-3.5 w-px bg-white/10" />

            {nextTemplate ? (
              <Link
                id="preview-next-btn"
                href={`/templates/${nextTemplate.slug}/`}
                title={`Mẫu tiếp theo: ${nextTemplate.name}`}
                aria-label={`Mẫu tiếp theo: ${nextTemplate.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-stone-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="flex h-7 w-7 items-center justify-center text-stone-600">
                <ChevronRight className="h-4 w-4" />
              </span>
            )}
          </div>
        )}

        <button
          id="preview-fullscreen-btn"
          type="button"
          onClick={onEnterFullscreen}
          title="Chế độ toàn màn hình (ẩn thanh công cụ)"
          className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 text-xs font-medium text-stone-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white sm:px-3"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          <span className="hidden xl:inline">Toàn màn hình</span>
        </button>

        <a
          id="preview-open-tab-btn"
          href={rawPreviewHref}
          target="_blank"
          rel="noopener noreferrer"
          title="Mở bản demo trong tab mới"
          aria-label="Mở bản demo trong tab mới"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
