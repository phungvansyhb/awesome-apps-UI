# Awesome UI Studio (`awesome-apps-UI`)

Thư viện trưng bày các mẫu giao diện website tương tác cao cấp dành cho khách hàng Agency / Freelancer — 100% Tiếng Việt, xây dựng trên **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion** với chế độ **Static Export** (`output: 'export'`).

## Cấu trúc dự án

- [`AGENTS.md`](AGENTS.md) & [`instructions/`](instructions/core-workflow.md) — Bộ quy tắc quản trị AI-DLC.
- [`aidlc-docs/`](aidlc-docs/aidlc-state.md) — Tài liệu vòng đời dự án (Requirements, User Stories, Architecture, UI Design, Units, Construction Plan, State & Audit Log).
- `src/config/site.ts` — Cấu hình tập trung tên thương hiệu & thông tin liên hệ (Hotline/Zalo, Email, Facebook, Địa chỉ).
- `src/templates/` — Registry (`registry.ts`, `types.ts`) và thư mục module độc lập cho từng mẫu giao diện (`src/templates/<slug>/`).
- `src/app/` — Next.js App Router (Gallery trang chủ, trang Live Preview `/templates/[slug]`, route cô lập `/preview/[slug]`).

## Lệnh phát triển & kiểm tra

```bash
npm install
npm run dev          # Chạy môi trường phát triển
npm run typecheck    # Kiểm tra kiểu TypeScript
npm run lint         # Kiểm tra ESLint
npm run build        # Build static export ra thư mục out/
```

## Triển khai Static Hosting

- **Cloudflare Pages**: Build command `npm run build`, Output directory `out`.
- **GitHub Pages (subpath)**: Đặt biến môi trường `NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI` trước khi chạy `npm run build`.
