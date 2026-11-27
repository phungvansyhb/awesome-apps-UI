"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface AgencyHeroProps {
  templateCount: number;
}

const EASE_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];
const HERO_KEYWORDS = ["sống động", "tinh tế", "đẳng cấp"] as const;
const ROTATE_INTERVAL_MS = 2600;

const TRUSTED_AVATARS = [
  {
    name: "Minh Hoàng",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Thu Lan",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Quốc Khánh",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Phương Nhi",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  padZero?: boolean;
  duration?: number;
  delay?: number;
}

function AnimatedCounter({
  target,
  suffix = "",
  padZero = false,
  duration = 1.3,
  delay = 0.2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  const [displayValue, setDisplayValue] = useState<number>(target);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      delay,
      ease: EASE_EDITORIAL,
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [delay, duration, isInView, target]);

  const formatted = padZero
    ? String(displayValue).padStart(2, "0")
    : String(displayValue);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

function RotatingHeroKeyword() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  const activeWord = HERO_KEYWORDS[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== "hidden") {
        setActiveIndex((prev) => (prev + 1) % HERO_KEYWORDS.length);
      }
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    const node = measureRef.current;
    if (!node) return;

    const updateWidth = () => {
      const nextWidth = Math.ceil(node.getBoundingClientRect().width);
      if (nextWidth > 0) {
        setMeasuredWidth((prev) => (prev === nextWidth ? prev : nextWidth));
      }
    };

    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);

    const rafId = window.requestAnimationFrame(updateWidth);
    let active = true;
    document.fonts?.ready.then(() => {
      if (active) updateWidth();
    });

    return () => {
      active = false;
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [activeWord]);

  return (
    <>
      <span className="sr-only">{HERO_KEYWORDS.join(", ")}</span>

      {/* Hidden measurer inside H1 typography context for exact responsive spring width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute top-0 left-0 pr-[0.12em] pl-[0.04em] font-serif font-medium italic whitespace-nowrap select-none"
      >
        {activeWord}
      </span>

      <motion.span
        aria-hidden="true"
        initial={false}
        animate={
          measuredWidth !== null ? { width: measuredWidth } : undefined
        }
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
          mass: 0.78,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative inline-block align-baseline whitespace-nowrap"
      >
        {/* In-flow invisible strut preserves native Playfair Display baseline & line-height */}
        <span className="invisible inline-block pr-[0.12em] pl-[0.04em] font-serif font-medium italic whitespace-nowrap select-none">
          {activeWord}
        </span>

        {/* Soft vertical mask generously padded for Vietnamese diacritics & italic overhang */}
        <span className="pointer-events-none absolute -top-[0.18em] -right-[0.08em] -bottom-[0.18em] -left-[0.04em] overflow-hidden">
          <AnimatePresence mode="sync" initial={false}>
            <motion.span
              key={activeWord}
              initial={
                prefersReducedMotion
                  ? { y: "75%", opacity: 0 }
                  : { y: "96%", opacity: 0, filter: "blur(6px)" }
              }
              animate={
                prefersReducedMotion
                  ? { y: "0%", opacity: 1 }
                  : { y: "0%", opacity: 1, filter: "blur(0px)" }
              }
              exit={
                prefersReducedMotion
                  ? { y: "-75%", opacity: 0 }
                  : { y: "-96%", opacity: 0, filter: "blur(6px)" }
              }
              transition={{
                duration: 0.58,
                ease: EASE_EDITORIAL,
              }}
              className="absolute top-[0.18em] left-[0.04em] inline-block pr-[0.12em] pl-[0.04em] font-serif font-medium italic whitespace-nowrap text-[#F97316] will-change-transform"
            >
              {activeWord}
            </motion.span>
          </AnimatePresence>
        </span>

        {/* Editorial animated underline synchronized with each keyword */}
        <span className="pointer-events-none absolute right-[0.08em] bottom-[0.01em] left-[0.03em] h-[2px] overflow-hidden rounded-full sm:h-[2.5px]">
          <AnimatePresence mode="sync" initial={false}>
            <motion.span
              key={`underline-${activeWord}`}
              initial={{ scaleX: 0, opacity: 0.25, originX: 0 }}
              animate={{ scaleX: 1, opacity: 1, originX: 0 }}
              exit={{
                scaleX: 0,
                opacity: 0,
                originX: 1,
                transition: {
                  originX: { duration: 0 },
                  duration: 0.4,
                  ease: EASE_EDITORIAL,
                },
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: EASE_EDITORIAL,
              }}
              className="absolute inset-0 block rounded-full bg-[#F97316]/85"
            />
          </AnimatePresence>
        </span>
      </motion.span>
    </>
  );
}

export function AgencyHero({ templateCount }: AgencyHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1360px] px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-20">
        {/* Editorial metadata hairline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
          className="mb-9 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4 text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase"
        >
          <span>Xưởng Giao Diện · Thư viện tuyển chọn 2026</span>
          <span>Thiết kế tương tác · Xem trực tiếp đa thiết bị</span>
        </motion.div>

        {/* Display H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE_EDITORIAL }}
          className="relative max-w-5xl text-[2.45rem] leading-[1.08] font-extrabold tracking-[-0.035em] text-[var(--text-primary)] sm:text-6xl lg:text-[4.75rem]"
        >
          Những mẫu website <RotatingHeroKeyword /> được chế tác cho thương hiệu
          dẫn đầu.
        </motion.h1>

        {/* Asymmetric editorial bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE_EDITORIAL }}
          className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Không chỉ là ảnh thiết kế tĩnh. Mỗi giao diện trong bộ sưu tập đều
              có thể bấm thử, lọc dữ liệu, kiểm tra trên máy tính, máy tính bảng
              và điện thoại ngay trong trình duyệt.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                id="hero-explore-btn"
                href="#bo-suu-tap"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[var(--accent-primary-fg)] transition-opacity hover:opacity-90"
              >
                <span>Khám phá bộ sưu tập</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                id="hero-contact-btn"
                href="#lien-he"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
              >
                <span>Trao đổi ý tưởng</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Subtle Social Proof Row with real human portrait avatars */}
            <div className="mt-7 flex items-center gap-3.5">
              <div className="flex -space-x-2">
                {TRUSTED_AVATARS.map((avatar) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={avatar.name}
                    src={avatar.src}
                    alt={avatar.name}
                    loading="eager"
                    className="h-8 w-8 rounded-full border-2 border-[var(--bg-canvas)] object-cover"
                  />
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Được tin chọn bởi{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  <AnimatedCounter
                    target={40}
                    suffix="+"
                    duration={1.3}
                    delay={0.25}
                  />{" "}
                  thương hiệu & đội nhóm
                </span>{" "}
                tại Việt Nam
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-[var(--border-subtle)] pt-6 lg:col-span-6 lg:border-t-0 lg:pt-0">
            <div className="border-l border-[var(--border-subtle)] pl-4">
              <p className="font-sans text-3xl font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl">
                <AnimatedCounter
                  target={templateCount}
                  padZero
                  duration={1.0}
                  delay={0.2}
                />
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
                Mẫu flagship sẵn sàng trải nghiệm trực tiếp
              </p>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-4">
              <p className="font-sans text-3xl font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl">
                <AnimatedCounter
                  target={100}
                  suffix="%"
                  duration={1.5}
                  delay={0.3}
                />
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
                Nội dung tiếng Việt & tương tác thực tế
              </p>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-4">
              <p className="font-sans text-3xl font-bold tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl">
                <AnimatedCounter target={3} duration={1.1} delay={0.4} />
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
                Khung thiết bị Desktop, Tablet & Mobile
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
