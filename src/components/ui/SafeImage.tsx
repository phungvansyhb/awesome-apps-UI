"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = "h-full w-full object-cover",
  containerClassName = "",
  fallbackLabel,
  priority = false,
}: SafeImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <div
      className={`relative overflow-hidden bg-stone-200/70 ${containerClassName}`}
    >
      {status === "loading" && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-stone-200/80 via-stone-100 to-stone-200/60"
        />
      )}

      {status === "error" ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-200 to-stone-300/70 p-4 text-center text-stone-500">
          <ImageOff className="h-5 w-5 opacity-70" />
          <span className="max-w-[180px] text-xs font-medium leading-snug">
            {fallbackLabel || alt}
          </span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`${className} transition-opacity duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
