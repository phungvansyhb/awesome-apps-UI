"use client";

import Link from "next/link";
import { ArrowLeft, RotateCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RouteErrorPage({ error, reset }: ErrorPageProps) {
  void error;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-canvas)] px-5 py-24 text-center text-[var(--text-primary)] sm:px-8">
      <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--accent-highlight)] uppercase">
        Lỗi 500 · Sự cố tạm thời
      </p>
      <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight sm:text-7xl">
        Đã có sự cố xảy ra
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
        Ứng dụng gặp lỗi không mong muốn trong quá trình hiển thị. Bạn có thể
        thử tải lại trang hoặc quay về thư viện chính.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
        >
          <RotateCw className="h-4 w-4" />
          <span>Thử tải lại</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Về trang chủ</span>
        </Link>
      </div>
    </main>
  );
}
