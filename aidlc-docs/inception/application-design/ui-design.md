# UI/UX Design Specification (`ui-design.md`)

- **Phase**: `INCEPTION`
- **Stage**: `Stage 1.4 — Application & UI Design`
- **Design System**: `Awesome UI Studio — Creative Editorial Agency`
- **Status**: `Clarified via /grill-me — Ready for Gate 1 Sign-Off`

---

## 1. Clarified UI Design Decisions

| Dimension | Selection | Specification Summary |
| :--- | :--- | :--- |
| **Gallery Shell Aesthetic** | **Creative Agency Nổi Bật** | Nền giấy ấm (`#FAF9F6`) kết hợp bề mặt trắng tinh (`#FFFFFF`), đường viền mảnh (`#E5E2D9`), điểm nhấn Đen Mực (`#111111`) và Cam Đất (`#EA580C`). Hero typography cỡ lớn kết hợp serif nghiêng tinh tế. |
| **Layout Grammar** | **Bento / Editorial Grid** | Lưới 12 cột bất đối xứng có nhịp điệu (thẻ `wide` 7–8 cột xen kẽ thẻ `standard` 4–5 cột và `tall`), khoảng thở rộng, hiển thị metadata cô đọng bên dưới khung Live Preview thu nhỏ. |
| **Typography (Vietnamese-Safe)** | `Be Vietnam Pro` + `Playfair Display` + `JetBrains Mono` | Cả 3 font đều bật `subsets: ["vietnamese", "latin"]` qua `next/font/google`, bảo đảm dấu thanh tiếng Việt cân đối ở mọi kích thước chữ lớn nhỏ. |
| **Motion Language** | `Framer Motion` (Editorial Reveal) | Chuyển động `cubic-bezier(0.22, 1, 0.36, 1)` mượt mà khi xuất hiện Hero, lọc thẻ Bento (`layout` transition), và chuyển kích thước khung Desktop/Tablet/Mobile trong Preview Stage. |
| **Preview Toolbar** | **Minimalist Floating Top Bar** | Thanh công cụ cao `56px` nền tối/kính mờ sắc nét, giữ tối đa diện tích cho bản demo bên dưới, hỗ trợ đầy đủ nút Quay lại, Tên mẫu, Desktop/Tablet/Mobile, Prev/Next và Toàn màn hình. |

---

## 2. Gallery Shell Design Tokens

```css
:root {
  --bg-canvas: #faf9f6;
  --bg-surface: #ffffff;
  --bg-subtle: #f2f0ea;
  --border-subtle: #e5e2d9;
  --text-primary: #111111;
  --text-secondary: #57534e;
  --text-muted: #78716c;
  --accent-primary: #18181b;
  --accent-highlight: #ea580c;
  --radius-card: 20px;
  --radius-pill: 9999px;
}
```

---

## 3. Visual Direction of the 6 Flagship Templates

Mỗi mẫu mang một bản sắc thẩm mỹ hoàn toàn riêng biệt để khách hàng thấy rõ biên độ thiết kế của Studio:

1. **Bán lẻ / E-commerce — `LUMIÈRE Nội Thất`** (`lumiere-noi-that`):
   - **Tông màu**: Kem ấm (`#F7F4EF`), nâu óc chó (`#2C241E`), nhấn đồng cổ (`#B47B44`).
   - **Điểm nhấn**: Lookbook editorial, lưới sản phẩm tối giản, chọn màu/kích cỡ trực tiếp, Drawer giỏ hàng tương tác tính tổng tiền VND.
2. **Landing Page SaaS — `KOVA AI Workspace`** (`kova-ai-saas`):
   - **Tông màu**: Nền tối sâu (`#09090B`), ánh sáng tím chàm/lục lam tinh tế (`#6366F1` / `#22D3EE`), viền kính hairline.
   - **Điểm nhấn**: Hero SaaS sắc nét, tab mô phỏng luồng tự động hóa, công tắc bảng giá Tháng/Năm, FAQ Accordion.
3. **Technical / Dev Docs — `VIETCLOUD API Portal`** (`vietcloud-docs`):
   - **Tông màu**: Trắng kỹ thuật sắc nét (`#FFFFFF`) kết hợp code block tối (`#0F172A`), nhấn xanh dương kỹ thuật (`#2563EB`).
   - **Điểm nhấn**: Bố cục 3 cột chuẩn Stripe/Mintlify (Sidebar mục lục, nội dung tài liệu + tìm kiếm, khung code chuyển đổi `cURL` / `Node.js` / `Python` kèm Copy & nút "Chạy thử API" trả JSON mô phỏng).
4. **Dashboard Analytics — `PULSE BI`** (`pulse-bi-dashboard`):
   - **Tông màu**: Slate sáng tinh gọn (`#F8FAFC`) + sidebar tối (`#0F172A`), nhấn ngọc lục bảo (`#10B981`) và xanh dương (`#3B82F6`).
   - **Điểm nhấn**: Bộ lọc khoảng thời gian (`7 ngày` / `30 ngày` / `Quý này`) cập nhật động 4 thẻ KPI, biểu đồ cột/đường SVG tương tác có tooltip, thanh tìm kiếm & lọc trạng thái đơn hàng.
5. **Portfolio Creative — `SƠN HÀ STUDIO`** (`son-ha-studio`):
   - **Tông màu**: Monotone nghệ thuật (`#0E0E0E` & `#F4F1EA`), nhấn đỏ son (`#DC2626`), dùng `Playfair Display` cỡ lớn.
   - **Điểm nhấn**: Bố cục dự án bất đối xứng, lọc theo lĩnh vực (`Nhận diện thương hiệu`, `Website`, `Kiến trúc`), bấm mở Drawer Case Study chi tiết ngay trong trang.
6. **Dịch vụ / Hospitality — `AN NHIÊN RESORT & SPA`** (`an-nhien-resort`):
   - **Tông màu**: Trắng cát (`#FBF9F5`), xanh rừng trầm (`#1B3B2B`), nhấn vàng cát (`#C59D5F`).
   - **Điểm nhấn**: Trải nghiệm nghỉ dưỡng tĩnh tại, chuyển đổi hạng phòng/biệt thự, bộ chọn số đêm & số khách tự tính báo giá dự kiến theo VND, thư viện ẩm thực & spa.
