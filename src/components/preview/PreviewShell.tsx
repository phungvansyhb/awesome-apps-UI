"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Minimize2, RotateCw } from "lucide-react";
import { withBasePath } from "@/lib/paths";
import { PreviewToolbar, type ViewportMode } from "./PreviewToolbar";

export interface PreviewShellProps {
  slug: string;
  name: string;
  categoryLabel: string;
  prevTemplate: { slug: string; name: string } | null;
  nextTemplate: { slug: string; name: string } | null;
}

const VIEWPORT_WIDTHS: Record<ViewportMode, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "390px",
};

export function PreviewShell({
  slug,
  name,
  categoryLabel,
  prevTemplate,
  nextTemplate,
}: PreviewShellProps) {
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const iframeSrc = withBasePath(`/preview/${slug}/`);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const isFramedDevice = !isFullscreen && viewport !== "desktop";

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#18181B]">
      {!isFullscreen && (
        <PreviewToolbar
          slug={slug}
          name={name}
          categoryLabel={categoryLabel}
          viewport={viewport}
          onViewportChange={setViewport}
          onEnterFullscreen={() => setIsFullscreen(true)}
          prevTemplate={prevTemplate}
          nextTemplate={nextTemplate}
        />
      )}

      <main
        className={`relative flex flex-1 items-center justify-center overflow-hidden ${
          isFramedDevice ? "p-4 sm:p-6" : "p-0"
        }`}
      >
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: isFullscreen ? "100%" : VIEWPORT_WIDTHS[viewport],
            maxWidth: "100%",
          }}
          className={`relative h-full overflow-hidden bg-white ${
            isFramedDevice
              ? "rounded-[24px] border border-white/15 shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
              : ""
          }`}
        >
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#FAF9F6] text-stone-600">
              <RotateCw className="h-5 w-5 animate-spin text-stone-900" />
              <p className="text-xs font-medium tracking-wide">
                Đang tải bản xem trước {name}...
              </p>
            </div>
          )}

          <iframe
            key={slug}
            src={iframeSrc}
            title={`Bản xem trước trực tiếp: ${name}`}
            onLoad={() => setIsLoading(false)}
            className="h-full w-full border-0 bg-white"
          />
        </motion.div>

        {isFullscreen && (
          <button
            id="preview-exit-fullscreen-btn"
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#111111]/90 px-4 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md transition-transform hover:scale-[1.03] hover:bg-[#111111]"
          >
            <Minimize2 className="h-3.5 w-3.5" />
            <span>Hiện thanh công cụ</span>
          </button>
        )}
      </main>
    </div>
  );
}
