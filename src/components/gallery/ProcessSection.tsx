const STEPS = [
  {
    number: "01",
    title: "Chọn phong cách chuẩn ngành",
    description:
      "Trải nghiệm trực tiếp các bản mẫu tương tác để đánh giá bố cục, nhịp điệu nội dung và độ mượt trên cả máy tính lẫn điện thoại.",
  },
  {
    number: "02",
    title: "Cá nhân hóa nhận diện thương hiệu",
    description:
      "Tinh chỉnh bảng màu, bộ chữ, hình ảnh thực tế và thông điệp bán hàng để website phản ánh trọn vẹn bản sắc doanh nghiệp của bạn.",
  },
  {
    number: "03",
    title: "Tối ưu tốc độ & Bàn giao trọn gói",
    description:
      "Triển khai mã nguồn gọn sạch, chuẩn SEO, tốc độ tải tức thì và hướng dẫn vận hành dễ dàng ngay sau khi ra mắt.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="quy-trinh"
      className="scroll-mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]"
    >
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)] uppercase">
            Quy trình hợp tác tinh gọn
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Từ bản demo trực quan tới website hoàn chỉnh trong vài ngày.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col border-t border-[var(--border-subtle)] pt-6"
            >
              <span className="font-serif text-3xl font-medium italic text-[var(--accent-highlight)]">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
