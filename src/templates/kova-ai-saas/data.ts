export interface KovaWorkflowTab {
  id: string;
  label: string;
  badge: string;
  command: string;
  latencyMs: number;
  summaryTitle: string;
  summaryPoints: string[];
  metrics: { label: string; value: string }[];
}

export interface KovaPricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyMonthlyPrice: number;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface KovaFaqItem {
  question: string;
  answer: string;
}

export const KOVA_WORKFLOWS: KovaWorkflowTab[] = [
  {
    id: "hop-dong",
    label: "Rà soát hợp đồng",
    badge: "Pháp chế & Mua hàng",
    command:
      "Kiểm tra 14 điều khoản rủi ro thanh toán & phạt vi phạm trong Hợp đồng cung ứng Q4.pdf",
    latencyMs: 640,
    summaryTitle: "Phát hiện 3 điều khoản cần thương lượng lại trước khi ký",
    summaryPoints: [
      "Điều 5.2: Thời hạn thanh toán 60 ngày vượt chuẩn nội bộ (30 ngày).",
      "Điều 8.4: Mức phạt chậm giao 12% vượt trần 8% theo Luật Thương mại.",
      "Điều 11.1: Thiếu điều khoản bảo mật dữ liệu khách hàng song phương.",
    ],
    metrics: [
      { label: "Độ chính xác trích xuất", value: "99.4%" },
      { label: "Tiết kiệm thời gian", value: "3.5 giờ / hồ sơ" },
    ],
  },
  {
    id: "cham-soc",
    label: "Tự động CSKH đa kênh",
    badge: "Vận hành & Bán hàng",
    command:
      "Phân loại 1.280 tin nhắn Zalo OA & Messenger trong ca sáng, ưu tiên đơn cần hỗ trợ gấp",
    latencyMs: 420,
    summaryTitle: "Đã tự động giải đáp 84% yêu cầu tra cứu & chuyển 42 phiếu ưu tiên",
    summaryPoints: [
      "1.075 khách hỏi tình trạng vận đơn & chính sách đổi trả được trả lời tức thì.",
      "42 khách hàng VIP yêu cầu đổi lịch giao đã gắn nhãn chuyển trực tiếp tới trưởng ca.",
      "Điểm hài lòng phản hồi tự động đạt 4.86 / 5.0 trong 7 ngày gần nhất.",
    ],
    metrics: [
      { label: "Tốc độ phản hồi đầu", value: "1.8 giây" },
      { label: "Giảm tải nhân sự", value: "-68%" },
    ],
  },
  {
    id: "bao-cao",
    label: "Tổng hợp báo cáo BI",
    badge: "Ban điều hành",
    command:
      "So sánh biên lợi nhuận theo khu vực Miền Nam vs Miền Bắc tháng 11 và cảnh báo tồn kho",
    latencyMs: 510,
    summaryTitle: "Biên lợi nhuận gộp tăng +4.2% nhờ tối ưu chi phí vận chuyển chặng cuối",
    summaryPoints: [
      "Khu vực TP.HCM dẫn đầu doanh thu (+18.6% so với tháng trước), tỷ lệ hoàn đơn giảm còn 1.9%.",
      "3 mã hàng chủ lực tại kho Hà Nội còn tồn dưới 9 ngày bán — đề xuất điều chuyển ngay.",
      "Tự động xuất bản tóm tắt gửi Email ban giám đốc lúc 08:00 sáng thứ Hai.",
    ],
    metrics: [
      { label: "Nguồn dữ liệu đồng bộ", value: "12 hệ thống" },
      { label: "Độ trễ cập nhật", value: "Thời gian thực" },
    ],
  },
];

export const KOVA_PRICING: KovaPricingTier[] = [
  {
    id: "khoi-dau",
    name: "Khởi đầu",
    subtitle: "Dành cho đội nhóm nhỏ bắt đầu tự động hóa quy trình lặp lại.",
    monthlyPrice: 1290000,
    yearlyMonthlyPrice: 990000,
    features: [
      "Tối đa 5 thành viên trong workspace",
      "15.000 lượt xử lý AI mỗi tháng",
      "Kết nối Google Drive, Notion & Email",
      "Hỗ trợ kỹ thuật qua Zalo trong giờ hành chính",
    ],
    ctaLabel: "Dùng thử 14 ngày miễn phí",
  },
  {
    id: "tang-truong",
    name: "Tăng trưởng",
    subtitle: "Lựa chọn tối ưu cho doanh nghiệp 20–200 nhân sự cần mở rộng nhanh.",
    monthlyPrice: 3490000,
    yearlyMonthlyPrice: 2790000,
    highlighted: true,
    features: [
      "Không giới hạn số thành viên & phòng ban",
      "100.000 lượt xử lý AI ưu tiên tốc độ cao",
      "Tích hợp Zalo OA, CRM, ERP & Webhook API",
      "Phân quyền dữ liệu theo phòng ban & Nhật ký kiểm toán",
    ],
    ctaLabel: "Bắt đầu gói Tăng trưởng",
  },
  {
    id: "doanh-nghiep",
    name: "Doanh nghiệp",
    subtitle: "Triển khai riêng biệt theo chuẩn bảo mật ngân hàng & tập đoàn.",
    monthlyPrice: 8900000,
    yearlyMonthlyPrice: 7100000,
    features: [
      "Hạ tầng Private Cloud tại Việt Nam (ISO 27001)",
      "Huấn luyện riêng trên kho tri thức nội bộ",
      "Cam kết SLA 99.99% & Kỹ sư đồng hành riêng",
      "SSO Doanh nghiệp & Tùy biến API không giới hạn",
    ],
    ctaLabel: "Đặt lịch demo riêng",
  },
];

export const KOVA_FAQS: KovaFaqItem[] = [
  {
    question: "Dữ liệu nội bộ của doanh nghiệp có được dùng để huấn luyện mô hình chung không?",
    answer:
      "Tuyệt đối không. Toàn bộ tài liệu và dữ liệu hội thoại của bạn được mã hóa AES-256 và cô lập hoàn toàn theo từng doanh nghiệp, không chia sẻ hay sử dụng lại cho bất kỳ mục đích huấn luyện bên ngoài nào.",
  },
  {
    question: "Mất bao lâu để kết nối KOVA AI với hệ thống hiện có như Zalo OA hay CRM?",
    answer:
      "Các kết nối phổ biến như Google Workspace, Zalo OA, Haravan, Sapo và HubSpot có sẵn bộ cài 1 chạm, hoàn tất trong vòng 15 phút mà không cần đội ngũ lập trình can thiệp sâu.",
  },
  {
    question: "Tôi có thể chuyển đổi gói hoặc hủy bất cứ lúc nào không?",
    answer:
      "Có. Bạn có thể nâng cấp, hạ cấp hoặc tạm dừng gói ngay trên trang quản trị thanh toán mà không bị ràng buộc chi phí ẩn.",
  },
];
