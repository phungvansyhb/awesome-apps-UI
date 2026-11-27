"use client";

import { useEffect, useRef, useState } from "react";
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
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [hasError, setHasError] = useState(false);

  // Sync error state if the image already failed before React hydration
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setHasError(true);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-stone-200/70 ${containerClassName}`}
    >
      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-200 to-stone-300/70 p-4 text-center text-stone-500">
          <ImageOff className="h-5 w-5 opacity-70" />
          <span className="max-w-[180px] text-xs font-medium leading-snug">
            {fallbackLabel || alt}
          </span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setHasError(true)}
          className={className}
        />
      )}
    </div>
  );
}
