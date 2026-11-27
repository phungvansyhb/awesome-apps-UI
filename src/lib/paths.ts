const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");

/**
 * Prefixes an internal path with NEXT_PUBLIC_BASE_PATH when configured.
 * Necessary for raw HTML attributes such as <iframe src> and <a target="_blank">
 * that do not automatically inherit Next.js basePath.
 */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!BASE_PATH) {
    return normalized;
  }
  return `${BASE_PATH}${normalized}`;
}

/**
 * Formats an integer amount into Vietnamese Dong (VND) currency notation.
 */
export function formatVnd(amount: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(amount)} ₫`;
}
