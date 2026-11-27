# AI-DLC Append-Only Audit Log (`audit.md`)

> **Rule**: This is an append-only audit trail. Every user input, clarification, approval, and AI action must be logged here with an ISO 8601 timestamp at the end of every prompt. Never overwrite or summarize away historical entries.

---

## [2026-11-27T02:57:06Z] — Prompt 1: `/grill-me` Requirements Discovery & Design Alignment
- **Phase / Stage**: `INCEPTION / Stage 1.2: Requirements Analysis (Interview)`
- **User Input**: `"/grill-me tôi muốn xây dựng một ứng dụng chứa các mẫu template giao diện đẹp, nổi bật theo các dạng website ví dụ như ngành bán lẻ , landing page , technical , dashboard , portfolio , ..."`
- **Clarifications / Decisions**:
  1. **Mục đích cốt lõi**: Bộ sưu tập mẫu trưng bày trực quan cho khách hàng (Agency/Freelancer).
  2. **Luồng liên hệ**: Trưng bày thuần túy kèm thông tin liên hệ chung ở Header/Footer (không cần modal đặt làm/backend).
  3. **Trải nghiệm xem mẫu**: Mở Live Preview tương tác ngay lập tức kèm toolbar tối giản (Desktop/Tablet/Mobile, Prev/Next, Fullscreen).
  4. **Kiến trúc & Tech Stack**: Next.js (App Router) + TypeScript + Tailwind CSS, mỗi mẫu cô lập qua iframe.
  5. **Quy mô MVP**: 6 mẫu flagship có tương tác thật (Bán lẻ, Landing Page SaaS, Technical/Dev Docs, Dashboard Analytics, Portfolio Creative, Dịch vụ/Hospitality).
  6. **Ngôn ngữ**: 100% Tiếng Việt (cả vỏ ứng dụng Gallery lẫn nội dung 6 mẫu).
  7. **Phong cách Gallery**: Creative Agency nổi bật (Hero cỡ lớn, Bento/Editorial, chuyển động mượt).
  8. **Nguồn hình ảnh**: Ảnh chụp thật từ Unsplash qua URL.
  9. **Thumbnail trên trang chủ**: Live Preview thu nhỏ (Scaled Iframe có lazy-load).
  10. **Thương hiệu & Cấu hình**: Mặc định "Awesome UI Studio", tập trung liên hệ trong `src/config/site.ts`.
  11. **Mục tiêu Deploy**: Static Export (`output: 'export'`) cho Cloudflare Pages / GitHub Pages.
- **Artifacts & Files Updated**: Không tạo file code trong phiên phỏng vấn; tổng hợp bản chốt thiết kế chờ lệnh khởi tạo.
- **Verification & Gate Status**: Hoàn tất làm rõ toàn bộ nhánh thiết kế.

---

## [2026-11-27T03:05:00Z] — Prompt 2: Initialize Project Scaffold & Standard AI-DLC Construction Files
- **Phase / Stage**: `INCEPTION / Stage 1.1 → Stage 1.6 (Workspace Scaffold + Full Inception & AI-DLC Governance Setup)`
- **User Input**: `"tạo khung cho dự án và dùng /init_AIDLC_contructions tạo contructions cho dự án"`
- **Clarifications / Decisions**:
  - **Workspace Classification**: `Greenfield` (`Next.js 16.4.6 + React 19 + TypeScript 5.8 + Tailwind CSS v4 + Framer Motion 14 + Lucide Icons`, Static Export `output: 'export'`).
  - **Governance Standard**: Khởi tạo đầy đủ chuẩn `init_AIDLC_contructions` (`AGENTS.md`, `instructions/`, `aidlc-docs/`) tích hợp toàn bộ 11 quyết định từ `/grill-me`.
  - **Gate Discipline**: Chỉ tạo khung nền tối giản (`src/config/site.ts`, `src/templates/types.ts`, `src/templates/registry.ts`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`) và giữ **Gate 1 Sign-Off** ở trạng thái chờ phê duyệt trước khi triển khai `UNIT-01` → `UNIT-06`.
- **Artifacts & Files Updated**:
  - Khung dự án: `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`, `README.md`, `src/config/site.ts`, `src/templates/types.ts`, `src/templates/registry.ts`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`.
  - AI-DLC Steering Rules: [`AGENTS.md`](../AGENTS.md), [`instructions/core-workflow.md`](../instructions/core-workflow.md), [`instructions/common/session-and-audit.md`](../instructions/common/session-and-audit.md), [`instructions/inception/inception-rules.md`](../instructions/inception/inception-rules.md), [`instructions/construction/construction-rules.md`](../instructions/construction/construction-rules.md), [`instructions/operations/operations-rules.md`](../instructions/operations/operations-rules.md).
  - AI-DLC Living Artifacts: [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md), [`aidlc-docs/inception/requirements/requirements.md`](inception/requirements/requirements.md), [`aidlc-docs/inception/user-stories/user-stories.md`](inception/user-stories/user-stories.md), [`aidlc-docs/inception/application-design/architecture.md`](inception/application-design/architecture.md), [`aidlc-docs/inception/application-design/ui-design.md`](inception/application-design/ui-design.md), [`aidlc-docs/inception/units/units.md`](inception/units/units.md), [`aidlc-docs/inception/plans/execution-plan.md`](inception/plans/execution-plan.md), [`aidlc-docs/construction/plans/construction-plan.md`](construction/plans/construction-plan.md), [`aidlc-docs/operations/release-and-packaging.md`](operations/release-and-packaging.md).
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh `out/index.html` & `out/404.html` thành công); kiểm tra liên kết tương đối sạch 100%; đang chờ **Gate 1 Sign-Off** để bắt đầu Construction (`UNIT-01` → `UNIT-06`).

---

## [2026-11-27T03:06:43Z] — Prompt 3: Initial Git Commit & Push to Remote (`origin/main`)
- **Phase / Stage**: `INCEPTION / Stage 1.6 (Version Control Checkpoint prior to Gate 1 Sign-Off)`
- **User Input**: `"commit và push lên git"`
- **Clarifications / Decisions**: Commit toàn bộ khung dự án Next.js Static Export và bộ tài liệu AI-DLC (`AGENTS.md`, `instructions/`, `aidlc-docs/`) lên nhánh `main` của `origin`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push ban đầu.
- **Verification & Gate Status**: Đang thực hiện `git add`, `git commit` và `git push -u origin main`; vẫn giữ nguyên trạng thái chờ **Gate 1 Sign-Off**.

---

## [2026-11-27T03:07:45Z] — Prompt 4: Explain UNIT-01 Scope
- **Phase / Stage**: `INCEPTION / Gate 1 Review (Q&A)`
- **User Input**: `"UNIT 01  là gì"`
- **Clarifications / Decisions**: Giải thích chi tiết phạm vi, danh sách file và mục tiêu kiểm chứng của `UNIT-01: Core Shared Utilities & Live Preview Engine`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận câu hỏi làm rõ về `UNIT-01`.
- **Verification & Gate Status**: Không sửa mã nguồn ứng dụng; vẫn giữ nguyên trạng thái chờ **Gate 1 Sign-Off**.

---

## [2026-11-27T03:17:00Z] — Prompt 5: Execute Gate 1 Approved Construction (`UNIT-01`, `UNIT-02`, `UNIT-03`, `UNIT-06`; Defer `UNIT-04` & `UNIT-05`)
- **Phase / Stage**: `CONSTRUCTION / UNIT-01 → UNIT-03 + UNIT-06 (Scoped MVP Release)`
- **User Input**: `"Tạm thời bỏ qua Unit 04 và và 05, xử lý từ Unit 01 đến 06 cho tôi"`
- **Clarifications / Decisions**:
  - Phê duyệt **Gate 1 Sign-Off** với phạm vi triển khai ngay `UNIT-01`, `UNIT-02`, `UNIT-03`, `UNIT-06`.
  - Tạm hoãn `UNIT-04` (Technical Docs & Dashboard Analytics) và `UNIT-05` (Portfolio Creative & Dịch vụ / Hospitality).
- **Artifacts & Files Updated**:
  - **`UNIT-01`**: `src/lib/paths.ts`, `src/components/ui/SafeImage.tsx`, `src/components/preview/PreviewToolbar.tsx`, `src/components/preview/PreviewShell.tsx`, `src/app/templates/[slug]/page.tsx`, `src/app/preview/layout.tsx`, `src/app/preview/[slug]/page.tsx`.
  - **`UNIT-02`**: `src/components/gallery/StudioHeader.tsx`, `src/components/gallery/AgencyHero.tsx`, `src/components/gallery/ScaledPreviewFrame.tsx`, `src/components/gallery/TemplateCard.tsx`, `src/components/gallery/GalleryShowcase.tsx`, `src/components/gallery/ProcessSection.tsx`, `src/components/gallery/StudioFooter.tsx`, `src/app/page.tsx`.
  - **`UNIT-03`**: `src/templates/lumiere-noi-that/data.ts`, `src/templates/lumiere-noi-that/index.tsx`, `src/templates/kova-ai-saas/data.ts`, `src/templates/kova-ai-saas/index.tsx`, `src/templates/registry.ts`.
  - **`UNIT-06` & AI-DLC State**: `src/components/gallery/AgencyHero.tsx` (polish), [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/construction/plans/construction-plan.md`](construction/plans/construction-plan.md), [`aidlc-docs/operations/release-and-packaging.md`](operations/release-and-packaging.md), [`aidlc-docs/audit.md`](audit.md).
- **Verification & Gate Status**:
  - `npm run typecheck && npm run lint && npm run build`: **PASS** (0 lỗi, 7/7 trang tĩnh xuất ra `out/`).
  - Subpath static export (`NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI npm run build`): **PASS** (xác nhận iframe src `/awesome-apps-UI/preview/...` chính xác).
  - Kiểm tra ảnh Unsplash (`lumiere-noi-that`): **8/8 trả mã HTTP 200 OK**.
  - Kiểm tra SEO `<title>` tiếng Việt trên `out/index.html`, `out/templates/lumiere-noi-that/index.html`, `out/templates/kova-ai-saas/index.html`: **PASS**.

---

## [2026-11-27T03:21:27Z] — Prompt 6: Commit & Push Scoped Construction Release (`UNIT-01`, `UNIT-02`, `UNIT-03`, `UNIT-06`)
- **Phase / Stage**: `CONSTRUCTION → OPERATIONS / Version Control Checkpoint`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit toàn bộ mã nguồn hoàn chỉnh của `UNIT-01`, `UNIT-02`, `UNIT-03`, `UNIT-06` cùng tài liệu AI-DLC cập nhật và đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push bản phát hành MVP đầu tiên (2 mẫu flagship).
- **Verification & Gate Status**: Đã qua đầy đủ `npm run typecheck && npm run lint && npm run build` (root + subpath); tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T03:38:24Z] — Prompt 7: Brainstorm Vietnamese Brand Names for the Showcase Website
- **Phase / Stage**: `OPERATIONS / Branding & Copy Consultation`
- **User Input**: `"nghĩ cho tôi một cái tên tiếng việt cho web"`
- **Clarifications / Decisions**: Đề xuất danh sách tên thương hiệu tiếng Việt phân theo 3 sắc thái (Creative Studio/Editorial, Tối giản/Sang trọng, Trực diện/Tương tác) kèm Top 3 gợi ý phù hợp nhất với phong cách hiện tại; chờ người dùng chọn để cập nhật vào `src/config/site.ts`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận phiên gợi ý đặt tên thương hiệu tiếng Việt.
- **Verification & Gate Status**: Không thay đổi mã nguồn ứng dụng; chờ người dùng chọn tên để áp dụng nếu muốn.

---

## [2026-11-27T03:41:06Z] — Prompt 8: Cloudflare Pages Deployment & Environment Configuration Guidance
- **Phase / Stage**: `OPERATIONS / Stage 3.2: Deployment Setup (Cloudflare Pages)`
- **User Input**: `"ok tôi sẽ đặt tên trên cloudfare là xuong-giao-dien.pages.dev , tôi cso cần setup env gì ko"`
- **Clarifications / Decisions**:
  - Người dùng chốt tên miền Cloudflare Pages: `xuong-giao-dien.pages.dev` (root domain).
  - Hướng dẫn cấu hình Cloudflare Pages: không cần đặt `NEXT_PUBLIC_BASE_PATH` (mặc định rỗng cho root domain), khuyến nghị đặt `NODE_VERSION=22` để tương thích Next.js 16, Build command `npm run build`, Output directory `out`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận hướng dẫn cấu hình môi trường Cloudflare Pages.
- **Verification & Gate Status**: Không thay đổi mã nguồn ứng dụng; chờ xác nhận nếu người dùng muốn đổi tên thương hiệu trong code sang **Xưởng Giao Diện**.

---

## [2026-11-27T04:08:12Z] — Prompt 9: Design Analysis of Reference Site (`shadcnstudio.com`)
- **Phase / Stage**: `OPERATIONS / Design Benchmarking & Inspiration`
- **User Input**: `"[Shadcn Studio - Shadcn UI Components, Blocks & Templates](https://shadcnstudio.com/) phong cách thiết kế ở trang web này là như thế nào , có những điểm gì nổi bật"`
- **Clarifications / Decisions**: Truy cập và phân tích trực tiếp trang `https://shadcnstudio.com/` về phong cách thiết kế (Modern Modular SaaS / DevTool Minimalism), các điểm nổi bật về UX/trưng bày và rút ra gợi ý chọn lọc phù hợp cho `xuong-giao-dien.pages.dev`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận phân tích trang tham khảo `shadcnstudio.com`.
- **Verification & Gate Status**: Không sửa mã nguồn ứng dụng; chỉ cung cấp phân tích thiết kế.

---

## [2026-11-27T04:14:00Z] — Prompt 10: Execute `UNIT-07` — Brand Refresh ("Xưởng Giao Diện") & Shadcn-Studio-Inspired Showcase Upgrades
- **Phase / Stage**: `CONSTRUCTION / UNIT-07: Brand Refresh & Showcase UX Enhancements`
- **User Input**: `"áp dụng vào trang của tôi"`
- **Clarifications / Decisions**:
  - Đổi tên thương hiệu toàn trang sang **Xưởng Giao Diện** (đồng bộ với `xuong-giao-dien.pages.dev`).
  - Áp dụng có chọn lọc các điểm nổi bật từ `shadcnstudio.com`: (1) Chế độ **Sáng / Tối** (Light/Dark Mode Toggle kèm script chống nháy theme), (2) **Băng chuyền trưng bày 2 tầng** (Dual-Row Showcase Marquee, rê chuột tạm dừng, bấm vào xem Live Demo), (3) **Lưới Bento kể chuyện tính năng** có bộ đổi màu thương hiệu tương tác trực tiếp, (4) **Khối Cảm nhận khách hàng (Wall of Love)** & cụm Social Proof ngay Hero.
- **Artifacts & Files Updated**:
  - `src/config/site.ts`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`.
  - `src/components/gallery/ThemeToggle.tsx`, `ShowcaseMarquee.tsx`, `BentoHighlightsSection.tsx`, `WallOfLoveSection.tsx`.
  - `src/components/gallery/StudioHeader.tsx`, `AgencyHero.tsx`, `GalleryShowcase.tsx`, `TemplateCard.tsx`.
  - `src/templates/lumiere-noi-that/index.tsx`, `src/templates/kova-ai-saas/index.tsx`.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/construction/plans/construction-plan.md`](construction/plans/construction-plan.md), [`aidlc-docs/audit.md`](audit.md).
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, 7/7 trang xuất tĩnh với thương hiệu **Xưởng Giao Diện**).

---

## [2026-11-27T04:16:57Z] — Prompt 11: Commit & Push `UNIT-07` ("Xưởng Giao Diện" Brand Refresh & Showcase Upgrades)
- **Phase / Stage**: `CONSTRUCTION → OPERATIONS / Version Control Checkpoint`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit toàn bộ mã nguồn `UNIT-07` và đẩy lên nhánh `main` của `origin` để kích hoạt Cloudflare Pages auto-deploy cho `xuong-giao-dien.pages.dev`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push cho `UNIT-07`.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build`; tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T04:24:30Z] — Prompt 12: Fix Showcase Marquee Animation & Seamless Looping
- **Phase / Stage**: `OPERATIONS / Hotfix (ShowcaseMarquee)`
- **User Input**: `"sao phần marque không thấy chạy nhỉ ?"`
- **Clarifications / Decisions**:
  - Xác định nguyên nhân: quy tắc `@media (prefers-reduced-motion: reduce) { animation: none; }` khiến băng chuyền bị đứng yên hoàn toàn trên các máy bật tiết kiệm pin / tắt hiệu ứng OS, đồng thời độ rộng 2 bản sao hơi ngắn trên màn hình lớn và tốc độ `38s/42s` quá chậm.
  - Sửa đổi: chuyển sang làm chậm mượt (`70s`/`75s`) thay vì `animation: none` ở chế độ reduced-motion, nhân đôi mỗi nửa thành 2 bản sao (`gap-4 pr-4`) để lặp `-50%` liền mạch không giật trên cả màn hình ultrawide, tăng tốc độ lên `26s`/`30s` kèm `will-change: transform`.
- **Artifacts & Files Updated**:
  - `src/app/globals.css` — Cập nhật keyframes `xgd-marquee-left` / `xgd-marquee-right`, tốc độ và fallback `prefers-reduced-motion`.
  - `src/components/gallery/ShowcaseMarquee.tsx` — Tách 2 nửa giống hệt nhau (`halfSet = [...blocks, ...blocks]`) để vòng lặp vô tận mượt 100%.
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận bản sửa lỗi Marquee.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (đã xác nhận keyframes `xgd-marquee-*` trong bundle CSS xuất tĩnh).

---

## [2026-11-27T04:26:59Z] — Prompt 13: Commit & Push Showcase Marquee Hotfix
- **Phase / Stage**: `OPERATIONS / Hotfix Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit bản sửa lỗi Marquee (`src/app/globals.css`, `src/components/gallery/ShowcaseMarquee.tsx`) và đẩy lên `origin/main` để Cloudflare Pages tự động cập nhật `xuong-giao-dien.pages.dev`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push bản sửa lỗi Marquee.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build`; tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T04:34:20Z] — Prompt 14: Fix SSR/SSG `onLoad` Hydration Race Causing Invisible Template Images (`SafeImage` & `PreviewShell`)
- **Phase / Stage**: `OPERATIONS / Hotfix (SafeImage & PreviewShell)`
- **User Input**: `"phần ảnh ở các template không xem được , khi bấm xem chi tiết ở template thì lại xem được , kiểm tra xem đang bị lỗi gì"`
- **Clarifications / Decisions**:
  - **Root Cause**: Trang `/preview/[slug]/` được xuất tĩnh (SSG) nên trình duyệt tải xong thẻ `<img>` (hoặc lấy từ cache) *trước* khi React kịp hydrate và gắn `onLoad`. Vì `SafeImage` khởi tạo `status = "loading"` và ẩn ảnh bằng `opacity-0` + lớp phủ skeleton, sự kiện `onLoad` không bao giờ bắn lại, khiến toàn bộ ảnh tĩnh trên trang bị kẹt ẩn mãi mãi; trong khi modal "Xem chi tiết" mount hoàn toàn ở client sau khi hydrate nên `onLoad` bắn bình thường.
  - **Fix**: Bỏ ẩn `opacity-0` mặc định trong `SafeImage.tsx` để ảnh hiển thị ngay từ HTML tĩnh, chỉ chuyển sang fallback `ImageOff` khi `onError` hoặc kiểm tra `img.complete && img.naturalWidth === 0` sau hydration. Đồng thời bổ sung kiểm tra `contentDocument.readyState` qua `requestAnimationFrame` trong `PreviewShell.tsx` để phòng ngừa race condition tương tự cho khung `<iframe>`.
- **Artifacts & Files Updated**:
  - `src/components/ui/SafeImage.tsx` — Sửa triệt để lỗi race condition `onLoad` khi xuất tĩnh SSG.
  - `src/components/preview/PreviewShell.tsx` — Bổ sung kiểm tra `iframe.contentDocument.readyState` sau hydration.
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận phân tích nguyên nhân và bản sửa lỗi.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (xác nhận thẻ `<img>` trong `out/preview/lumiere-noi-that/index.html` không còn `opacity-0`).

---

## [2026-11-27T06:05:48Z] — Prompt 15: Commit & Push SafeImage & PreviewShell Hydration Hotfix
- **Phase / Stage**: `OPERATIONS / Hotfix Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit bản sửa lỗi hiển thị ảnh trên trang xuất tĩnh (`src/components/ui/SafeImage.tsx`, `src/components/preview/PreviewShell.tsx`) và đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push bản sửa lỗi `SafeImage` & `PreviewShell`.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build`; tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T06:12:20Z] — Prompt 16: Upgrade Feedback Section to Vertical Scrolling Columns & Real Portrait Avatars
- **Phase / Stage**: `CONSTRUCTION / UX Polish (WallOfLove & AgencyHero)`
- **User Input**: `"Mục feed back làm layout column theo chiều dọc đi và lấy ảnh avatar người chứ ko dùng mặc định"`
- **Clarifications / Decisions**:
  - Chuyển `WallOfLoveSection` sang bố cục **3 cột dọc chuyển động ngược chiều** (Cột 1 đi lên, Cột 2 đi xuống, Cột 3 đi lên — rê chuột tự tạm dừng, có mask mờ mềm cạnh trên/dưới) với 9 đánh giá khách hàng.
  - Thay toàn bộ avatar chữ cái mặc định (cả 9 thẻ trong `WallOfLoveSection` và 4 avatar Social Proof trong `AgencyHero`) bằng ảnh chân dung người thật từ Unsplash (đã kiểm chứng 9/9 trả mã `200 OK`).
- **Artifacts & Files Updated**:
  - `src/app/globals.css` — Bổ sung keyframes `xgd-marquee-up` / `xgd-marquee-down`, `.marquee-mask-vertical`, `.marquee-col-up` / `.marquee-col-down`.
  - `src/components/gallery/WallOfLoveSection.tsx` — Thiết kế lại thành 3 cột dọc có ảnh chân dung thật qua `SafeImage`.
  - `src/components/gallery/AgencyHero.tsx` — Thay 4 vòng tròn chữ cái đầu bằng ảnh chân dung thật.
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận nâng cấp mục đánh giá khách hàng.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, 9/9 URL ảnh chân dung trả `200 OK`).

---

## [2026-11-27T06:16:30Z] — Prompt 17: Add Smooth Count-Up Animation to Hero Section Numbers
- **Phase / Stage**: `CONSTRUCTION / UX Polish (AgencyHero AnimatedCounter)`
- **User Input**: `"Phần các còn số ở phần hero sections , làm hiệu ứng chạy đi"`
- **Clarifications / Decisions**:
  - Thêm component `AnimatedCounter` dùng `framer-motion` (`animate` + `useInView` + `tabular-nums`) chạy đếm số mượt mà từ `0` lên giá trị thực cho toàn bộ chỉ số ở Hero (`02` mẫu flagship, `100%` tiếng Việt, `3` khung thiết bị, và `40+` thương hiệu tin chọn).
- **Artifacts & Files Updated**:
  - `src/components/gallery/AgencyHero.tsx` — Tích hợp `AnimatedCounter` cho tất cả các con số trên Hero.
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận bổ sung hiệu ứng chạy số Hero.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi).

---

## [2026-11-27T06:19:30Z] — Prompt 18: Execute `UNIT-08` — Technical SEO (`sitemap.xml`, `robots.txt`, `manifest`, JSON-LD, Canonicals) & Branded Error Pages (`404`, `error`, `global-error`, `/500/`)
- **Phase / Stage**: `CONSTRUCTION / UNIT-08: Technical SEO & Error Pages`
- **User Input**: `"thêm sitemap , robot.txt , not found page , 500 page ,.. cho web để đảm bảo SEO"`
- **Clarifications / Decisions**:
  - Cấu hình toàn bộ chuẩn Technical SEO tương thích Static Export (`force-static`) cho tên miền `https://xuong-giao-dien.pages.dev` (có thể ghi đè qua `NEXT_PUBLIC_SITE_URL`).
  - Loại trừ `/preview/` khỏi `sitemap.xml` và gắn `Disallow: /preview/` + `noindex, nofollow` để tránh trùng lặp nội dung trên Google; giữ `/templates/[slug]/` là trang canonical chính.
  - Tạo đầy đủ trang lỗi theo nhận diện Sáng/Tối: `not-found.tsx` (404), `error.tsx`, `global-error.tsx`, và trang tĩnh `/500/`.
- **Artifacts & Files Updated**:
  - `src/config/site.ts`, `src/app/icon.svg`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts`.
  - `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/global-error.tsx`, `src/app/500/page.tsx`.
  - `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/templates/[slug]/page.tsx`, `src/app/preview/[slug]/page.tsx`.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/construction/plans/construction-plan.md`](construction/plans/construction-plan.md), [`aidlc-docs/audit.md`](audit.md).
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (xác nhận xuất đầy đủ `out/robots.txt`, `out/sitemap.xml`, `out/manifest.webmanifest`, `out/404.html`, `out/500/index.html`, `out/icon.svg`).

---

## [2026-11-27T06:20:34Z] — Prompt 19: Commit & Push Vertical Wall of Love, Hero Animated Counters & Full Technical SEO / Error Pages (`UNIT-08`)
- **Phase / Stage**: `OPERATIONS / Release Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit toàn bộ thay đổi gồm Feedback 3 cột dọc + ảnh chân dung thật, hiệu ứng chạy số Hero (`AnimatedCounter`) và trọn bộ Technical SEO (`sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `icon.svg`, JSON-LD, canonicals) + trang lỗi (`404`, `error`, `global-error`, `/500/`) lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build` (12/12 trang tĩnh); tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T06:27:10Z] — Prompt 20: Visual Style Analysis of Attached Reference (`image.png`) & Fit Evaluation for `BentoHighlightsSection`
- **Phase / Stage**: `OPERATIONS / Design Critique & Consultation`
- **User Input**: `"phân tích phong cách trong ảnh đính kèm , liệu áp dụng phong cách trên vào mục Điểm khác biệt tại Xưởng Giao Diện có hợp lý ko"` (kèm ảnh tham khảo `image.png`).
- **Clarifications / Decisions**:
  - Phân tích phong cách **Architectural Dashed-Grid Minimalism** (lưới kỹ thuật phẳng kẻ nét đứt `1px dashed`, không card bo tròn/shadow, phân cấp số liệu lớn đơn sắc + 1 điểm nhấn dấu tích xanh, cấu trúc so sánh 2 cột → thanh tổng kết quyền lợi).
  - Đánh giá mức độ phù hợp: **Rất hợp lý** để tạo nhịp điệu tương phản sau lưới Bento bo tròn ở phần Bộ sưu tập, đồng thời đề xuất 2 phương án chuyển hóa nội dung phù hợp với khách hàng doanh nghiệp Việt Nam của **Xưởng Giao Diện**.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận phiên phân tích phong cách thiết kế từ ảnh tham khảo.
- **Verification & Gate Status**: Không sửa mã nguồn ứng dụng; chờ người dùng chọn phương án nếu muốn áp dụng vào `BentoHighlightsSection.tsx`.

---

## [2026-11-27T06:29:30Z] — Prompt 21: Redesign `BentoHighlightsSection` in Architectural Dashed-Grid Style
- **Phase / Stage**: `CONSTRUCTION / UX Redesign (BentoHighlightsSection)`
- **User Input**: `"Ok hãy thiết kế lại"`
- **Clarifications / Decisions**:
  - Thiết kế lại toàn bộ mục **Điểm khác biệt tại Xưởng Giao Diện** (`src/components/gallery/BentoHighlightsSection.tsx`) theo phong cách **Swiss Architectural Dashed-Grid Minimalism** lấy cảm hứng từ `image.png`: khung lưới nét đứt phẳng (`1px dashed`) kèm 2 rãnh lề kiến trúc, đối chiếu 2 cột (`Thiết kế truyền thống từ đầu`: `45–70 ngày` / `4–6 vòng` vs `Triển khai tại Xưởng Giao Diện`: `5–10 ngày` / `5x nhanh hơn`), dải đệm ngang kẻ nét đứt và thanh cam kết trọn gói 2×2 với dấu tích xanh lục.
- **Artifacts & Files Updated**:
  - `src/components/gallery/BentoHighlightsSection.tsx` — Thiết kế lại hoàn toàn theo lưới nét đứt kiến trúc (tương thích cả Light & Dark Mode).
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận thiết kế lại mục Điểm khác biệt.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, 12/12 trang tĩnh).

---

## [2026-11-27T06:30:35Z] — Prompt 22: Commit & Push Dashed-Grid Redesign of `BentoHighlightsSection`
- **Phase / Stage**: `OPERATIONS / Release Deployment`
- **User Input**: `"commit và push\\"`
- **Clarifications / Decisions**: Commit bản thiết kế lại mục **Điểm khác biệt tại Xưởng Giao Diện** (`src/components/gallery/BentoHighlightsSection.tsx`) theo phong cách Architectural Dashed-Grid và đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push bản thiết kế lại.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build`; tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T06:47:00Z] — Prompt 23: `/grill-me` & Implement Rotating Editorial Shimmer Keyword in `AgencyHero` (`sống động` → `tinh tế` → `đẳng cấp`)
- **Phase / Stage**: `CONSTRUCTION / UX Polish (AgencyHero Rotating Keyword)`
- **User Input**: `"/grill-me Ở phần hero section, tạo hiệu ứng thay đổi text sống động -> tinh tế -> đẳng cấp . Hiện tại phần hero section hơi nhàm chán"`
- **Clarifications / Decisions** (chốt qua `/grill-me` 5 bước & Gate 1):
  - Giữ nguyên bố cục và nền Hero sạch sẽ, không bổ sung thêm widget/card/thanh phụ trợ gây rối mắt; tập trung 100% độ tinh xảo vào hiệu ứng xoay vòng từ khóa trong H1.
  - Chuỗi từ khóa xoay vòng: `sống động` → `tinh tế` → `đẳng cấp` với nhịp `2.8s/từ`, lặp vô hạn, tự tạm dừng khi di chuột vào từ khóa và tôn trọng `prefers-reduced-motion`.
  - Phong cách chuyển động: **Editorial Vertical Reveal + Blur nhẹ** (`y: 96% → 0% → -96%`, `blur(7px) → blur(0px)`), kết hợp **nét gạch chân động** vẽ mượt từ trái sang phải (rút về phải khi thoát) và **co giãn độ rộng mượt (spring width)** đo chính xác theo font responsive (`ResizeObserver` + `document.fonts.ready`).
  - Màu sắc: hiệu ứng **gradient ánh kim chuyển động (shimmer gradient)** đồng bộ cho cả Light Mode (cam đồng – vàng hổ phách) và Dark Mode (cam sáng – vàng champagne), có khoảng đệm mask và padding nghiêng chống cắt dấu tiếng Việt (`ố`, `ộ`, `ế`, `ẳ`, `ấ`).
- **Artifacts & Files Updated**:
  - `src/app/globals.css` — Bổ sung token `--hero-shimmer-gradient`, `--hero-underline-gradient`, keyframes `xgd-hero-shimmer`, class `.hero-keyword-shimmer` / `.hero-keyword-underline` và fallback `prefers-reduced-motion`.
  - `src/components/gallery/AgencyHero.tsx` — Xây dựng component `RotatingHeroKeyword` và tích hợp vào tiêu đề H1.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi TypeScript, 0 lỗi ESLint, xuất tĩnh thành công).

---

## [2026-11-27T07:14:00Z] — Prompt 24: Switch Hero Metric Numbers Font to `Be Vietnam Pro` (`font-sans`)
- **Phase / Stage**: `CONSTRUCTION / UX Polish (AgencyHero Typography)`
- **User Input**: `"sửa cả font chứ của 3 số ở phần hero section về font vietnam"`
- **Clarifications / Decisions**:
  - Chuyển font của 3 con số chỉ số ở Hero (`02`, `100%`, `3`) từ `font-serif` (`Playfair Display`) sang `font-sans` (`Be Vietnam Pro`), `font-bold tracking-[-0.03em]`, đồng bộ với các chỉ số số học tại `BentoHighlightsSection`.
- **Artifacts & Files Updated**:
  - `src/components/gallery/AgencyHero.tsx` — Cập nhật lớp font cho 3 thẻ số liệu trong Hero.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 12/12 trang).

---

## [2026-11-27T07:16:00Z] — Prompt 25: Add Brand Monogram SVG Logo Lockup to `StudioHeader`
- **Phase / Stage**: `CONSTRUCTION / UX Polish (StudioHeader Brand Logo)`
- **User Input**: `"thêm logo vào header nữa"`
- **Clarifications / Decisions**:
  - Thay thế dấu chấm tròn đơn giản trên Header bằng logo monogram SVG chữ `X` cách điệu đồng bộ 100% với favicon [`src/app/icon.svg`](../src/app/icon.svg) kết hợp lockup tên thương hiệu **Xưởng Giao Diện · UI STUDIO**, tự động thích ứng màu theo cả Light Mode và Dark Mode (`--accent-primary`, `--accent-primary-fg`, `--accent-highlight`) cùng hiệu ứng hover nhẹ.
- **Artifacts & Files Updated**:
  - `src/components/gallery/StudioHeader.tsx` — Tích hợp logo SVG monogram và wordmark lockup vào thanh điều hướng đầu trang.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 12/12 trang).

---

## [2026-11-27T07:17:15Z] — Prompt 26: Commit & Push Hero Rotating Shimmer Keyword, `Be Vietnam Pro` Metric Font & `StudioHeader` Brand Logo
- **Phase / Stage**: `OPERATIONS / Release Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit toàn bộ thay đổi gồm hiệu ứng xoay vòng từ khóa ánh kim ở Hero (`sống động` → `tinh tế` → `đẳng cấp`), đổi font 3 chỉ số Hero sang `Be Vietnam Pro`, và thêm logo SVG monogram cho `StudioHeader`, sau đó đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build` (0 lỗi, 12/12 trang tĩnh); tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T07:32:40Z] — Prompt 27: Hotfix `RotatingHeroKeyword` Reduced-Motion Freeze & Unify Highlight Color to Footer `#F97316`
- **Phase / Stage**: `OPERATIONS / Hotfix (AgencyHero RotatingHeroKeyword)`
- **User Input**: `"phần chữ highlight ở hero section không hoạt động , thêm vào đó màu không đẹp, thôi để màu giống ở footer đi"`
- **Clarifications / Decisions**:
  - **Root Cause**: `RotatingHeroKeyword` trước đó chặn `setInterval` và khóa cứng từ khóa tại `"sống động"` khi hệ điều hành bật `prefers-reduced-motion: reduce` (cùng nguyên nhân từng xảy ra ở `ShowcaseMarquee` tại Prompt 12).
  - **Fix**: Gỡ điều kiện đóng băng vòng lặp theo `prefers-reduced-motion` để chuỗi `sống động` → `tinh tế` → `đẳng cấp` luôn vận hành mượt mà trên mọi thiết bị (chỉ giảm bớt `filter: blur` khi OS bật reduced-motion), điều chỉnh nhịp `2.6s/từ`.
  - **Màu sắc**: Thay gradient shimmer bằng màu cam đồng nhất `text-[#F97316]` và nét gạch chân `bg-[#F97316]/85` khớp chính xác với chữ highlight trong `StudioFooter.tsx`, đồng thời dọn bỏ CSS shimmer thừa trong `globals.css`.
- **Artifacts & Files Updated**:
  - `src/components/gallery/AgencyHero.tsx` — Sửa lỗi đứng yên khi OS bật reduced-motion và đổi màu highlight sang `#F97316`.
  - `src/app/globals.css` — Dọn dẹp token & keyframes shimmer không còn sử dụng.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 12/12 trang).

---

## [2026-11-27T07:34:05Z] — Prompt 28: Commit & Push `RotatingHeroKeyword` Reduced-Motion Hotfix & `#F97316` Footer Color Alignment
- **Phase / Stage**: `OPERATIONS / Hotfix Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit bản sửa lỗi đứng yên của hiệu ứng chữ Hero trên thiết bị bật reduced-motion và đổi màu chữ highlight sang `#F97316` giống Footer (`src/components/gallery/AgencyHero.tsx`, `src/app/globals.css`), sau đó đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push bản sửa lỗi.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build` (0 lỗi, 12/12 trang tĩnh); tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T07:40:30Z] — Prompt 29: Move Hero Rotating Highlight to Final Line (`CLS = 0`) & Slow Down Animation Cadence
- **Phase / Stage**: `CONSTRUCTION / UX Polish (AgencyHero Layout Stability & Timing)`
- **User Input**: `"đổi vị trí hightlight text xuống cuối đi, hiện tại để ở giữa mỗi lần chuyển khiến cho layout bị vỡ, và giảm tốc độ animation xuống"`
- **Clarifications / Decisions**:
  - Chuyển [`RotatingHeroKeyword`](../src/components/gallery/AgencyHero.tsx) xuống dòng cuối cùng tách biệt (`block`) ở cuối tiêu đề H1 (`Những mẫu website được chế tác cho thương hiệu dẫn đầu —` / `sống động` → `tinh tế` → `đẳng cấp`), loại bỏ hoàn toàn hiện tượng nhảy dòng / vỡ layout (CLS = 0) trên mọi kích thước màn hình.
  - Giảm tốc độ animation cho cảm giác điềm tĩnh, sang trọng hơn: tăng nhịp dừng lên `4.2s/từ`, kéo dài chuyển chữ lên `0.95s`, nét gạch chân `1.05s` (thu về `0.65s`), và spring co giãn độ rộng dịu hơn (`stiffness: 120, damping: 24`).
- **Artifacts & Files Updated**:
  - `src/components/gallery/AgencyHero.tsx` — Dời cụm chữ highlight xuống cuối H1 và làm chậm toàn bộ nhịp animation.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 12/12 trang).

---

## [2026-11-27T07:45:00Z] — Prompt 30: Fix Mobile Avatar/Text Overlap in Hero Social Proof Row
- **Phase / Stage**: `OPERATIONS / Hotfix (AgencyHero Mobile Responsive)`
- **User Input**: `"phần Được tin chọn bởi 40+ thương hiệu & đội nhóm tại Việt Nam khi ở màn hình mobile đang bị ảnh và chữ chồng lên nhau"`
- **Clarifications / Decisions**:
  - **Root Cause**: Nhóm avatar `flex -space-x-2` và các thẻ `<img>` thiếu `shrink-0`, khiến flexbox co hẹp khung chứa trên màn hình di động hẹp làm ảnh đại diện tràn đè lên đoạn chữ bên cạnh.
  - **Fix**: Bổ sung `shrink-0` cho cả cụm avatar lẫn từng ảnh (`width={32} height={32}`), thêm `min-w-0 flex-1 leading-relaxed` cho đoạn văn bản và chuyển sang xếp dọc gọn gàng trên màn hình `< 380px` (`flex-col items-start gap-2.5 min-[380px]:flex-row min-[380px]:items-center min-[380px]:gap-3.5`).
- **Artifacts & Files Updated**:
  - `src/components/gallery/AgencyHero.tsx` — Sửa lỗi chồng lấn ảnh và chữ ở cụm Social Proof trên mobile.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 12/12 trang).

---

## [2026-11-27T07:53:00Z] — Prompt 31: Build Editorial Magazine Portfolio Template (`khoi-nguyen-portfolio`) Modeled After Reference Image
- **Phase / Stage**: `CONSTRUCTION / New Flagship Template (Portfolio Creative — khoi-nguyen-portfolio)`
- **User Input**: `"Làm thêm template porfolio với phong cách như ảnh đính kèm"` (kèm ảnh tham khảo `/home/antigravity/image.png`).
- **Clarifications / Decisions**:
  - Xây dựng mẫu Portfolio Editorial mới **`KHÔI NGUYÊN — Editorial Portfolio`** (`slug: "khoi-nguyen-portfolio"`, `category: "portfolio"`) bám sát phong cách tạp chí tương phản cao trong ảnh tham khảo: nền giấy kem ấm `#F5F4F0`, điểm nhấn đỏ son `#F44322`, than chì `#141413`.
  - Tạo chân dung studio tách nền trong suốt (`public/images/khoi-nguyen-portrait.webp`, 134 KB) để đan lớp trực tiếp lên chữ display `KHÔI` (đỏ son) & `NGUYÊN` (than chì) cỡ siêu lớn ở Hero, kèm thẻ 3D *"Ấn phẩm mới nhất — Sống Có Chủ Đích"* và bưu thiếp nghiêng tương tác *"Thư gửi ngày mai"* có nút đóng dấu niêm phong, lật 4 bức thư và viết thử trực tiếp.
  - Bổ sung đầy đủ các mục tương tác phía dưới: Giới thiệu & 3 tab Hành trình/Triết lý/Diễn thuyết, Tác phẩm lọc theo danh mục kèm modal đọc trích đoạn sách, Nhật ký & Tiểu luận kiểu mục lục tạp chí kèm modal đọc bài, và Footer bản tin Thư Chủ Nhật + biểu mẫu liên hệ hợp tác.
  - Bổ sung font weight `900` cho `Be Vietnam Pro` trong `src/app/layout.tsx` để typography display nặng nét sắc sảo.
- **Artifacts & Files Updated**:
  - `public/images/khoi-nguyen-portrait.webp` — Chân dung studio tách nền trong suốt cho Hero đan lớp.
  - `src/templates/khoi-nguyen-portfolio/data.ts`, `src/templates/khoi-nguyen-portfolio/index.tsx` — Dữ liệu và giao diện đầy đủ của mẫu Portfolio.
  - `src/templates/registry.ts` — Đăng ký `khoi-nguyen-portfolio` (tự động kích hoạt bộ lọc `Portfolio`, trang `/templates/khoi-nguyen-portfolio/`, `/preview/khoi-nguyen-portfolio/`, `sitemap.xml` và bộ đếm `03` mẫu ở Hero).
  - `src/app/layout.tsx` — Bổ sung weight `900` cho `Be_Vietnam_Pro`.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 14/14 trang gồm `/templates/khoi-nguyen-portfolio/` và `/preview/khoi-nguyen-portfolio/`).

---

## [2026-11-27T08:00:00Z] — Prompt 32: Build Minimalist Fine Bistro Restaurant Template (`moc-bistro-nha-hang`) Modeled After Reference Image
- **Phase / Stage**: `CONSTRUCTION / New Flagship Template (Dịch vụ / Hospitality — moc-bistro-nha-hang)`
- **User Input**: `"Làm thêm template restaurant với phong cách như ảnh đính kèm"` (kèm ảnh tham khảo `/home/antigravity/image.png`).
- **Clarifications / Decisions**:
  - Xây dựng mẫu nhà hàng Fine Bistro tối giản **`MỘC BISTRO — Nhà Hàng Ẩm Thực`** (`slug: "moc-bistro-nha-hang"`, `category: "dich-vu"`, `bentoSpan: "standard"` — hoàn thiện hàng 2 của lưới Bento `7 + 5 = 12` cột).
  - Bám sát thẩm mỹ ảnh tham khảo: nền trắng sứ `#F8F7F6`, sắc đỏ rượu vang `#8E1F24`, nút phụ hồng phấn `#F4E4E4`, font serif thanh lịch cho điều hướng & lời dẫn, biểu trưng vô cực trong hình tròn đỏ rượu vang, đĩa món tròn chụp từ trên cao xoay chuyển mượt trên Hero, cụm 4 thẻ chọn món cắt chéo viền đỏ rượu vang đặc trưng (`SlantedCardFrame`) và trích dẫn thực khách kèm vạch dọc đỏ rượu vang đồng bộ theo món đang chọn.
  - Tạo riêng 4 ảnh đĩa món chụp góc vuông từ trên cao và cắt tròn tách nền trong suốt (`public/images/bistro-dish-{pasta,steak,salmon,dessert}.webp`, 54–118 KB/ảnh).
  - Bổ sung đầy đủ trải nghiệm nhà hàng tương tác: lọc thực đơn theo nhóm, Giỏ đặt món Drawer tự tính tổng VND, 3 thẻ Ưu đãi áp dụng trực tiếp vào biểu mẫu Đặt bàn (chọn ngày, số khách, khung giờ, khu vực ngồi và xuất mã giữ bàn xác nhận).
- **Artifacts & Files Updated**:
  - `public/images/bistro-dish-pasta.webp`, `bistro-dish-steak.webp`, `bistro-dish-salmon.webp`, `bistro-dish-dessert.webp` — 4 ảnh đĩa món chụp trên cao tách nền tròn.
  - `src/templates/moc-bistro-nha-hang/data.ts`, `src/templates/moc-bistro-nha-hang/index.tsx` — Dữ liệu và giao diện đầy đủ của mẫu nhà hàng Mộc Bistro.
  - `src/templates/registry.ts` — Đăng ký `moc-bistro-nha-hang` (tổng cộng 4 mẫu flagship, tự động xuất `/templates/moc-bistro-nha-hang/`, `/preview/moc-bistro-nha-hang/`, và cập nhật `sitemap.xml`).
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 16/16 trang).

---

## [2026-11-27T08:21:00Z] — Prompt 33: Request Reference Screenshot for Shadcn Studio Hero Section 47 (Classroom Template)
- **Phase / Stage**: `INCEPTION / Visual Reference Clarification (Classroom Template)`
- **User Input**: `"làm thêm template cho lớp học , tham khảo ở trang [Shadcn Hero Section 47 - Shadcn Studio](https://shadcnstudio.com/preview/blocks/base/marketing-ui/hero-section/hero-section-47)"`
- **Clarifications / Decisions**:
  - Đã thử truy cập trực tiếp và tìm kiếm thông tin `hero-section-47` trên `shadcnstudio.com`, tuy nhiên trang preview chặn truy cập tự động (không lấy được nội dung/hình ảnh bố cục thực tế).
  - Đề nghị người dùng gửi ảnh chụp màn hình trang `hero-section-47` (giống cách đã gửi cho mẫu Portfolio và Restaurant) để tái hiện chính xác đúng phong cách, hoặc xác nhận nếu muốn thiết kế mẫu lớp học hiện đại theo hướng đề xuất.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận bước làm rõ tài liệu tham khảo thị giác.
- **Verification & Gate Status**: Chưa chỉnh sửa mã nguồn; chờ ảnh chụp tham khảo từ người dùng.

---

## [2026-11-27T08:28:30Z] — Prompt 34: Build Interactive Visual STEM Classroom Template (`axiom-lop-hoc`) Modeled After Shadcn Hero Section 47 Screenshot
- **Phase / Stage**: `CONSTRUCTION / New Flagship Template (Giáo dục / Lớp học — axiom-lop-hoc)`
- **User Input**: Gửi ảnh chụp màn hình tham khảo **Shadcn Hero Section 47 — Axiom ("See the maths move.")** (`/home/antigravity/image.png`).
- **Clarifications / Decisions**:
  - Thêm danh mục mới `"giao-duc"` (`Giáo dục / Lớp học`) vào `TemplateCategoryId` và `TEMPLATE_CATEGORIES`.
  - Xây dựng mẫu **`AXIOM — Lớp Học Toán Trực Quan`** (`slug: "axiom-lop-hoc"`, `category: "giao-duc"`, `bentoSpan: "wide"`) bám sát phong cách học thuật tối giản trong ảnh tham khảo: nền trắng sáng `#FCFCFD`, tiêu đề serif chính giữa *"Nhìn thấy toán học chuyển động."* kèm nét gạch sóng xanh cobalt `#2F5CE5`, phác thảo toán học chìm 2 bên lề, nút pill xanh phát sáng và nút phụ `Σ Khám phá chủ đề`.
  - Lập trình bảng thí nghiệm đồ thị giấy kẻ ô **chạy thật 60fps (`requestAnimationFrame`)** với **4 mô phỏng tương tác trực tiếp** (chuyển qua lại bằng thanh `< SÓNG HÌNH SIN 1/4 >`):
    1. **Sóng Hình Sin (`1/4`)**: Vòng tròn đơn vị cam đất nối đường chiếu đứt nét tới sóng sin thời gian thực, kích thước bước sóng `λ` & biên độ `A`, kéo thả trực tiếp `A`, `ω`, `φ`.
    2. **Ném Xiên Parabol (`2/4`)**: Quỹ đạo parabol, độ cao cực đại `H`, tầm xa `R` và bóng bay trực tiếp theo `v₀`, `θ`, `g`.
    3. **Con Lắc Đơn (`3/4`)**: Con lắc dao động gắn với đồ thị góc lệch tắt dần `θ(t)` theo `θ₀`, `L`, `γ`.
    4. **Lãi Kép (`4/4`)**: Đường cong hàm mũ đối chiếu đường thẳng lãi đơn theo `P`, `r`, `t`.
  - Hoàn thiện các phần lớp học bên dưới: Thư viện chủ đề lọc theo nhánh (bấm *"Mở đồ thị"* chuyển thẳng lên mô phỏng tương ứng), Lộ trình 3 khóa học kèm đề cương & modal xem giáo án mẫu, Dành cho giáo viên/trường học, Học phí Tháng/Năm và modal đăng ký Học sinh/Giáo viên.
- **Artifacts & Files Updated**:
  - `src/templates/axiom-lop-hoc/data.ts`, `src/templates/axiom-lop-hoc/index.tsx` — Dữ liệu và giao diện đầy đủ mẫu lớp học tương tác Axiom.
  - `src/templates/types.ts`, `src/templates/registry.ts` — Bổ sung danh mục `"giao-duc"` và đăng ký `axiom-lop-hoc` (5 mẫu flagship).
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 18/18 trang).

---

## [2026-11-27T09:14:10Z] — Prompt 35: Commit & Push Hero Polish, Mobile Social Proof Fix & 3 New Flagship Templates (`khoi-nguyen-portfolio`, `moc-bistro-nha-hang`, `axiom-lop-hoc`)
- **Phase / Stage**: `OPERATIONS / Release Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit toàn bộ thay đổi gồm dời chữ highlight Hero xuống dòng cuối & giảm tốc độ animation, sửa lỗi chồng lấn avatar/chữ Social Proof trên mobile, bổ sung font weight `900` cho `Be Vietnam Pro`, thêm danh mục `"giao-duc"` và 3 mẫu flagship mới (**KHÔI NGUYÊN Editorial Portfolio**, **MỘC BISTRO Nhà Hàng**, **AXIOM Lớp Học Toán Trực Quan**) kèm ảnh WebP tách nền, sau đó đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build` (0 lỗi, 18/18 trang tĩnh); tiến hành `git add`, `git commit`, `git push`.

---

## [2026-11-27T09:22:45Z] — Prompt 36: Keep Hero Highlight Keyword Inline on Same Line with Fixed Max-Word Slot Width
- **Phase / Stage**: `OPERATIONS / Hotfix (AgencyHero Inline Alignment)`
- **User Input**: `"phần chữ hightlight ở hero section  đang bị xuống dòng , nó phải ở cùng dòng với nhưng chữ khác"`
- **Clarifications / Decisions**:
  - Gỡ thẻ `<span className="mt-1.5 block">` để [`RotatingHeroKeyword`](../src/components/gallery/AgencyHero.tsx) nằm **cùng dòng (inline)** ngay sau `Những mẫu website được chế tác cho thương hiệu dẫn đầu —`.
  - Khóa độ rộng khung inline bên ngoài bằng từ dài nhất (`"sống động"`) để không bao giờ bị rớt dòng hay giật layout khi chuyển từ, trong khi nét gạch chân động phía dưới vẫn co giãn chính xác theo độ rộng thực của từng từ đang hiển thị (`sống động`, `tinh tế`, `đẳng cấp`).
- **Artifacts & Files Updated**:
  - `src/components/gallery/AgencyHero.tsx` — Giữ cụm highlight inline cùng dòng với tiêu đề H1 và cố định độ rộng slot chống rớt dòng.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 18/18 trang).

---

## [2026-11-27T09:29:15Z] — Prompt 37: Upgrade `ShowcaseMarquee` with Larger Photography-Rich Cards Covering All 5 Flagship Templates
- **Phase / Stage**: `CONSTRUCTION / UX Redesign (ShowcaseMarquee)`
- **User Input**: `"phần marque khối giao diện tương tác nổi bật hiện đang hơi xấu, hãy cho nó có nhiều hình ảnh , kích cỡ một chút "`
- **Clarifications / Decisions**:
  - Nâng kích cỡ mỗi thẻ Marquee từ `w-[275px]` / chiều cao ảnh `h-24` (`96px`) lên **`w-[325px] sm:w-[375px]`** và khung visual **`h-44 sm:h-48` (`176–192px`)** gấp đôi diện tích hiển thị, kèm nhịp cuộn êm hơn (`40s` / `44s`).
  - Thay toàn bộ các khối wireframe thanh xám đơn điệu bằng **8 thẻ trưng bày giàu hình ảnh thực tế** đại diện trọn bộ 5 mẫu flagship (`KHÔI NGUYÊN Portfolio` với chân dung cutout, `MỘC BISTRO` với 4 đĩa món chụp trên cao, `LUMIÈRE Nội Thất` với ảnh lookbook & sofa Unsplash đã kiểm chứng, `AXIOM Lớp Học` với đồ thị vòng tròn lượng giác + sóng sin, và `KOVA AI` với bảng phân tích dark-mode có biểu đồ & thông số thật).
- **Artifacts & Files Updated**:
  - `src/components/gallery/ShowcaseMarquee.tsx` — Thiết kế lại 8 thẻ visual giàu ảnh thực tế và tăng kích cỡ gấp đôi.
  - `src/app/globals.css` — Điều chỉnh tốc độ cuộn `marquee-track-left` (`40s`) & `marquee-track-right` (`44s`) phù hợp kích cỡ thẻ lớn hơn.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 18/18 trang).

---

## [2026-11-27T09:32:00Z] — Prompt 38: UX Evaluation of Bento Grid Layout for `GalleryShowcase` Template Collection
- **Phase / Stage**: `OPERATIONS / Design Critique & Consultation`
- **User Input**: `"phần bộ sưu tập template nếu trình bài theo layout bentogrid có hợp không?"`
- **Clarifications / Decisions**:
  - Phân tích thực trạng hiện tại của `GalleryShowcase.tsx` & `TemplateCard.tsx` (đang dùng lưới 12 cột `7 + 5`, gặp 3 vấn đề thực tế: lệch chiều cao khung `aspect-[16/10]` giữa ô 7 và 5 cột, hàng 3 bị hở 5 cột trống với 5 mẫu hiện có, và thẻ đơn bị lệch trái khi lọc danh mục).
  - Đánh giá mức độ phù hợp: **Hợp với định vị Creative Studio nếu tinh chỉnh lại nhịp Bento**, đồng thời đề xuất 3 phương án nâng cấp cụ thể (Bento cân bằng chiều cao + nhịp `7+5` / `5+7` + thẻ CTA lấp ô lẻ; Lưới 2 cột cân xứng kiểu Framer/Awwwards; hoặc True Bento kết hợp thẻ dọc Mobile Preview).
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận phiên tư vấn bố cục bộ sưu tập template.
- **Verification & Gate Status**: Không chỉnh sửa mã nguồn ứng dụng; chờ người dùng chọn phương án bố cục mong muốn.

---

## [2026-11-27T09:35:00Z] — Prompt 39: Implement Balanced Alternating Bento Grid (`7+5` / `5+7`), Uniform Row Preview Height & Auto-Balanced Custom Studio CTA Tile
- **Phase / Stage**: `CONSTRUCTION / UX Upgrade (GalleryShowcase & TemplateCard)`
- **User Input**: `"1"` (chọn Phương án 1 — Bento Grid Cân Bằng Thông Minh).
- **Clarifications / Decisions**:
  - Áp dụng nhịp Bento đan xen tự động theo hàng (`getBentoColSpan`): Hàng chẵn `7 + 5` → Hàng lẻ `5 + 7`.
  - Đồng bộ chiều cao khung Live Preview trên cùng một hàng (`h-[235px] sm:h-[310px] lg:h-[360px]`) và nâng `VIRTUAL_HEIGHT` trong `ScaledPreviewFrame` lên `1140px` để thẻ 5 cột phủ kín chiều cao không hở đáy hay dư khoảng trắng.
  - Tự động bổ sung thẻ **Studio CTA *"Chưa thấy đúng ngành hàng của bạn? Đặt thiết kế riêng"*** vào ô còn lại bất cứ khi nào số mẫu hiển thị là số lẻ (kể cả lúc xem tất cả 5 mẫu hoặc lúc lọc ra 1 mẫu), bảo đảm lưới luôn kín **12/12 cột**.
- **Artifacts & Files Updated**:
  - `src/components/gallery/ScaledPreviewFrame.tsx` — Nâng `VIRTUAL_HEIGHT` lên `1140px`.
  - `src/components/gallery/TemplateCard.tsx` — Hỗ trợ `colSpanClass` linh hoạt và chiều cao khung preview đồng đều trên mỗi hàng.
  - `src/components/gallery/GalleryShowcase.tsx` — Triển khai nhịp Bento `7+5` / `5+7` và thẻ Studio CTA tự động lấp ô lẻ.
  - [`aidlc-docs/aidlc-state.md`](aidlc-state.md), [`aidlc-docs/audit.md`](audit.md) — Cập nhật trạng thái và nhật ký kiểm toán.
- **Verification & Gate Status**: `npm run typecheck && npm run lint && npm run build` PASS (0 lỗi, xuất tĩnh 18/18 trang).

---

## [2026-11-27T09:36:30Z] — Prompt 40: Commit & Push Inline Hero Keyword, Upgraded Image-Rich `ShowcaseMarquee` & Balanced Alternating Bento Grid
- **Phase / Stage**: `OPERATIONS / Release Deployment`
- **User Input**: `"commit và push"`
- **Clarifications / Decisions**: Commit toàn bộ thay đổi gồm căn chữ highlight Hero cùng dòng không giật layout, nâng cấp dải `ShowcaseMarquee` cỡ lớn giàu hình ảnh từ cả 5 mẫu flagship, và tối ưu lưới Bento đan xen `7+5` / `5+7` đồng đều chiều cao kèm thẻ Studio CTA lấp kín ô lẻ, sau đó đẩy lên `origin/main`.
- **Artifacts & Files Updated**:
  - [`aidlc-docs/audit.md`](audit.md) — Ghi nhận lịch sử commit & push.
- **Verification & Gate Status**: Đã qua `npm run typecheck && npm run lint && npm run build` (0 lỗi, 18/18 trang tĩnh); tiến hành `git add`, `git commit`, `git push`.
