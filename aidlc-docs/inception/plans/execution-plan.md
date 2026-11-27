# AI-DLC Master Execution Plan (`execution-plan.md`)

- **Phase**: `INCEPTION`
- **Stage**: `Stage 1.6 — Workflow Planning`
- **Gate Status**: `Awaiting Gate 1 Sign-Off before executing Construction Units (UNIT-01 → UNIT-06)`

---

## 1. Adaptive Stage Selection Summary

| Phase | Stage | Execution Decision | Rationale |
| :--- | :--- | :--- | :--- |
| **INCEPTION** | Workspace Detection | **Executed (Completed)** | Khởi tạo khung Next.js 16 + TypeScript + Tailwind CSS v4 (Static Export) cho repo Greenfield `awesome-apps-UI`. |
| **INCEPTION** | Requirements Analysis | **Executed (Completed)** | Làm rõ đầy đủ 11 nhánh quyết định qua `/grill-me` vào [`requirements.md`](../requirements/requirements.md). |
| **INCEPTION** | User Stories | **Executed (Completed)** | Xây dựng `US-01` → `US-05` ánh xạ tới `FR-01` → `FR-07` trong [`user-stories.md`](../user-stories/user-stories.md). |
| **INCEPTION** | Application & UI Design | **Executed (Completed)** | Thiết kế kiến trúc iframe cô lập, Static Export và bản sắc Creative Agency + 6 mẫu flagship trong [`architecture.md`](../application-design/architecture.md) và [`ui-design.md`](../application-design/ui-design.md). |
| **INCEPTION** | Units Generation | **Executed (Completed)** | Tách nhỏ thành 6 Units độc lập (`UNIT-01` → `UNIT-06`) trong [`units.md`](../units/units.md). |
| **CONSTRUCTION** | Per-Unit Design & Code Gen | **Planned (Post-Gate 1)** | Triển khai tuần tự từng Unit (`UNIT-01` → `UNIT-06`) theo [`construction-plan.md`](../../construction/plans/construction-plan.md). |
| **CONSTRUCTION** | Build & Test Verification | **Planned (Post-Gate 1)** | Chạy `npm run typecheck && npm run lint && npm run build` sau mỗi Unit. |
| **OPERATIONS** | Release & Packaging | **Planned** | Kiểm chứng gói xuất tĩnh `out/` cho Cloudflare Pages & GitHub Pages tại [`release-and-packaging.md`](../../operations/release-and-packaging.md). |

---

## 2. Construction Execution Sequence

1. **`UNIT-01`**: Core Shared Utilities & Live Preview Engine (`/templates/[slug]`, `/preview/[slug]`, Viewport Switcher, Prev/Next, Fullscreen).
2. **`UNIT-02`**: Creative Agency Gallery Shell & Lazy-Loaded Scaled Bento Grid (`/`).
3. **`UNIT-03`**: Flagship Templates Batch 1 — `LUMIÈRE Nội Thất` (Bán lẻ) & `KOVA AI Workspace` (Landing Page SaaS).
4. **`UNIT-04`**: Flagship Templates Batch 2 — `VIETCLOUD API Portal` (Technical Docs) & `PULSE BI` (Dashboard Analytics).
5. **`UNIT-05`**: Flagship Templates Batch 3 — `SƠN HÀ STUDIO` (Portfolio Creative) & `AN NHIÊN RESORT & SPA` (Dịch vụ / Hospitality).
6. **`UNIT-06`**: Polish, Responsive QA & Static Export Verification (`out/` + subpath test).
7. **Build & Test Gate**: Xác nhận `npm run typecheck && npm run lint && npm run build` pass 100% không lỗi.
