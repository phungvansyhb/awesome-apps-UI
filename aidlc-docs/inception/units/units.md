# Implementation Units (`units.md`)

- **Phase**: `INCEPTION`
- **Stage**: `Stage 1.5 — Units Generation`

Các hạng mục xây dựng được chia thành **6 Units (Bolts)** độc lập, có thể kiểm chứng tuần tự sau khi **Baseline Project Scaffold** đã được khởi tạo:

---

## `UNIT-01`: Core Shared Utilities & Live Preview Engine
- **Scope**:
  - Tạo helper `src/lib/paths.ts` (`withBasePath`) và component `src/components/ui/SafeImage.tsx` (ảnh Unsplash có loading fade & fallback).
  - Xây dựng bộ khung xem mẫu tương tác: `PreviewShell`, `PreviewToolbar` (Quay lại, Desktop/Tablet/Mobile, Prev/Next, Fullscreen/Mở tab mới), và `ViewportCanvas`.
  - Tạo 2 dynamic routes hỗ trợ Static Export (`generateStaticParams` + `generateMetadata`):
    - `src/app/templates/[slug]/page.tsx`
    - `src/app/preview/[slug]/page.tsx`
    - `src/app/preview/layout.tsx` (cô lập hoàn toàn phần preview).
- **Target Files**:
  - `src/lib/paths.ts`
  - `src/components/ui/SafeImage.tsx`
  - `src/components/preview/PreviewShell.tsx`
  - `src/components/preview/PreviewToolbar.tsx`
  - `src/app/templates/[slug]/page.tsx`
  - `src/app/preview/layout.tsx`
  - `src/app/preview/[slug]/page.tsx`
- **Dependencies**: Baseline Scaffold (`package.json`, `src/templates/registry.ts`).
- **Verification Criteria**: `npm run typecheck && npm run lint && npm run build` thành công.

---

## `UNIT-02`: Creative Agency Gallery Shell & Scaled Bento Grid
- **Scope**:
  - Xây dựng trang chủ Creative Agency 100% Tiếng Việt (`src/app/page.tsx`) sử dụng `siteConfig` (`src/config/site.ts`).
  - Các thành phần: `StudioHeader` (thương hiệu + điều hướng + nút liên hệ nhanh), `AgencyHero` (typography cỡ lớn + hiệu ứng reveal), `TemplateFilterBar` (lọc 6 danh mục + tìm kiếm), `ScaledPreviewFrame` (`IntersectionObserver` + `ResizeObserver` scale `1440×900`), `BentoGalleryGrid`, `ProcessSection` (quy trình làm việc ngắn gọn tăng uy tín Agency), và `StudioFooter` (đầy đủ Hotline/Zalo, Email, Facebook, Địa chỉ).
- **Target Files**:
  - `src/components/gallery/StudioHeader.tsx`
  - `src/components/gallery/AgencyHero.tsx`
  - `src/components/gallery/ScaledPreviewFrame.tsx`
  - `src/components/gallery/TemplateCard.tsx`
  - `src/components/gallery/GalleryShowcase.tsx`
  - `src/components/gallery/ProcessSection.tsx`
  - `src/components/gallery/StudioFooter.tsx`
  - `src/app/page.tsx`
- **Dependencies**: `UNIT-01`.
- **Verification Criteria**: Trang chủ render sắc nét trên Desktop/Mobile, bộ lọc & tìm kiếm hoạt động mượt, `npm run typecheck && npm run lint && npm run build` pass.

---

## `UNIT-03`: Flagship Templates Batch 1 — Bán lẻ & Landing Page SaaS
- **Scope**:
  - **`lumiere-noi-that`** (Bán lẻ / E-commerce): Cửa hàng nội thất tối giản cao cấp với bộ lọc danh mục, chọn màu/chất liệu, xem nhanh sản phẩm và giỏ hàng Drawer cộng/trừ số lượng tính tổng VND.
  - **`kova-ai-saas`** (Landing Page SaaS): Nền tảng AI tự động hóa cho doanh nghiệp Việt với Hero tối sang trọng, tab quy trình tương tác, công tắc giá Tháng/Năm và FAQ accordion.
  - Đăng ký cả 2 mẫu vào `src/templates/registry.ts`.
- **Target Files**:
  - `src/templates/lumiere-noi-that/data.ts`
  - `src/templates/lumiere-noi-that/index.tsx`
  - `src/templates/kova-ai-saas/data.ts`
  - `src/templates/kova-ai-saas/index.tsx`
  - `src/templates/registry.ts`
- **Dependencies**: `UNIT-01`, `UNIT-02`.
- **Verification Criteria**: Cả 2 mẫu render chuẩn trong `/preview/[slug]`, `/templates/[slug]` và Scaled Bento Card; static build xuất đầy đủ 2 cặp route.

---

## `UNIT-04`: Flagship Templates Batch 2 — Technical Docs & Dashboard Analytics
- **Scope**:
  - **`vietcloud-docs`** (Technical / Dev Docs): Cổng tài liệu API & Cloud với sidebar mục lục chuyển trang/section, tìm kiếm nhanh mục tài liệu, hộp code chuyển đổi `cURL`/`Node.js`/`Python` + nút Copy code, và nút "Chạy thử API" hiển thị phản hồi JSON mô phỏng.
  - **`pulse-bi-dashboard`** (Dashboard Analytics): Bảng điều khiển doanh thu & vận hành với bộ lọc `7 ngày` / `30 ngày` / `Quý này` cập nhật động KPI & biểu đồ cột/vùng SVG có tooltip, kèm bảng đơn hàng lọc theo trạng thái và tìm kiếm.
  - Đăng ký cả 2 mẫu vào `src/templates/registry.ts`.
- **Target Files**:
  - `src/templates/vietcloud-docs/data.ts`
  - `src/templates/vietcloud-docs/index.tsx`
  - `src/templates/pulse-bi-dashboard/data.ts`
  - `src/templates/pulse-bi-dashboard/index.tsx`
  - `src/templates/registry.ts`
- **Dependencies**: `UNIT-01`, `UNIT-02`.
- **Verification Criteria**: Cả 2 mẫu tương tác chính xác ở cả Desktop/Tablet/Mobile; `npm run typecheck && npm run lint && npm run build` pass.

---

## `UNIT-05`: Flagship Templates Batch 3 — Portfolio Creative & Dịch vụ / Hospitality
- **Scope**:
  - **`son-ha-studio`** (Portfolio Creative): Hồ sơ năng lực Creative & Architecture Studio với bố cục editorial đậm chất nghệ thuật, lọc dự án theo lĩnh vực và Drawer xem chi tiết Case Study.
  - **`an-nhien-resort`** (Dịch vụ / Hospitality): Khu nghỉ dưỡng & Spa cao cấp với lựa chọn hạng phòng/villa, bộ chọn số đêm & số khách tự tính chi phí dự kiến VND, và bộ sưu tập trải nghiệm ẩm thực/spa.
  - Đăng ký cả 2 mẫu vào `src/templates/registry.ts` (hoàn thiện đủ 6 mẫu flagship).
- **Target Files**:
  - `src/templates/son-ha-studio/data.ts`
  - `src/templates/son-ha-studio/index.tsx`
  - `src/templates/an-nhien-resort/data.ts`
  - `src/templates/an-nhien-resort/index.tsx`
  - `src/templates/registry.ts`
- **Dependencies**: `UNIT-01`, `UNIT-02`.
- **Verification Criteria**: Đủ 6 mẫu trên lưới Bento, Prev/Next xoay vòng mượt qua cả 6 mẫu, `npm run typecheck && npm run lint && npm run build` pass.

---

## `UNIT-06`: Polish, Responsive QA & Static Export Verification
- **Scope**:
  - Kiểm tra toàn diện responsive Desktop / Tablet / Mobile cho trang chủ Gallery và tất cả 6 mẫu flagship.
  - Kiểm tra build static export cả ở chế độ root domain (`npm run build`) lẫn chế độ subpath (`NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI npm run build`).
  - Xác minh nội dung 100% tiếng Việt tự nhiên, không lỗi console, không vỡ ảnh, và cập nhật tài liệu bàn giao trong `aidlc-docs/operations/release-and-packaging.md`.
- **Target Files**:
  - Tinh chỉnh nhỏ các file trong `src/` nếu phát hiện lỗi QA
  - `aidlc-docs/operations/release-and-packaging.md`
- **Dependencies**: `UNIT-01` through `UNIT-05`.
- **Verification Criteria**: `npm run typecheck && npm run lint && npm run build` pass 100%, thư mục `out/` chứa đầy đủ HTML cho trang chủ + 6 `/templates/*` + 6 `/preview/*`.
