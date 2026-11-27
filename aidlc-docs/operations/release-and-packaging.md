# Operations Phase: Release & Packaging (`release-and-packaging.md`)

- **Phase**: `OPERATIONS`
- **Target Environments / Platforms**: `Static Web Hosting (Cloudflare Pages, GitHub Pages, Static CDN)`

---

## 1. Build & Verification Pipeline
```bash
npm run typecheck && npm run lint && npm run build
```
Xuất toàn bộ tài nguyên tĩnh (HTML/CSS/JS) vào thư mục `out/`.

### Build với Subpath (dành cho GitHub Pages Project Site)
```bash
NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI npm run build
```

---

## 2. Release & Deployment Matrix

| Target / Environment | Artifact / Config | Verification & Release Steps |
| :--- | :--- | :--- |
| **Cloudflare Pages** *(Khuyến nghị — root domain)* | Thư mục `out/` | Kết nối GitHub repo `phungvansyhb/awesome-apps-UI` → Build command: `npm run build` → Output directory: `out`. |
| **GitHub Pages** *(subpath `/awesome-apps-UI`)* | Thư mục `out/` + `NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI` | Cấu hình GitHub Actions build với `NEXT_PUBLIC_BASE_PATH=/awesome-apps-UI`, tạo file `.nojekyll` trong `out/` và publish bằng `actions/deploy-pages`. |
| **Local Static Smoke Test** | `npx serve out` | Kiểm tra trực tiếp trang chủ `/`, chuyển đổi danh mục, mở `/templates/<slug>/`, kiểm tra Desktop/Tablet/Mobile và Prev/Next trên toàn bộ 6 mẫu. |

---

## 3. Customization Before Production Release
- Cập nhật tên thương hiệu, Hotline/Zalo, Email, Facebook, Địa chỉ trong `src/config/site.ts`.
- Để thêm mẫu giao diện mới: tạo thư mục `src/templates/<slug>/` và đăng ký 1 entry trong `src/templates/registry.ts`, sau đó chạy lại `npm run typecheck && npm run lint && npm run build`.
