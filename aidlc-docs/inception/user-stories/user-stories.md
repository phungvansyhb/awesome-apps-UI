# User Stories (`user-stories.md`)

- **Phase**: `INCEPTION`
- **Stage**: `Stage 1.3 — User Stories`
- **Traceability**: Mapped to [`requirements.md`](../requirements/requirements.md)

---

## `US-01`: Khám phá thư viện theo ngành hàng (`FR-01`, `FR-02`, `FR-03`)
**Là một** khách hàng doanh nghiệp đang tìm mẫu thiết kế website,
**Tôi muốn** xem toàn bộ bộ sưu tập giao diện theo bố cục Bento ấn tượng và lọc nhanh theo ngành hàng hoặc từ khóa,
**Để** nhanh chóng nhận diện phong cách phù hợp với lĩnh vực kinh doanh của mình.

### Acceptance Criteria
- **Given** tôi truy cập trang chủ Awesome UI Studio,
- **When** tôi cuộn tới phần Bộ sưu tập và chọn một danh mục (ví dụ: `Bán lẻ`) hoặc gõ từ khóa vào ô tìm kiếm,
- **Then** lưới Bento cập nhật tức thì chỉ hiển thị các mẫu phù hợp kèm hiệu ứng chuyển động mượt mà,
- **And** mỗi thẻ mẫu hiển thị bản xem trước thu nhỏ sống động (lazy-loaded scaled preview) đúng giao diện thật.

---

## `US-02`: Trải nghiệm Live Preview tương tác & kiểm tra Responsive (`FR-04`, `NFR-02`)
**Là một** khách hàng hoặc chuyên viên tư vấn Agency đang thuyết trình mẫu,
**Tôi muốn** bấm vào một thẻ mẫu để tương tác trực tiếp ngay lập tức và chuyển đổi giữa chế độ Desktop, Tablet và Mobile,
**Để** đánh giá chính xác trải nghiệm thực tế trên mọi thiết bị như một website hoàn chỉnh.

### Acceptance Criteria
- **Given** tôi đang ở trang chủ Gallery,
- **When** tôi bấm vào thẻ của mẫu `Bán lẻ / E-commerce`,
- **Then** hệ thống mở trang `/templates/lumiere-noi-that` với thanh công cụ tối giản ở trên cùng và bản demo tương tác hiển thị bên dưới trong khung `<iframe>` cô lập,
- **And** khi tôi chọn **Tablet (`768px`)** hoặc **Mobile (`390px`)**, khung preview co giãn mượt về đúng chiều rộng thiết bị và kích hoạt đúng bố cục responsive bên trong mẫu.

---

## `US-03`: Chuyển mẫu liên tục khi demo cho khách hàng (`FR-04`)
**Là một** Freelancer / Agency đang chia sẻ màn hình giới thiệu mẫu cho khách hàng,
**Tôi muốn** bấm nút **Mẫu trước (Prev)** / **Mẫu tiếp theo (Next)** hoặc bật **Toàn màn hình** ngay trên thanh công cụ,
**Để** trình diễn liền mạch nhiều phương án giao diện mà không phải quay lại trang chủ nhiều lần.

### Acceptance Criteria
- **Given** tôi đang mở trang xem mẫu `/templates/[slug]`,
- **When** tôi bấm nút `Tiếp theo` hoặc `Trước đó` trên thanh công cụ,
- **Then** ứng dụng điều hướng trực tiếp sang trang xem mẫu liền kề trong danh sách registry,
- **And** khi tôi bấm nút `Toàn màn hình`, bản demo mở rộng tối đa (hoặc mở thẳng route `/preview/[slug]` không bị thanh công cụ che khuất).

---

## `US-04`: Tương tác nghiệp vụ thật bên trong từng mẫu giao diện (`FR-05`)
**Là một** khách hàng xem bản demo,
**Tôi muốn** bấm thử các tính năng đặc trưng của ngành ngay trong mẫu (lọc sản phẩm & giỏ hàng, đổi bảng giá, copy code API, đổi bộ lọc thời gian Dashboard, xem Case Study, tính chi phí đặt phòng),
**Để** cảm nhận trực quan chất lượng tương tác và độ chỉn chu của sản phẩm cuối.

### Acceptance Criteria
- **Given** tôi mở bất kỳ mẫu nào trong 6 mẫu flagship,
- **When** tôi tương tác với các bộ lọc, tab, modal/drawer hoặc công cụ tính toán trong mẫu,
- **Then** giao diện phản hồi tức thì bằng dữ liệu tiếng Việt tự nhiên, không lỗi console và không vỡ bố cục trên cả Desktop lẫn Mobile.

---

## `US-05`: Tra cứu thông tin liên hệ & Tùy biến nhanh thương hiệu (`FR-06`, `FR-07`)
**Là một** chủ Studio / Freelancer sở hữu kho mã nguồn,
**Tôi muốn** thay đổi tên thương hiệu, hotline/Zalo, email, địa chỉ tại một file duy nhất (`src/config/site.ts`) và thêm mẫu mới thông qua `src/templates/registry.ts`,
**Để** bảo trì và mở rộng thư viện nhanh chóng mà không phải sửa rải rác nhiều file giao diện.

### Acceptance Criteria
- **Given** tôi cập nhật thông tin trong `src/config/site.ts` hoặc thêm 1 entry mới vào `src/templates/registry.ts`,
- **When** tôi chạy `npm run build`,
- **Then** Header, Footer, SEO metadata, lưới Bento, bộ lọc và các route tĩnh `/templates/[slug]` + `/preview/[slug]` tự động cập nhật đồng bộ.
