import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { StudioFooter } from "@/components/gallery/StudioFooter";
import { StudioHeader } from "@/components/gallery/StudioHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "500 — Sự cố hệ thống tạm thời",
  description:
    "Hệ thống đang gặp sự cố tạm thời. Vui lòng quay lại trang chủ Xưởng Giao Diện hoặc liên hệ hỗ trợ.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StaticServerErrorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <StudioHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--accent-highlight)] uppercase">
          Lỗi 500 · Sự cố máy chủ tạm thời
        </p>
        <h1 className="mt-4 font-serif text-6xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-8xl">
          500
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
          Rất tiếc, hệ thống đang gặp gián đoạn ngoài dự kiến. Bạn vui lòng tải
          lại sau ít phút hoặc quay về trang chủ.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Về trang chủ</span>
          </Link>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
          >
            <Mail className="h-4 w-4" />
            <span>Báo lỗi cho Studio</span>
          </a>
        </div>
      </main>
      <StudioFooter />
    </div>
  );
}
