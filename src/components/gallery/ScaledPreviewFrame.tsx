"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone } from "lucide-react";
import { withBasePath } from "@/lib/paths";

interface ScaledPreviewFrameProps {
  slug: string;
  title: string;
  surfaceTone: "light" | "dark";
  viewport?: "desktop" | "mobile";
}

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 1140;
const MOBILE_WIDTH = 390;
const MOBILE_HEIGHT = 960;

export function ScaledPreviewFrame({
  slug,
  title,
  surfaceTone,
  viewport = "desktop",
}: ScaledPreviewFrameProps) {
  const isMobile = viewport === "mobile";
  const virtualWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;
  const virtualHeight = isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(isMobile ? 0.72 : 0.36);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy-mount iframe only when card approaches viewport
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            intersectionObserver.disconnect();
            break;
          }
        }
      },
      { rootMargin: "250px" }
    );

    intersectionObserver.observe(node);
    return () => intersectionObserver.disconnect();
  }, []);

  // Dynamically compute exact virtual-to-frame scale ratio
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const width = node.clientWidth;
      if (width > 0) {
        setScale(width / virtualWidth);
      }
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, [virtualWidth]);

  const iframeSrc = withBasePath(`/preview/${slug}/`);

  if (isMobile) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-[16px] border px-6 pt-8 pb-6 ${
          surfaceTone === "dark"
            ? "border-white/10 bg-gradient-to-b from-[#171920] via-[#111318] to-[#0B0C0F]"
            : "border-black/[0.08] bg-gradient-to-b from-[#F4F1EA] via-[#EFECE4] to-[#E9E4DA]"
        }`}
      >
        {/* Soft studio radial glow behind phone */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            surfaceTone === "dark" ? "bg-emerald-500/15" : "bg-[#EA580C]/10"
          }`}
        />

        {/* Floating Mobile Viewport indicator pill */}
        <div
          className={`absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-md ${
            surfaceTone === "dark"
              ? "border-white/12 bg-black/45 text-stone-200"
              : "border-black/10 bg-white/80 text-stone-700"
          }`}
        >
          <Smartphone className="h-3 w-3" />
          <span>Mobile 390px</span>
        </div>

        {/* Sleek Smartphone Bezel Frame */}
        <div className="relative z-10 flex h-full max-h-[760px] w-full max-w-[342px] flex-col overflow-hidden rounded-[38px] border-[6px] border-[#1D1E22] bg-[#0B0C0E] shadow-[0_32px_70px_rgba(0,0,0,0.34)] ring-1 ring-white/12 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {/* Phone Status Bar + Dynamic Island */}
          <div
            className={`relative flex h-8 shrink-0 items-center justify-between px-5 text-[10px] font-semibold ${
              surfaceTone === "dark"
                ? "bg-[#0B0C0E] text-white/80"
                : "bg-[#FAF9F6] text-stone-900/80"
            }`}
          >
            <span className="tabular-nums">9:41</span>
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-black"
            />
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
              <span className="h-2 w-4 rounded-[3px] border border-current opacity-80" />
            </span>
          </div>

          {/* Scaled Live Mobile Iframe */}
          <div
            ref={containerRef}
            className={`relative flex-1 overflow-hidden ${
              surfaceTone === "dark" ? "bg-[#0B0C0E]" : "bg-[#FAF9F6]"
            }`}
          >
            {!isLoaded && (
              <div
                aria-hidden="true"
                className={`absolute inset-0 z-10 flex flex-col justify-between p-5 ${
                  surfaceTone === "dark" ? "bg-[#111215]" : "bg-[#F5F3EE]"
                }`}
              >
                <div className="space-y-3">
                  <div
                    className={`h-2.5 w-20 animate-pulse rounded-full ${
                      surfaceTone === "dark" ? "bg-white/10" : "bg-stone-300/70"
                    }`}
                  />
                  <div
                    className={`h-7 w-4/5 animate-pulse rounded-lg ${
                      surfaceTone === "dark" ? "bg-white/10" : "bg-stone-300/60"
                    }`}
                  />
                  <div
                    className={`h-3 w-2/3 animate-pulse rounded-full ${
                      surfaceTone === "dark" ? "bg-white/5" : "bg-stone-200"
                    }`}
                  />
                </div>
                <div
                  className={`h-44 w-full animate-pulse rounded-2xl ${
                    surfaceTone === "dark" ? "bg-white/5" : "bg-stone-200/80"
                  }`}
                />
              </div>
            )}

            {shouldLoad && (
              <iframe
                src={iframeSrc}
                title={`Xem trước di động: ${title}`}
                tabIndex={-1}
                aria-hidden="true"
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                style={{
                  width: `${virtualWidth}px`,
                  height: `${virtualHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
                className={`pointer-events-none block border-0 select-none transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>

          {/* Phone Home Indicator Bar */}
          <div
            className={`flex h-5 shrink-0 items-center justify-center ${
              surfaceTone === "dark" ? "bg-[#0B0C0E]" : "bg-[#FAF9F6]"
            }`}
          >
            <span
              className={`h-1 w-24 rounded-full ${
                surfaceTone === "dark" ? "bg-white/30" : "bg-black/20"
              }`}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[14px] border border-black/[0.08] bg-stone-100">
      {/* Subtle minimal browser top chrome */}
      <div
        className={`flex h-7 shrink-0 items-center justify-between border-b px-3 ${
          surfaceTone === "dark"
            ? "border-white/10 bg-[#141417] text-stone-400"
            : "border-stone-200/80 bg-[#F6F5F2] text-stone-500"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-current opacity-30" />
          <span className="h-2 w-2 rounded-full bg-current opacity-30" />
          <span className="h-2 w-2 rounded-full bg-current opacity-30" />
        </div>
        <span className="truncate font-mono text-[10px] tracking-tight opacity-70">
          studio.demo/{slug}
        </span>
        <span className="w-8" />
      </div>

      {/* Scaled live desktop iframe viewport */}
      <div
        ref={containerRef}
        className={`relative flex-1 overflow-hidden ${
          surfaceTone === "dark" ? "bg-[#0C0D0F]" : "bg-[#FAF9F6]"
        }`}
      >
        {!isLoaded && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 z-10 flex flex-col justify-between p-5 ${
              surfaceTone === "dark" ? "bg-[#111215]" : "bg-[#F5F3EE]"
            }`}
          >
            <div className="space-y-2.5">
              <div
                className={`h-2.5 w-20 animate-pulse rounded-full ${
                  surfaceTone === "dark" ? "bg-white/10" : "bg-stone-300/70"
                }`}
              />
              <div
                className={`h-6 w-2/3 animate-pulse rounded-lg ${
                  surfaceTone === "dark" ? "bg-white/10" : "bg-stone-300/60"
                }`}
              />
              <div
                className={`h-3 w-1/2 animate-pulse rounded-full ${
                  surfaceTone === "dark" ? "bg-white/5" : "bg-stone-200"
                }`}
              />
            </div>
            <div
              className={`h-28 w-full animate-pulse rounded-xl ${
                surfaceTone === "dark" ? "bg-white/5" : "bg-stone-200/80"
              }`}
            />
          </div>
        )}

        {shouldLoad && (
          <iframe
            src={iframeSrc}
            title={`Xem trước thu nhỏ: ${title}`}
            tabIndex={-1}
            aria-hidden="true"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            style={{
              width: `${virtualWidth}px`,
              height: `${virtualHeight}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className={`pointer-events-none block border-0 select-none transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}
