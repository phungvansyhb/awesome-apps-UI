"use client";

import Link from "next/link";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  void error;

  return (
    <html lang="vi">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6 py-24 text-center font-sans text-[#111111] antialiased">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#ea580c] uppercase">
          Lỗi 500 · Hệ thống tạm gián đoạn
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
          500
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#57534e] sm:text-base">
          Hệ thống gặp lỗi ngoài dự kiến. Vui lòng thử tải lại trang hoặc quay
          về trang chủ Xưởng Giao Diện.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-[#18181b] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Thử lại
          </button>
          <Link
            href="/"
            className="rounded-full border border-[#e5e2d9] bg-white px-5 py-3 text-sm font-semibold text-[#111111]"
          >
            Về trang chủ
          </Link>
        </div>
      </body>
    </html>
  );
}
