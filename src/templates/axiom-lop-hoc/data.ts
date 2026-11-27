export type SimulationId = "sine-wave" | "projectile" | "pendulum" | "compound";

export interface SimulationMeta {
  id: SimulationId;
  badge: string;
  question: string;
  insight: string;
}

export interface ClassroomTopic {
  id: string;
  track: "Giải tích & Lượng giác" | "Vật lý trực quan" | "Xác suất & Tài chính";
  title: string;
  lessons: number;
  level: string;
  formula: string;
  summary: string;
  linkedSim?: SimulationId;
}

export interface ClassroomCourse {
  id: string;
  badge: string;
  title: string;
  audience: string;
  duration: string;
  students: string;
  modules: { title: string; lessons: number }[];
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  highlighted?: boolean;
  cta: string;
  features: string[];
}

export const AXIOM_NAV_ITEMS = [
  { label: "Khóa học", href: "#khoa-hoc" },
  { label: "Chủ đề", href: "#chu-de" },
  { label: "Dành cho trường học", href: "#truong-hoc" },
  { label: "Học phí", href: "#hoc-phi" },
];

export const SIMULATIONS: SimulationMeta[] = [
  {
    id: "sine-wave",
    badge: "SÓNG HÌNH SIN 1/4",
    question: "Điều gì xảy ra với sóng khi tần số góc ω tăng lên?",
    insight:
      "Sóng hình sin đơn giản là hình chiếu của một điểm chuyển động tròn đều, được ghi lại theo dòng thời gian.",
  },
  {
    id: "projectile",
    badge: "NÉM XIÊN PARABOL 2/4",
    question: "Góc ném θ bằng bao nhiêu để tầm xa đạt giá trị cực đại?",
    insight:
      "Mọi vật ném xiên trong chân không đều vẽ nên một đường parabol cân xứng, đạt tầm xa lớn nhất khi góc ném đúng 45°.",
  },
  {
    id: "pendulum",
    badge: "CON LẮC ĐƠN 3/4",
    question: "Chiều dài dây L ảnh hưởng như thế nào đến nhịp dao động?",
    insight:
      "Chu kỳ của con lắc phụ thuộc vào căn bậc hai của chiều dài dây — dây càng dài, nhịp lắc càng chậm rãi và khoan thai.",
  },
  {
    id: "compound",
    badge: "LÃI KÉP 4/4",
    question: "Tại sao lãi kép bứt tốc mạnh mẽ nhất ở nửa sau chặng đường?",
    insight:
      "Khác với đường thẳng lãi đơn, lãi kép tạo ra lãi trên chính phần lãi tích lũy — độ cong tăng vọt theo hàm mũ theo thời gian.",
  },
];

export const CLASSROOM_TOPICS: ClassroomTopic[] = [
  {
    id: "topic-trig",
    track: "Giải tích & Lượng giác",
    title: "Vòng Tròn Lượng Giác & Sóng Điều Hòa",
    lessons: 14,
    level: "Lớp 10 – 12",
    formula: "y = A sin(ωx + φ)",
    summary:
      "Hiểu bản chất sin, cos, biên độ, bước sóng λ và độ lệch pha qua vòng tròn đơn vị chuyển động trực tiếp.",
    linkedSim: "sine-wave",
  },
  {
    id: "topic-projectile",
    track: "Vật lý trực quan",
    title: "Động Học Chất Điểm & Quỹ Đạo Parabol",
    lessons: 11,
    level: "Lớp 10 – Đại học",
    formula: "y = x tan θ − gx² / 2v₀²cos²θ",
    summary:
      "Phân tích vectơ vận tốc theo hai trục độc lập, tính độ cao cực đại và tối ưu tầm xa bằng đồ thị kéo thả.",
    linkedSim: "projectile",
  },
  {
    id: "topic-pendulum",
    track: "Vật lý trực quan",
    title: "Dao Động Cơ & Năng Lượng Bảo Toàn",
    lessons: 12,
    level: "Lớp 11 – 12",
    formula: "T = 2π √(L / g)",
    summary:
      "Quan sát sự chuyển hóa liên tục giữa động năng và thế năng, hiện tượng tắt dần và cộng hưởng cơ học.",
    linkedSim: "pendulum",
  },
  {
    id: "topic-compound",
    track: "Xác suất & Tài chính",
    title: "Hàm Số Mũ, Logarit & Toán Tài Chính",
    lessons: 9,
    level: "Lớp 11 – Sinh viên",
    formula: "A(t) = P · (1 + r)ᵗ",
    summary:
      "Trực quan hóa sức mạnh của tăng trưởng hàm mũ, lạm phát, chiết khấu dòng tiền và bài toán tích lũy dài hạn.",
    linkedSim: "compound",
  },
  {
    id: "topic-calculus",
    track: "Giải tích & Lượng giác",
    title: "Đạo Hàm, Tiếp Tuyến & Tích Phân Diện Tích",
    lessons: 16,
    level: "Lớp 11 – 12",
    formula: "∫ 2x dx = x² + C",
    summary:
      "Nhìn thấy độ dốc tiếp tuyến thay đổi theo từng điểm và cách hàng trăm hình chữ nhật nhỏ hội tụ thành diện tích đường cong.",
    linkedSim: "sine-wave",
  },
  {
    id: "topic-probability",
    track: "Xác suất & Tài chính",
    title: "Phân Phối Chuẩn & Mô Phỏng Monte Carlo",
    lessons: 10,
    level: "Lớp 12 – Đại học",
    formula: "P(A | B) = P(B | A)P(A) / P(B)",
    summary:
      "Chạy hàng nghìn phép thử ngẫu nhiên ngay trong trình duyệt để trực giác tự cảm nhận định lý giới hạn trung tâm.",
    linkedSim: "compound",
  },
];

export const CLASSROOM_COURSES: ClassroomCourse[] = [
  {
    id: "course-highschool",
    badge: "Phổ biến nhất",
    title: "Toán Trực Quan THPT & Luyện Tư Duy Bản Chất",
    audience: "Học sinh lớp 10 – 12",
    duration: "12 tuần · 48 phòng thí nghiệm",
    students: "14.200+ học viên",
    description:
      "Xóa bỏ nỗi sợ học vẹt công thức lượng giác, hàm số, đạo hàm và tích phân bằng hệ thống đồ thị tương tác từng bước.",
    modules: [
      { title: "Chương 1: Hàm số, biến đổi đồ thị & nghiệm phương trình", lessons: 12 },
      { title: "Chương 2: Lượng giác & dao động hình sin trực quan", lessons: 14 },
      { title: "Chương 3: Đạo hàm, cực trị & ứng dụng tối ưu hóa", lessons: 12 },
      { title: "Chương 4: Tích phân & hình học giải tích không gian", lessons: 10 },
    ],
  },
  {
    id: "course-physics",
    badge: "Thực hành STEM",
    title: "Vật Lý Mô Phỏng — Cơ Học, Sóng & Điện Từ",
    audience: "Học sinh chuyên Lý & STEM",
    duration: "10 tuần · 36 mô phỏng",
    students: "8.900+ học viên",
    description:
      "Tự tay điều chỉnh trọng lực, lực cản, tần số và pha dao động để kiểm chứng trực tiếp các định luật Newton và sóng cơ.",
    modules: [
      { title: "Chương 1: Chuyển động ném xiên & hệ quy chiếu", lessons: 10 },
      { title: "Chương 2: Con lắc đơn, con lắc lò xo & cộng hưởng", lessons: 12 },
      { title: "Chương 3: Giao thoa sóng cơ & sóng dừng", lessons: 14 },
    ],
  },
  {
    id: "course-ai-math",
    badge: "Mới ra mắt 2026",
    title: "Toán Nền Tảng Cho Khoa Học Dữ Liệu & AI",
    audience: "Sinh viên & Lập trình viên",
    duration: "8 tuần · 32 bài tương tác",
    students: "6.400+ học viên",
    description:
      "Nắm chắc Đại số tuyến tính, Gradient Descent, Xác suất Bayes và Tối ưu hóa bằng mô phỏng trực quan thay vì chứng minh khô khan.",
    modules: [
      { title: "Chương 1: Vectơ, ma trận & phép biến hình không gian", lessons: 10 },
      { title: "Chương 2: Đạo hàm riêng & thuật toán Gradient Descent", lessons: 12 },
      { title: "Chương 3: Xác suất thống kê & phân phối dữ liệu", lessons: 10 },
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Tự học Miễn phí",
    subtitle: "Khởi đầu khám phá toán học trực quan không giới hạn thời gian.",
    monthlyPrice: 0,
    annualPrice: 0,
    cta: "Bắt đầu miễn phí",
    features: [
      "Truy cập 12 phòng thí nghiệm mô phỏng nền tảng",
      "Kéo thả công thức trực tiếp trên máy tính & iPad",
      "Bài tập trắc nghiệm phản hồi đồ thị tức thì",
      "Lưu tiến độ học cá nhân đồng bộ đám mây",
    ],
  },
  {
    id: "pro",
    name: "Học viên Pro",
    subtitle: "Trọn bộ lộ trình lớp học, bài tập nâng cao & trợ lý gợi ý tư duy.",
    monthlyPrice: 149000,
    annualPrice: 109000,
    highlighted: true,
    cta: "Đăng ký Học thử 14 ngày",
    features: [
      "Mở khóa toàn bộ 120+ phòng thí nghiệm Toán & Vật lý",
      "Lộ trình ôn thi theo cấp lớp & báo cáo lỗ hổng kiến thức",
      "Chế độ chia sẻ liên kết đồ thị để thảo luận nhóm",
      "Tải phiếu bài tập PDF & lời giải trực quan từng bước",
    ],
  },
  {
    id: "school",
    name: "Lớp học & Trường học",
    subtitle: "Dành cho giáo viên, trung tâm STEM và trường THPT muốn giảng dạy sinh động.",
    monthlyPrice: null,
    annualPrice: null,
    cta: "Nhận tài khoản Giáo viên",
    features: [
      "Chế độ Trình chiếu Lớp học full-screen tối ưu máy chiếu",
      "Giao bài tập tương tác theo lớp & chấm điểm tự động",
      "Bảng theo dõi mức độ hiểu bài của từng học sinh",
      "Đào tạo sử dụng & tùy biến giáo án cho tổ bộ môn",
    ],
  },
];
