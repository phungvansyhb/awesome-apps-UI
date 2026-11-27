export interface EditorialLetter {
  id: string;
  number: string;
  salutation: string;
  body: string;
  location: string;
}

export interface PortfolioWork {
  id: string;
  category: "sach" | "nghien-cuu" | "co-van";
  categoryLabel: string;
  year: string;
  title: string;
  subtitle: string;
  summary: string;
  excerpt: string[];
  tags: string[];
  metrics: string;
  coverTone: "coral" | "charcoal" | "sand";
  featured?: boolean;
}

export interface JournalEssay {
  id: string;
  number: string;
  category: "Tư duy" | "Hành vi" | "Làm việc" | "Đời sống";
  title: string;
  date: string;
  readTime: string;
  lead: string;
  paragraphs: string[];
}

export interface JourneyTab {
  id: "hanh-trinh" | "triet-ly" | "dien-thuyet";
  label: string;
  headline: string;
  body: string;
  items: { period: string; title: string; detail: string }[];
}

export const PORTFOLIO_NAV_LEFT = [
  { label: "TRANG CHỦ", href: "#trang-chu", active: true },
  { label: "GIỚI THIỆU", href: "#gioi-thieu", active: false },
];

export const PORTFOLIO_NAV_RIGHT = [
  { label: "TÁC PHẨM", href: "#tac-pham" },
  { label: "NHẬT KÝ", href: "#nhat-ky" },
];

export const EDITORIAL_LETTERS: EditorialLetter[] = [
  {
    id: "letter-01",
    number: "01 / 04",
    salutation: "Gửi ngày mai,",
    body: "Tôi sẽ cất điện thoại vào ngăn kéo và hoàn thành trọn vẹn một điều mình thực sự trân quý.",
    location: "Hà Nội · Sáng thứ Bảy",
  },
  {
    id: "letter-02",
    number: "02 / 04",
    salutation: "Gửi ngày mai,",
    body: "Bớt vội vã thêm một nhịp để lắng nghe những ý tưởng cần thời gian chín muồi trong tĩnh lặng.",
    location: "Đà Lạt · Chiều mưa nhẹ",
  },
  {
    id: "letter-03",
    number: "03 / 04",
    salutation: "Gửi ngày mai,",
    body: "Giữ lại những cuộc trò chuyện chân thành thay vì những lịch hẹn kín đặc mà không đọng lại điều gì.",
    location: "Sài Gòn · Cuối tuần",
  },
  {
    id: "letter-04",
    number: "04 / 04",
    salutation: "Gửi ngày mai,",
    body: "Mỗi trang viết đáng giá đều khởi đầu từ một buổi sáng yên tĩnh không có thông báo chen ngang.",
    location: "Huế · 06:15 sáng",
  },
];

export const HERO_STATS = [
  { value: "02", label: "Ấn phẩm xuất bản & tái bản toàn quốc" },
  { value: "48K+", label: "Độc giả đón đọc bản tin Thư Chủ Nhật" },
  { value: "120+", label: "Tiểu luận nghiên cứu về hành vi & sáng tạo" },
];

export const JOURNEY_TABS: JourneyTab[] = [
  {
    id: "hanh-trinh",
    label: "Hành trình",
    headline: "10 năm đi qua giao điểm của thiết kế, văn hóa và viết lách.",
    body: "Từ một người thiết kế hệ thống sản phẩm số, tôi nhận ra công nghệ không thiếu tốc độ — điều thế giới hiện đại thiếu là những khoảng lặng giúp con người hiểu rõ mình đang tạo ra điều gì và vì ai.",
    items: [
      {
        period: "2024 — Nay",
        title: "Tác giả độc lập & Nhà nghiên cứu văn hóa làm việc",
        detail:
          "Xuất bản 'Sống Có Chủ Đích', điều hành bản tin Thư Chủ Nhật và cố vấn ngôn ngữ thương hiệu.",
      },
      {
        period: "2021 — 2024",
        title: "Giám đốc Sáng tạo — Xưởng Tư Duy & Nội Dung Đương Đại",
        detail:
          "Dẫn dắt chiến lược nội dung, định vị văn hóa và ấn phẩm biên tập cho hơn 18 thương hiệu Việt.",
      },
      {
        period: "2018 — 2021",
        title: "Trưởng nhóm Nghiên cứu Trải nghiệm Người dùng",
        detail:
          "Nghiên cứu hành vi số, thói quen tập trung và thiết kế sản phẩm nhân bản tại Hà Nội & Singapore.",
      },
    ],
  },
  {
    id: "triet-ly",
    label: "Triết lý viết",
    headline: "Viết không để gây ồn ào, mà để làm rõ một ý nghĩ đáng nhớ.",
    body: "Mỗi bài tiểu luận hay cuốn sách đều trải qua ít nhất bốn lần biên tập cắt gọt: bỏ đi sự phô trương, giữ lại những quan sát trung thực và câu hỏi khiến người đọc muốn dừng lại suy ngẫm.",
    items: [
      {
        period: "Nguyên tắc 01",
        title: "Quan sát trước, kết luận sau",
        detail:
          "Mọi lập luận đều bắt đầu từ câu chuyện đời thực, nhật ký thực địa và dữ liệu hành vi cụ thể.",
      },
      {
        period: "Nguyên tắc 02",
        title: "Tôn trọng sự chú ý của độc giả",
        detail:
          "Không viết dài để lấp đầy trang giấy. Một đoạn văn sắc nét luôn giá trị hơn năm trang sáo rỗng.",
      },
      {
        period: "Nguyên tắc 03",
        title: "Ngôn ngữ ấm áp nhưng kỷ luật",
        detail:
          "Giữ giọng văn gần gũi như một bức thư tay, nhưng chặt chẽ về cấu trúc tư duy và tính ứng dụng.",
      },
    ],
  },
  {
    id: "dien-thuyet",
    label: "Diễn thuyết & Cố vấn",
    headline: "Đồng hành cùng các đội ngũ sáng tạo và doanh nghiệp dẫn đầu.",
    body: "Tôi nhận lời mời trò chuyện thân mật, workshop về nhịp làm việc sâu (Deep Work) và cố vấn hệ thống kể chuyện thương hiệu cho các studio, nhà xuất bản và đội ngũ sản phẩm.",
    items: [
      {
        period: "Workshop",
        title: "Thiết kế Nhịp Làm Việc Tĩnh Tại cho Đội ngũ Sáng tạo",
        detail:
          "Chương trình 1 ngày giúp đội ngũ giảm 40% họp vụn và xây dựng quy trình sáng tạo có chiều sâu.",
      },
      {
        period: "Keynote",
        title: "Nghệ Thuật Kể Chuyện Trong Kỷ Nguyên Quá Tải Nội Dung",
        detail:
          "Đã trình bày tại Diễn đàn Thiết kế Sáng tạo Việt Nam & chuỗi tọa đàm đại học 2025.",
      },
      {
        period: "Cố vấn 1:1",
        title: "Xây dựng Tuyên ngôn & Ấn phẩm Thương hiệu Độc bản",
        detail:
          "Giới hạn 4 dự án mỗi năm để trực tiếp đồng hành từ nghiên cứu cốt lõi tới ấn phẩm hoàn chỉnh.",
      },
    ],
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: "song-co-chu-dich",
    category: "sach",
    categoryLabel: "Sách xuất bản",
    year: "2025",
    title: "Sống Có Chủ Đích",
    subtitle: "Một đời sống ít ồn ào hơn, nhiều chiều sâu hơn",
    summary:
      "Cuốn sách đầu tay gồm 12 chương tiểu luận kết hợp nghiên cứu hành vi về cách ta chọn điều đáng chú tâm giữa một thế giới luôn kéo sự tập trung về mọi phía.",
    excerpt: [
      "Chúng ta hiếm khi mất thời gian vì những quyết định lớn sai lầm. Phần lớn những năm tháng trôi đi trong lặng lẽ là do hàng nghìn cái gật đầu nhỏ bé với những việc ta chưa từng thực sự muốn làm.",
      "Sống có chủ đích không có nghĩa là lên lịch kín từng phút như một cỗ máy hiệu suất. Ngược lại, đó là nghệ thuật dũng cảm chừa lại khoảng trống — để đọc trọn một chương sách, ăn một bữa tối không màn hình, và theo đuổi một công trình đủ lâu để thấy nó trưởng thành.",
      "Khi bạn bắt đầu đặt câu hỏi 'Điều này có xứng đáng với buổi sáng tinh khôi nhất của tôi không?', cả nhịp sống sẽ tự động sắp xếp lại theo một trật tự trong trẻo hơn rất nhiều.",
    ],
    tags: ["Tư duy", "Hành vi", "Đời sống"],
    metrics: "Tái bản lần 4 · 18.500 bản phát hành",
    coverTone: "coral",
    featured: true,
  },
  {
    id: "nghe-thuat-lam-viec-tinh-tai",
    category: "sach",
    categoryLabel: "Sách đang biên soạn",
    year: "2026",
    title: "Nghệ Thuật Làm Việc Tĩnh Tại",
    subtitle: "Bản thảo ấn phẩm thứ hai — Dự kiến phát hành Quý IV/2026",
    summary:
      "Khảo sát cách các nghệ nhân, kiến trúc sư và nhà sáng lập duy trì chất lượng công việc đỉnh cao mà không đánh đổi sức khỏe tinh thần hay cảm hứng sáng tạo.",
    excerpt: [
      "Sự bận rộn là chiếc áo choàng dễ mặc nhất của thời đại số. Ta trả lời tin nhắn sau ba giây, mở mười hai thẻ trình duyệt cùng lúc, rồi kết thúc một ngày kiệt sức mà vẫn tự hỏi: hôm nay mình đã thực sự làm nên điều gì?",
      "Tĩnh tại trong công việc không đồng nghĩa với chậm chạp. Đó là trạng thái dồn toàn bộ trí tuệ vào một mũi nhọn duy nhất — nơi tốc độ thực sự đến từ sự rõ ràng chứ không phải từ cảm giác gấp gáp.",
    ],
    tags: ["Làm việc sâu", "Sáng tạo", "Bản thảo 2026"],
    metrics: "68% bản thảo · 4.200 độc giả đặt trước",
    coverTone: "charcoal",
  },
  {
    id: "bao-cao-nhip-song-so-2026",
    category: "nghien-cuu",
    categoryLabel: "Nghiên cứu độc lập",
    year: "2026",
    title: "Báo cáo Nhịp Sống Số & Sự Chú Tâm",
    subtitle: "Khảo sát 2.400 người làm nghề sáng tạo tại Hà Nội & TP.HCM",
    summary:
      "Chuyên đề nghiên cứu định tính và định lượng về mức độ phân mảnh chú ý, thói quen đọc dài và nhu cầu tìm về trải nghiệm tương tác tinh giản của thế hệ trẻ đô thị.",
    excerpt: [
      "74% người tham gia khảo sát cho biết họ cảm thấy mệt mỏi nhất không phải vì khối lượng công việc, mà vì số lần phải chuyển ngữ cảnh trung bình 38 lần mỗi ngày.",
      "Đáng chú ý, nhóm có thói quen dành 90 phút đầu ngày không mở mạng xã hội ghi nhận mức độ hài lòng với chất lượng sáng tạo cao gấp 2,3 lần nhóm còn lại.",
    ],
    tags: ["Dữ liệu hành vi", "Khảo sát thực địa", "Báo cáo mở"],
    metrics: "2.400 mẫu khảo sát · 64 trang biên tập",
    coverTone: "sand",
  },
  {
    id: "he-thong-ke-chuyen-thuong-hieu",
    category: "co-van",
    categoryLabel: "Cố vấn sáng tạo",
    year: "2025",
    title: "Hệ Thống Ngôn Ngữ & Tạp Chí Thương Hiệu",
    subtitle: "Cố vấn biên tập cho 6 studio kiến trúc & thời trang thủ công",
    summary:
      "Xây dựng giọng điệu thương hiệu, ấn phẩm lookbook in ấn và trải nghiệm website kể chuyện mang chiều sâu văn hóa thay cho những khẩu hiệu quảng cáo ngắn hạn.",
    excerpt: [
      "Một thương hiệu có tuổi thọ tính bằng thập kỷ không bao giờ cố gắng nói to hơn đối thủ. Họ chọn nói rõ ràng hơn, thành thật hơn và nhất quán từ tấm danh thiếp nhỏ nhất đến từng dòng chữ trên website.",
    ],
    tags: ["Editorial Branding", "Chiến lược nội dung", "Ấn phẩm"],
    metrics: "6 thương hiệu · Tăng 2,8x thời gian đọc trang",
    coverTone: "sand",
  },
];

export const JOURNAL_ESSAYS: JournalEssay[] = [
  {
    id: "essay-01",
    number: "01",
    category: "Tư duy",
    title: "Tại sao những ý tưởng hay nhất luôn xuất hiện khi bạn rời khỏi bàn làm việc?",
    date: "14 Tháng 11, 2026",
    readTime: "6 phút đọc",
    lead: "Khoảng trống giữa hai nhiệm vụ không phải là sự lãng phí — đó là phòng tối nơi tâm trí tráng rửa những mảnh ghép rời rạc thành một bức ảnh rõ nét.",
    paragraphs: [
      "Mỗi khi bế tắc trước một trang bản thảo hay một bố cục thiết kế, phản xạ quen thuộc của chúng ta là cố ngồi lâu hơn, mở thêm tài liệu tham khảo và ép bản thân phải nghĩ ra ngay lập tức. Thế nhưng não bộ sáng tạo hiếm khi vận hành theo mệnh lệnh cưỡng ép.",
      "Khi ta bước ra ngoài đi bộ mười lăm phút không tai nghe, mạng lưới mặc định của não bộ (Default Mode Network) mới bắt đầu kết nối những trải nghiệm tưởng chừng không liên quan. Chính những khoảng lặng 'không làm gì' ấy mới là lúc những liên tưởng độc đáo nhất ló dạng.",
      "Thử thách lớn nhất của người làm sáng tạo hiện nay không phải là học thêm công cụ mới, mà là bảo vệ những khoảng thở đủ yên tĩnh để suy nghĩ của chính mình có cơ hội vang lên.",
    ],
  },
  {
    id: "essay-02",
    number: "02",
    category: "Làm việc",
    title: "Ghi chép về một buổi sáng không thông báo và năng suất thực sự",
    date: "02 Tháng 11, 2026",
    readTime: "5 phút đọc",
    lead: "Một thử nghiệm nhỏ trong 30 ngày: không kiểm tra email hay tin nhắn trước 10 giờ sáng đã thay đổi hoàn toàn nhịp sáng tạo của cả tuần.",
    paragraphs: [
      "Tuần đầu tiên của thử nghiệm mang lại một cảm giác hơi bồn chồn — nỗi sợ bỏ lỡ một tin nhắn 'khẩn cấp' nào đó. Nhưng đến ngày thứ bảy, tôi nhận ra 95% những việc tưởng như gấp gáp lúc 8 giờ sáng đều có thể chờ đến 10 giờ mà không hề sứt mẻ.",
      "Đổi lại, hai tiếng đồng hồ đầu tiên trong ngày trở thành khoảng thời gian quý giá nhất: không bị kéo vào danh sách ưu tiên của người khác, tôi hoàn thành phần việc khó nhất trước khi thành phố kịp ồn ào.",
    ],
  },
  {
    id: "essay-03",
    number: "03",
    category: "Hành vi",
    title: "Chủ nghĩa tối giản không nằm ở căn phòng trống, mà ở chất lượng lựa chọn",
    date: "19 Tháng 10, 2026",
    readTime: "7 phút đọc",
    lead: "Ta thường nhầm lẫn sự tinh giản với việc vứt bỏ thật nhiều đồ đạc, trong khi cốt lõi của nó là chỉ giữ lại những điều thực sự nâng đỡ đời sống tinh thần.",
    paragraphs: [
      "Một bàn làm việc chỉ còn một cuốn sổ giấy dày, một cây bút mực và một cuốn sách đang đọc dở không phải để chụp ảnh cho đẹp. Nó giúp tâm trí bước vào công việc mà không phải vượt qua hàng chục tín hiệu thị giác thừa thãi.",
      "Tương tự trên một trang web hay một ấn phẩm thiết kế: khoảng trắng không phải là phần diện tích bỏ trống chưa dùng đến, mà là khung thở giúp nội dung quan trọng nhất được tỏa sáng đúng vị thế của nó.",
    ],
  },
  {
    id: "essay-04",
    number: "04",
    category: "Đời sống",
    title: "Nghệ thuật viết một bức thư tay cho chính mình của sáu tháng sau",
    date: "04 Tháng 10, 2026",
    readTime: "4 phút đọc",
    lead: "Giữa dòng chảy cuồn cuộn của các mục tiêu ngắn hạn, một bức thư ngắn niêm phong lại giúp ta đo được điều gì thực sự còn quan trọng khi thời gian đi qua.",
    paragraphs: [
      "Cứ mỗi đầu quý, tôi viết ra đúng ba câu trên một tấm bưu thiếp giấy kem: một điều muốn buông bỏ, một kỹ năng muốn kiên nhẫn rèn luyện, và một người muốn dành nhiều thời gian hơn để gặp gỡ.",
      "Khi mở lại tấm bưu thiếp ấy sau nửa năm, cảm giác thú vị nhất không phải là kiểm điểm xem mình đã đạt được bao nhiêu phần trăm, mà là nhận ra mình đã trưởng thành lặng lẽ như thế nào.",
    ],
  },
];
