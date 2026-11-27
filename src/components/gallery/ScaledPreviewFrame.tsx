"use client";

import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/paths";

interface ScaledPreviewFrameProps {
  slug: string;
  title: string;
  surfaceTone: "light" | "dark";
}

const VIRTUAL_WIDTH = 1440;
const VIRTUAL_HEIGHT = 1140;

export function ScaledPreviewFrame({
  slug,
  title,
  surfaceTone,
}: ScaledPreviewFrameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(0.36);
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

  // Dynamically compute exact desktop-to-card scale ratio
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const width = node.clientWidth;
      if (width > 0) {
        setScale(width / VIRTUAL_WIDTH);
      }
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, []);

  const iframeSrc = withBasePath(`/preview/${slug}/`);

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

      {/* Scaled live iframe viewport */}
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
              width: `${VIRTUAL_WIDTH}px`,
              height: `${VIRTUAL_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className={`pointer-events-none block select-none border-0 transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}
