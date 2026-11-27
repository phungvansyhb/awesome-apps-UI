import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { StudioFooter } from "@/components/gallery/StudioFooter";
import { StudioHeader } from "@/components/gallery/StudioHeader";

export const metadata: Metadata = {
  title: "404 — Không tìm thấy trang",
  description:
    "Trang bạn đang tìm không tồn tại hoặc đã được di chuyển. Quay về Xưởng Giao Diện để khám phá bộ sưu tập mẫu website tương tác.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <StudioHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--accent-highlight)] uppercase">
          Lỗi 404 · Không tìm thấy trang
        </p>
        <h1 className="mt-4 font-serif text-6xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-8xl">
          404
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
          Đường dẫn bạn vừa mở không tồn tại hoặc mẫu giao diện đã được cập nhật
          sang địa chỉ mới.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Về trang chủ</span>
          </Link>
          <Link
            href="/#bo-suu-tap"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
          >
            <Compass className="h-4 w-4" />
            <span>Xem bộ sưu tập mẫu</span>
          </Link>
        </div>
      </main>
      <StudioFooter />
    </div>
  );
}
