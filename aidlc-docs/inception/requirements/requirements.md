# Requirements Analysis (`requirements.md`)

- **Phase**: `INCEPTION`
- **Stage**: `Stage 1.2 — Requirements Analysis`
- **Analysis Depth**: `Comprehensive`
- **Status**: `Clarified via /grill-me — Ready for Gate 1 Sign-Off`

---

## 1. Functional Requirements (`FR-*`)

| ID | Title | Description | Priority |
| :--- | :--- | :--- | :--- |
| **`FR-01`** | **Creative Agency Gallery Shell** | Trang chủ trưng bày phong cách Creative Agency nổi bật với Hero typography cỡ lớn, bố cục lưới **Bento / Editorial** hiện đại, chuyển động mượt (`framer-motion`), 100% Tiếng Việt. | Must Have |
| **`FR-02`** | **Category Filtering & Search** | Hỗ trợ lọc nhanh theo 6 danh mục ngành (`Tất cả`, `Bán lẻ`, `Landing Page`, `Technical`, `Dashboard`, `Portfolio`, `Dịch vụ`) và tìm kiếm thời gian thực theo tên mẫu, mô tả hoặc thẻ phong cách (tags). | Must Have |
| **`FR-03`** | **Lazy-Loaded Scaled Live Thumbnails** | Mỗi thẻ mẫu trên trang chủ hiển thị **Live Preview thu nhỏ** (`<iframe>` tới `/preview/[slug]` được co giãn theo kích thước thẻ bằng `ResizeObserver`, lazy-load qua `IntersectionObserver` kèm khung skeleton loading) để tự động đồng bộ khi thêm mẫu mới. | Must Have |
| **`FR-04`** | **Interactive Live Preview Stage** | Khi người dùng bấm vào thẻ mẫu, mở ngay `/templates/[slug]` hiển thị bản Live Preview tương tác trong `<iframe>` cô lập kèm thanh công cụ tối giản phía trên: nút **Quay lại thư viện**, bộ chuyển khung màn hình **Desktop (`100%`) / Tablet (`768px`) / Mobile (`390px`)**, nút **Prev / Next** chuyển nhanh giữa các mẫu khi thuyết trình với khách hàng, và nút **Toàn màn hình (Fullscreen / Mở tab riêng)**. | Must Have |
| **`FR-05`** | **Six Flagship Interactive Templates (MVP)** | Cung cấp 6 mẫu giao diện 100% Tiếng Việt có tương tác thật (1 mẫu đại diện xuất sắc cho mỗi danh mục): (1) **Bán lẻ / E-commerce** (`lumiere-noi-that`), (2) **Landing Page SaaS** (`kova-ai-saas`), (3) **Technical / Dev Docs** (`vietcloud-docs`), (4) **Dashboard Analytics** (`pulse-bi-dashboard`), (5) **Portfolio Creative** (`son-ha-studio`), (6) **Dịch vụ / Hospitality** (`an-nhien-resort`). | Must Have |
| **`FR-06`** | **Centralized Brand & General Contact Config** | Thông tin thương hiệu (**Awesome UI Studio**) và thông tin liên hệ chung (Hotline/Zalo, Email, Facebook, Địa chỉ, Giờ làm việc) hiển thị rõ ràng ở Header/Footer và tập trung toàn bộ trong 1 file cấu hình duy nhất `src/config/site.ts`. | Must Have |
| **`FR-07`** | **Extensible File-Based Template Registry** | Kiến trúc registry khai báo tập trung tại `src/templates/registry.ts` trỏ tới các module độc lập `src/templates/<slug>/`; thêm mẫu mới chỉ cần thêm thư mục và 1 mục đăng ký là tự động xuất hiện trên Gallery, bộ lọc, Prev/Next và static build. | Must Have |

---

## 2. Non-Functional Requirements (`NFR-*`)

- **`NFR-01` (Performance & Lazy Loading)**: Các `<iframe>` thu nhỏ trên trang chủ chỉ được mount khi thẻ mẫu tiến vào vùng nhìn thấy (`IntersectionObserver` + `rootMargin`), tránh tải đồng loạt toàn bộ iframe ngay lúc mở trang.
- **`NFR-02` (Visual & CSS Isolation)**: Mỗi mẫu giao diện chạy trên route cô lập `/preview/[slug]` nhúng qua `<iframe>` để typography, bảng màu, cuộn trang và CSS media queries (`sm`/`md`/`lg`) hoạt động chính xác 100% khi chuyển Desktop / Tablet / Mobile mà không xung đột với vỏ Gallery.
- **`NFR-03` (Vietnamese Typography & Accessibility)**: Toàn bộ font chữ hỗ trợ đầy đủ dấu tiếng Việt (`Be Vietnam Pro`, `Playfair Display`, `JetBrains Mono`), đạt độ tương phản văn bản chuẩn WCAG AA, hỗ trợ điều hướng bàn phím cho thanh toolbar xem mẫu.
- **`NFR-04` (Resilient External Imagery)**: Ảnh chụp thật từ Unsplash qua URL phải có nền fallback tinh tế và xử lý trạng thái tải mượt để giao diện không vỡ bố cục khi mạng chậm.
- **`NFR-05` (SEO & Shareable Links)**: Mỗi trang `/templates/[slug]` xuất static HTML với metadata OpenGraph chuẩn (`title`, `description`) để hiển thị rõ ràng khi gửi link mẫu cho khách hàng qua Zalo/Messenger.

---

## 3. Technical Constraints (`CON-*`) & Prerequisites (`PRE-*`)

- **`CON-01` (Framework & Stack)**: Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4 + Framer Motion + Lucide Icons.
- **`CON-02` (Static Export Only)**: Cấu hình `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`, và `generateStaticParams()` cho mọi dynamic route (`/templates/[slug]`, `/preview/[slug]`). Không sử dụng API routes hoặc tính năng yêu cầu Node.js runtime ở phía server.
- **`CON-03` (Subpath Deployment Support)**: Toàn bộ đường dẫn nội bộ và `iframe src` phải tôn trọng `NEXT_PUBLIC_BASE_PATH` để deploy mượt trên cả root domain (Cloudflare Pages) lẫn subpath (GitHub Pages).
- **`PRE-01`**: Node.js 22+ và npm 10+ cho quá trình phát triển và build static export ra thư mục `out/`.

---

## 4. Exclusions (`EX-*`) & Success Criteria (`SC-*`)

- **`EX-01`**: Không xây dựng hệ thống đăng nhập tài khoản, thanh toán, giỏ hàng lưu mẫu hay modal gửi form đặt làm có backend/database trong phiên bản MVP.
- **`EX-02`**: Không xây dựng CMS hoặc trang Admin quản lý nội dung; quản trị mẫu thực hiện trực tiếp qua code registry (`src/templates/registry.ts`).
- **`EX-03`**: Không hiển thị chức năng sao chép mã nguồn (Copy Code) hay tải ZIP dành cho lập trình viên (tập trung trải nghiệm trình diễn trực quan cho khách hàng).
- **`SC-01`**: Lệnh `npm run typecheck && npm run lint && npm run build` chạy sạch 0 lỗi và xuất đầy đủ HTML tĩnh trong `out/` cho trang chủ, 6 trang `/templates/<slug>/` và 6 trang `/preview/<slug>/`.
- **`SC-02`**: Khách hàng có thể lọc danh mục, bấm vào bất kỳ mẫu nào trong 6 mẫu, tương tác trực tiếp các tính năng bên trong mẫu, chuyển đổi Desktop/Tablet/Mobile mượt mà và bấm Prev/Next trình chiếu liên tục.

---

## 5. Clarified Decisions Log (`/grill-me`)

| Question / Topic | Selected Option | Impacted Requirements |
| :--- | :--- | :--- |
| **Mục đích cốt lõi & Đối tượng** | Bộ sưu tập mẫu trưng bày cho khách hàng (Agency/Freelancer) | `FR-01`, `FR-05`, `EX-03` |
| **Luồng liên hệ đặt làm** | Trưng bày thuần túy kèm thông tin liên hệ chung ở Header/Footer | `FR-06`, `EX-01` |
| **Trải nghiệm xem mẫu** | Mở Live Preview tương tác ngay + toolbar tối giản (Desktop/Tablet/Mobile, Prev/Next, Fullscreen) | `FR-04`, `NFR-02` |
| **Kiến trúc & Công nghệ** | Next.js (App Router) + TypeScript + Tailwind CSS, mỗi template cô lập qua iframe | `FR-07`, `CON-01`, `NFR-02` |
| **Quy mô MVP** | 6 mẫu flagship siêu chỉn chu có tương tác thật (1 mẫu/danh mục) | `FR-05`, `SC-02` |
| **Ngôn ngữ hiển thị** | 100% Tiếng Việt (cả vỏ Gallery lẫn nội dung 6 mẫu) | `FR-01`, `FR-05`, `NFR-03` |
| **Phong cách vỏ Gallery** | Creative Agency nổi bật (Hero cỡ lớn, Bento/Editorial, chuyển động mượt) | `FR-01` |
| **Nguồn hình ảnh** | Ảnh chụp thật từ Unsplash qua URL | `NFR-04` |
| **Thumbnail trên Gallery** | Live Preview thu nhỏ (Scaled Iframe có lazy-load) | `FR-03`, `NFR-01` |
| **Thương hiệu & Cấu hình** | Mặc định "Awesome UI Studio" + 1 file `src/config/site.ts` | `FR-06` |
| **Mục tiêu Deploy** | Static Export (`output: 'export'`) cho GitHub Pages / Cloudflare Pages | `CON-02`, `CON-03`, `SC-01` |
