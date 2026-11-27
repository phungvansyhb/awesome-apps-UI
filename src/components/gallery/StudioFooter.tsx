import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StudioFooter() {
  const { contact } = siteConfig;

  return (
    <footer
      id="lien-he"
      className="scroll-mt-16 bg-[#111111] text-[#FAF9F6]"
    >
      <div className="mx-auto max-w-[1360px] px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Editorial closing statement */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-stone-400 uppercase">
              Liên hệ hợp tác
            </p>
            <h2 className="mt-3 max-w-lg text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-5xl">
              Tìm thấy giao diện ưng ý cho{" "}
              <span className="font-serif font-medium italic text-[#F97316]">
                dự án sắp tới
              </span>
              ?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
              Gửi tên mẫu bạn thích qua Zalo, Hotline hoặc Email để đội ngũ{" "}
              {siteConfig.brandName} tư vấn phương án tùy biến thương hiệu và
              báo giá chi tiết.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                id="footer-zalo-btn"
                href={contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-stone-950 transition-colors hover:bg-stone-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Nhắn tin qua Zalo</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                id="footer-email-btn"
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>

          {/* Centralized contact details */}
          <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.12em] text-stone-400 uppercase">
                Kênh trao đổi nhanh
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm text-stone-200">
                <li>
                  <a
                    href={contact.hotlineHref}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-stone-400" />
                    <span>Hotline: {contact.hotline}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-stone-400" />
                    <span>{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4 text-stone-400" />
                    <span>Facebook Fanpage</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.12em] text-stone-400 uppercase">
                Văn phòng Studio
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm text-stone-300">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                  <span className="leading-relaxed">{contact.address}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                  <span>{contact.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. Bảo lưu mọi
            quyền.
          </p>
          <p>Thiết kế & xây dựng tối ưu trải nghiệm trình diễn khách hàng.</p>
        </div>
      </div>
    </footer>
  );
}
