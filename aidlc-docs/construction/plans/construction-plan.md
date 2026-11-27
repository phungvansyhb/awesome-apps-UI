# Construction Phase Plan (`construction-plan.md`)

- **Phase**: `CONSTRUCTION`
- **Cadence**: `Per-Unit (Bolt) Execution`
- **Verification Suite**: `npm run typecheck && npm run lint && npm run build`

---

## Unit Checklist & Functional Specifications

### [ ] `UNIT-01`: Core Shared Utilities & Live Preview Engine
- **Files**:
  - `src/lib/paths.ts`
  - `src/components/ui/SafeImage.tsx`
  - `src/components/preview/PreviewToolbar.tsx`
  - `src/components/preview/PreviewShell.tsx`
  - `src/app/templates/[slug]/page.tsx`
  - `src/app/preview/layout.tsx`
  - `src/app/preview/[slug]/page.tsx`
- **Key Interfaces / Contracts**:
  - `withBasePath(path: string): string` — ghép `NEXT_PUBLIC_BASE_PATH` an toàn cho `iframe src` và asset tĩnh.
  - `ViewportMode = "desktop" | "tablet" | "mobile"` — điều khiển chiều rộng khung preview (`100%`, `768px`, `390px`) và trạng thái `isFullscreen`.
  - `generateStaticParams()` — sinh toàn bộ static routes từ `TEMPLATE_REGISTRY`.
- **Verification Gate**: `npm run typecheck && npm run lint && npm run build`

---

### [ ] `UNIT-02`: Creative Agency Gallery Shell & Scaled Bento Grid
- **Files**:
  - `src/components/gallery/StudioHeader.tsx`
  - `src/components/gallery/AgencyHero.tsx`
  - `src/components/gallery/ScaledPreviewFrame.tsx`
  - `src/components/gallery/TemplateCard.tsx`
  - `src/components/gallery/GalleryShowcase.tsx`
  - `src/components/gallery/ProcessSection.tsx`
  - `src/components/gallery/StudioFooter.tsx`
  - `src/app/page.tsx`
- **Key Interfaces / Contracts**:
  - `ScaledPreviewFrame({ slug, title, surfaceTone })` — dùng `IntersectionObserver` để lazy-mount `<iframe>` và `ResizeObserver` để scale mượt tỷ lệ `1440×900`.
  - `GalleryShowcase` — quản lý state `activeCategory` (`TemplateCategoryId | "all"`) và `searchQuery`, hiển thị lưới Bento bất đối xứng kèm trạng thái rỗng rõ ràng.
- **Verification Gate**: `npm run typecheck && npm run lint && npm run build`

---

### [ ] `UNIT-03`: Flagship Templates Batch 1 — Bán lẻ & Landing Page SaaS
- **Files**:
  - `src/templates/lumiere-noi-that/data.ts`
  - `src/templates/lumiere-noi-that/index.tsx`
  - `src/templates/kova-ai-saas/data.ts`
  - `src/templates/kova-ai-saas/index.tsx`
  - `src/templates/registry.ts`
- **Key Interfaces / Contracts**:
  - `LumiereNoiThatTemplate` — state lọc danh mục sản phẩm, chọn biến thể màu/chất liệu, giỏ hàng Drawer thêm/xóa/tăng giảm số lượng và tính tổng VND.
  - `KovaAiSaasTemplate` — tab minh họa tính năng tương tác, chuyển đổi chu kỳ thanh toán `monthly | yearly`, FAQ accordion.
- **Verification Gate**: `npm run typecheck && npm run lint && npm run build`

---

### [ ] `UNIT-04`: Flagship Templates Batch 2 — Technical Docs & Dashboard Analytics
- **Files**:
  - `src/templates/vietcloud-docs/data.ts`
  - `src/templates/vietcloud-docs/index.tsx`
  - `src/templates/pulse-bi-dashboard/data.ts`
  - `src/templates/pulse-bi-dashboard/index.tsx`
  - `src/templates/registry.ts`
- **Key Interfaces / Contracts**:
  - `VietCloudDocsTemplate` — chọn mục tài liệu ở sidebar, tìm kiếm nhanh mục lục, chuyển ngôn ngữ code `curl | node | python` + Copy clipboard, nút chạy thử API hiển thị JSON response mô phỏng.
  - `PulseBiDashboardTemplate` — bộ lọc `7d | 30d | quarter` cập nhật động KPI và biểu đồ SVG có hover tooltip, lọc & tìm kiếm bảng đơn hàng.
- **Verification Gate**: `npm run typecheck && npm run lint && npm run build`

---

### [ ] `UNIT-05`: Flagship Templates Batch 3 — Portfolio Creative & Dịch vụ / Hospitality
- **Files**:
  - `src/templates/son-ha-studio/data.ts`
  - `src/templates/son-ha-studio/index.tsx`
  - `src/templates/an-nhien-resort/data.ts`
  - `src/templates/an-nhien-resort/index.tsx`
  - `src/templates/registry.ts`
- **Key Interfaces / Contracts**:
  - `SonHaStudioTemplate` — lọc dự án theo lĩnh vực, mở Drawer Case Study chi tiết (thách thức, giải pháp, kết quả, thư viện ảnh).
  - `AnNhienResortTemplate` — chọn hạng phòng/villa, điều chỉnh số đêm & số khách tính tổng dự kiến VND, tab khám phá Ẩm thực / Spa / Trải nghiệm.
- **Verification Gate**: `npm run typecheck && npm run lint && npm run build`

---

### [ ] `UNIT-06`: Polish, Responsive QA & Static Export Verification
- **Files**:
  - Tinh chỉnh responsive/a11y/copy trong `src/` nếu cần
  - `aidlc-docs/operations/release-and-packaging.md`
- **Key Interfaces / Contracts**:
  - Kiểm chứng đầy đủ file xuất tĩnh trong `out/` cho trang chủ + 6 `/templates/*` + 6 `/preview/*`.
  - Kiểm chứng build subpath với `NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI`.
- **Verification Gate**: `npm run typecheck && npm run lint && npm run build`
