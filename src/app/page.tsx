import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center px-6 py-24">
      <span className="mb-4 inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-1 text-xs font-medium tracking-wide text-[var(--text-secondary)]">
        AI-DLC Scaffold Ready · Static Export
      </span>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl">
        {siteConfig.brandName}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
        {siteConfig.description}
      </p>
      <p className="mt-8 text-sm text-[var(--text-muted)]">
        Khung dự án đã sẵn sàng. Phê duyệt Gate 1 trong{" "}
        <code className="rounded bg-[var(--bg-subtle)] px-1.5 py-0.5 font-mono text-xs text-[var(--text-primary)]">
          aidlc-docs/aidlc-state.md
        </code>{" "}
        để bắt đầu triển khai các Unit xây dựng Gallery và 6 mẫu giao diện
        flagship.
      </p>
    </main>
  );
}
