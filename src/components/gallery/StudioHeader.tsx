"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

export function StudioHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-5 sm:px-8">
        {/* Brand mark */}
        <Link
          href="/"
          aria-label={`${siteConfig.brandName} — Trang chủ`}
          className="group flex items-center gap-2.5 text-[var(--text-primary)]"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[9px] bg-[var(--accent-primary)] shadow-xs transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-105"
          >
            <svg
              viewBox="0 0 64 64"
              fill="none"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="6" fill="var(--accent-highlight)" />
              <path
                d="M22 44L42 20M42 44L28 27"
                stroke="var(--accent-primary-fg)"
                strokeWidth="4.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              {siteConfig.brandName}
            </span>
            <span className="mt-0.5 text-[9.5px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
              UI Studio
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center gap-7 md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.contact.hotlineHref}
            className="hidden items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{siteConfig.contact.hotline}</span>
          </a>
          <ThemeToggle />
          <a
            id="header-contact-cta"
            href="#lien-he"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-primary)] px-4 py-2 text-xs font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
          >
            <span>Liên hệ Studio</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-[var(--border-subtle)] pt-4">
            <a
              href={siteConfig.contact.hotlineHref}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)]"
            >
              <Phone className="h-4 w-4" />
              <span>Hotline / Zalo: {siteConfig.contact.hotline}</span>
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-primary-fg)]"
            >
              <span>Liên hệ tư vấn</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
