"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock,
  Feather,
  Mail,
  Menu,
  PenLine,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { withBasePath } from "@/lib/paths";
import {
  EDITORIAL_LETTERS,
  HERO_STATS,
  JOURNAL_ESSAYS,
  JOURNEY_TABS,
  PORTFOLIO_NAV_LEFT,
  PORTFOLIO_NAV_RIGHT,
  PORTFOLIO_WORKS,
  type JournalEssay,
  type JourneyTab,
  type PortfolioWork,
} from "./data";

interface BookCoverMockupProps {
  title: string;
  author?: string;
  tone?: "coral" | "charcoal" | "sand";
  size?: "sm" | "md";
}

function BookCoverMockup({
  title,
  author = "KHÔI NGUYÊN",
  tone = "coral",
  size = "sm",
}: BookCoverMockupProps) {
  const palette =
    tone === "charcoal"
      ? {
          cover: "bg-[#181817] text-[#F5F4F0]",
          spine: "bg-[#0E0E0D]",
          sun: "from-[#F44322] to-[#F97316]",
          band: "bg-[#272725]",
          meta: "text-[#A8A49B]",
        }
      : tone === "sand"
        ? {
            cover: "bg-[#E8E2D5] text-[#141413]",
            spine: "bg-[#D5CEBF]",
            sun: "from-[#141413] to-[#44403C]",
            band: "bg-[#DDD6C7]",
            meta: "text-[#57544E]",
          }
        : {
            cover: "bg-[#FBF6F0] text-[#141413]",
            spine: "bg-[#EADCCF]",
            sun: "from-[#FF8F6B] to-[#F44322]",
            band: "bg-[#F5D6C6]",
            meta: "text-[#7A6B61]",
          };

  const dims =
    size === "md"
      ? "h-[212px] w-[148px] px-4 py-4"
      : "h-[146px] w-[104px] px-3 py-3";

  return (
    <div className="relative inline-flex items-end select-none">
      {/* Ground cast shadow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-2.5 left-2 right-1 h-4 rounded-full bg-[#141413]/15 blur-md"
      />
      {/* 3D Book body */}
      <div
        className={`relative flex overflow-hidden rounded-r-[4px] rounded-l-[2px] shadow-[10px_14px_26px_rgba(20,20,19,0.16)] ${palette.cover} ${dims}`}
      >
        {/* Spine crease */}
        <div
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-[6px] ${palette.spine} opacity-80`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[6px] w-[1px] bg-black/10"
        />

        {/* Rising sun editorial graphic */}
        <div
          aria-hidden="true"
          className={`absolute right-2 bottom-5 left-3 h-[42%] overflow-hidden rounded-t-full opacity-90`}
        >
          <div
            className={`mx-auto mt-3 h-20 w-20 rounded-full bg-gradient-to-b ${palette.sun}`}
          />
        </div>
        <div
          aria-hidden="true"
          className={`absolute right-0 bottom-0 left-[6px] h-[28%] ${palette.band}`}
        />

        {/* Cover typography */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between pl-1.5 text-left">
          <p
            className={`font-black uppercase tracking-[-0.03em] ${
              size === "md"
                ? "text-[17px] leading-[1.04]"
                : "text-[11px] leading-[1.05]"
            }`}
          >
            {title}
          </p>
          <div className="flex items-center justify-between">
            <span
              className={`font-semibold uppercase tracking-[0.14em] ${palette.meta} ${
                size === "md" ? "text-[8px]" : "text-[6.5px]"
              }`}
            >
              {author}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F44322]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function KhoiNguyenPortfolioTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive "Thư gửi ngày mai" postcard state
  const [letterIndex, setLetterIndex] = useState(0);
  const [isComposingLetter, setIsComposingLetter] = useState(false);
  const [customLetterText, setCustomLetterText] = useState("");
  const [sealedNotice, setSealedNotice] = useState<string | null>(null);

  // Journey tabs
  const [activeJourneyTab, setActiveJourneyTab] =
    useState<JourneyTab["id"]>("hanh-trinh");

  // Works filter & reader modal
  const [workFilter, setWorkFilter] = useState<
    "all" | PortfolioWork["category"]
  >("all");
  const [activeWorkModal, setActiveWorkModal] = useState<PortfolioWork | null>(
    null
  );

  // Journal filter & reader modal
  const [journalFilter, setJournalFilter] = useState<
    "Tất cả" | JournalEssay["category"]
  >("Tất cả");
  const [activeEssayModal, setActiveEssayModal] = useState<JournalEssay | null>(
    null
  );

  // Newsletter & Contact inquiry state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [contactTopic, setContactTopic] = useState("Diễn thuyết / Workshop");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const currentLetter = EDITORIAL_LETTERS[letterIndex];
  const currentJourney =
    JOURNEY_TABS.find((tab) => tab.id === activeJourneyTab) ?? JOURNEY_TABS[0];

  const visibleWorks = useMemo(() => {
    if (workFilter === "all") return PORTFOLIO_WORKS;
    return PORTFOLIO_WORKS.filter((item) => item.category === workFilter);
  }, [workFilter]);

  const visibleEssays = useMemo(() => {
    if (journalFilter === "Tất cả") return JOURNAL_ESSAYS;
    return JOURNAL_ESSAYS.filter((item) => item.category === journalFilter);
  }, [journalFilter]);

  const handleStampClick = () => {
    if (isComposingLetter) {
      const trimmed = customLetterText.trim();
      if (!trimmed) {
        setIsComposingLetter(false);
        return;
      }
      setSealedNotice("Đã niêm phong bức thư của bạn gửi tới ngày mai.");
      setIsComposingLetter(false);
      setCustomLetterText("");
      window.setTimeout(() => setSealedNotice(null), 3200);
      return;
    }

    setLetterIndex((prev) => (prev + 1) % EDITORIAL_LETTERS.length);
    setSealedNotice("Đã lật sang bức thư tiếp theo");
    window.setTimeout(() => setSealedNotice(null), 1800);
  };

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) return;
    setContactSent(true);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F4F0] font-sans text-[#141413] antialiased selection:bg-[#F44322] selection:text-white">
      {/* Editorial Magazine Masthead */}
      <header className="sticky top-0 z-40 border-b border-[#141413]/8 bg-[#F5F4F0]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:px-10">
          {/* Left editorial live status */}
          <div className="hidden items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase lg:flex">
            <span className="h-2 w-2 rounded-full bg-[#F44322]" />
            <span className="text-[#78756E]">Đang viết</span>
            <span className="text-[#78756E]">·</span>
            <span className="text-[#141413]">Cuốn sách thứ hai</span>
          </div>

          {/* Center split navigation around bold vermilion wordmark */}
          <nav
            aria-label="Điều hướng portfolio"
            className="hidden items-center gap-7 text-[11px] font-semibold tracking-[0.14em] uppercase md:flex lg:gap-9"
          >
            {PORTFOLIO_NAV_LEFT.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 transition-colors ${
                  item.active
                    ? "text-[#F44322]"
                    : "text-[#141413]/80 hover:text-[#F44322]"
                }`}
              >
                {item.active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F44322]" />
                )}
                <span>{item.label}</span>
              </a>
            ))}

            <a
              href="#trang-chu"
              className="px-2 text-[22px] font-black tracking-[-0.05em] text-[#F44322]"
            >
              KHÔI
            </a>

            {PORTFOLIO_NAV_RIGHT.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#141413]/80 transition-colors hover:text-[#F44322]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile brand mark */}
          <a
            href="#trang-chu"
            className="text-xl font-black tracking-[-0.05em] text-[#F44322] md:hidden"
          >
            KHÔI NGUYÊN
          </a>

          {/* Right pill CTA matching reference */}
          <div className="flex items-center gap-2.5">
            <a
              href="#lien-he"
              className="group inline-flex items-center gap-3 rounded-full border border-[#141413]/25 bg-transparent py-1.5 pr-1.5 pl-4 text-[11px] font-semibold tracking-[0.14em] text-[#141413] uppercase transition-colors hover:border-[#141413] sm:pl-5"
            >
              <span>Liên hệ</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F44322] text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12 sm:h-8 sm:w-8">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#141413]/20 text-[#141413] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#141413]/10 bg-[#FAF9F6] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2 text-xs font-semibold tracking-[0.12em] uppercase">
              {[...PORTFOLIO_NAV_LEFT, ...PORTFOLIO_NAV_RIGHT].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-[#141413] hover:bg-[#ECE9E2]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO POSTER SECTION — Faithful Editorial Magazine Composition */}
      <section
        id="trang-chu"
        className="relative overflow-hidden border-b border-[#141413]/10 bg-[#F5F4F0]"
      >
        <div className="relative mx-auto max-w-[1400px] px-5 pt-5 pb-10 sm:px-8 sm:pt-7 lg:min-h-[710px] lg:px-10 lg:pt-6 lg:pb-12">
          {/* TOP LAYER: Giant Vermilion First Name + Latest Book Card */}
          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <h1 className="select-none">
              <span className="block text-[clamp(4.8rem,15.5vw,14.2rem)] leading-[0.83] font-black tracking-[-0.048em] text-[#F44322]">
                KHÔI
              </span>
              <span className="sr-only">
                Khôi Nguyên — Tác giả, Nhà nghiên cứu & Giám đốc Sáng tạo
              </span>
            </h1>

            {/* Top-right Latest Book Showcase Card */}
            <div className="relative z-30 w-full max-w-[320px] lg:mt-2 lg:w-[305px]">
              <button
                type="button"
                onClick={() => setActiveWorkModal(PORTFOLIO_WORKS[0])}
                className="group block w-full text-left"
              >
                <div className="flex h-[182px] w-full items-center justify-center rounded-2xl bg-[#ECE9E2] transition-colors duration-300 group-hover:bg-[#E5E0D6]">
                  <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-2">
                    <BookCoverMockup
                      title="SỐNG CÓ CHỦ ĐÍCH"
                      tone="coral"
                      size="sm"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold tracking-tight text-[#141413]">
                    Ấn phẩm mới nhất
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#78756E]">
                      Tư duy / Hành vi / Đời sống
                    </span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F44322] text-white transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* MIDDLE LAYER: Giant Charcoal Last Name behind portrait shoulders */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative z-10 mt-3 flex justify-end select-none lg:-mt-4"
          >
            <span className="block text-right text-[clamp(3.6rem,11.6vw,10.6rem)] leading-[0.86] font-black tracking-[-0.048em] text-[#141413]">
              NGUYÊN
            </span>
          </div>

          {/* CENTER FOREGROUND: Transparent Cutout Studio Portrait */}
          <div className="relative z-20 mx-auto -mt-8 mb-6 flex justify-center lg:pointer-events-none lg:absolute lg:bottom-0 lg:left-[46%] lg:m-0 lg:-translate-x-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath("/images/khoi-nguyen-portrait.webp")}
              alt="Chân dung Khôi Nguyên — Tác giả và Giám đốc Sáng tạo"
              width={643}
              height={1072}
              loading="eager"
              className="h-[360px] w-auto object-contain object-bottom drop-shadow-[0_18px_36px_rgba(20,20,19,0.12)] sm:h-[440px] lg:h-[600px] xl:h-[630px]"
            />
          </div>

          {/* BOTTOM LAYER: Left Editorial Bio + Right Tilted Interactive Postcard */}
          <div className="relative z-30 mt-2 flex flex-col justify-between gap-8 lg:mt-4 lg:flex-row lg:items-end">
            {/* Bottom-Left Bio */}
            <div className="max-w-[290px]">
              <p className="text-[10.5px] font-semibold tracking-[0.14em] text-[#57544E] uppercase">
                Tác giả <span className="text-[#F44322]">/</span> Tư duy sáng
                tạo <span className="text-[#F44322]">/</span> Nghiên cứu
              </p>
              <p className="mt-3.5 text-[22px] leading-[1.28] font-medium tracking-[-0.025em] text-[#141413]">
                Những câu chuyện và ý tưởng cho một ngày mai sâu sắc hơn.
              </p>
              <div className="mt-4 h-[2px] w-7 bg-[#F44322]" />
              <p className="mt-4 text-[12.5px] leading-[1.7] text-[#6E6B64]">
                Tôi viết về hành vi con người, nhịp làm việc hiện đại và những ý
                tưởng giúp kiến tạo một đời sống tĩnh tại, có chủ đích hơn.
              </p>
            </div>

            {/* Bottom-Right Interactive "A Letter to Tomorrow" Tilted Postcard */}
            <div className="relative w-full sm:max-w-[395px] lg:mb-1 lg:-rotate-[1.2deg]">
              <div className="relative rounded-[4px] border border-[#141413]/8 bg-[#FAF9F6] p-6 shadow-[0_24px_55px_rgba(20,20,19,0.09)] transition-transform duration-300 hover:rotate-0">
                {/* Header & Interactive Red Stamp */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-[#7A7770] uppercase">
                      Thư gửi ngày mai
                    </p>
                    <p className="mt-1 text-[10.5px] text-[#9A968E]">
                      {currentLetter.location}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleStampClick}
                    title={
                      isComposingLetter
                        ? "Niêm phong bức thư của bạn"
                        : "Bấm để lật bức thư tiếp theo"
                    }
                    className="group flex h-[62px] w-[62px] shrink-0 -rotate-12 flex-col items-center justify-center rounded-full border-[1.5px] border-[#F44322] bg-[#FAF9F6] text-center text-[8.5px] leading-[1.2] font-bold tracking-[0.08em] text-[#F44322] uppercase transition-all duration-300 hover:rotate-0 hover:bg-[#F44322] hover:text-white active:scale-95"
                  >
                    <span>Niêm</span>
                    <span>phong</span>
                  </button>
                </div>

                {/* Letter Body or Custom Composer */}
                {isComposingLetter ? (
                  <div className="mt-4">
                    <textarea
                      rows={3}
                      value={customLetterText}
                      onChange={(event) =>
                        setCustomLetterText(event.target.value)
                      }
                      placeholder="Gửi ngày mai, tôi muốn dành thời gian cho..."
                      className="w-full resize-none rounded border border-[#141413]/15 bg-white px-3 py-2 font-mono text-xs leading-relaxed text-[#141413] placeholder:text-[#9A968E] focus:border-[#F44322] focus:outline-none"
                    />
                  </div>
                ) : (
                  <div className="mt-3.5 min-h-[78px] font-mono text-[13px] leading-[1.72] text-[#1D1D1B]">
                    <p className="text-[#78756E]">{currentLetter.salutation}</p>
                    <p className="mt-1">{currentLetter.body}</p>
                  </div>
                )}

                {sealedNotice && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#F44322]">
                    <Check className="h-3.5 w-3.5" />
                    <span>{sealedNotice}</span>
                  </p>
                )}

                {/* Postcard Footer Controls */}
                <div className="mt-4 flex items-center justify-between border-t border-[#141413]/8 pt-3 text-[10px] font-semibold tracking-[0.14em] text-[#8A8780] uppercase">
                  <span>Bức thư {currentLetter.number}</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsComposingLetter((prev) => !prev)}
                      className="inline-flex items-center gap-1 text-[#141413] transition-colors hover:text-[#F44322]"
                    >
                      <PenLine className="h-3 w-3" />
                      <span>{isComposingLetter ? "Đọc thư" : "Viết thử"}</span>
                    </button>
                    {!isComposingLetter && (
                      <button
                        type="button"
                        onClick={handleStampClick}
                        className="inline-flex items-center gap-1 text-[#F44322] hover:underline"
                      >
                        <span>Tiếp</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GIỚI THIỆU & HÀNH TRÌNH */}
      <section
        id="gioi-thieu"
        className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Manifesto + Stats */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#F44322] uppercase">
              01 · Về Khôi Nguyên
            </p>
            <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.03em] text-[#141413] sm:text-4xl">
              Giữa nhịp sống vội vã,{" "}
              <span className="font-serif font-medium italic text-[#F44322]">
                chiều sâu
              </span>{" "}
              là lợi thế bền vững nhất.
            </h2>
            <p className="mt-5 text-sm leading-[1.8] text-[#57544E]">
              Tôi dành phần lớn thời gian quan sát cách con người làm việc, đọc
              sách và tạo ra giá trị thật. Trang web này là phòng đọc mở — nơi
              lưu trữ những cuốn sách, bản nghiên cứu và trang nhật ký được chắt
              lọc qua nhiều năm.
            </p>

            {/* 3 Editorial Stats */}
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[#141413]/12 pt-6">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black tracking-[-0.03em] text-[#141413] tabular-nums sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-[#78756E]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Journey / Philosophy Tabs */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#141413]/12 lg:pl-12">
            <div
              role="tablist"
              aria-label="Hành trình và triết lý"
              className="flex flex-wrap gap-2 border-b border-[#141413]/10 pb-5"
            >
              {JOURNEY_TABS.map((tab) => {
                const isActive = tab.id === activeJourneyTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveJourneyTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-[#141413] text-[#F5F4F0]"
                        : "border border-[#141413]/15 bg-transparent text-[#57544E] hover:border-[#141413] hover:text-[#141413]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-bold tracking-tight text-[#141413] sm:text-2xl">
                {currentJourney.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57544E]">
                {currentJourney.body}
              </p>

              <div className="mt-7 divide-y divide-[#141413]/10 border-t border-[#141413]/10">
                {currentJourney.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-4"
                  >
                    <span className="font-mono text-xs font-medium text-[#F44322] sm:col-span-3">
                      {item.period}
                    </span>
                    <div className="sm:col-span-9">
                      <p className="text-sm font-bold text-[#141413]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6E6B64]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TÁC PHẨM & DỰ ÁN TUYỂN CHỌN */}
      <section
        id="tac-pham"
        className="scroll-mt-20 border-y border-[#141413]/10 bg-[#ECE9E2]/65"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#F44322] uppercase">
                02 · Tác phẩm & Ấn phẩm
              </p>
              <h2 className="mt-2.5 text-3xl font-bold tracking-[-0.03em] text-[#141413] sm:text-4xl">
                Sách, nghiên cứu & dự án biên tập.
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all" as const, label: "Tất cả" },
                { id: "sach" as const, label: "Sách xuất bản" },
                { id: "nghien-cuu" as const, label: "Nghiên cứu" },
                { id: "co-van" as const, label: "Cố vấn sáng tạo" },
              ].map((filter) => {
                const active = workFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setWorkFilter(filter.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      active
                        ? "bg-[#F44322] text-white"
                        : "border border-[#141413]/15 bg-[#F5F4F0] text-[#57544E] hover:border-[#141413] hover:text-[#141413]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visibleWorks.map((work) => (
              <article
                key={work.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#141413]/10 bg-[#FAF9F6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#141413]/30 hover:shadow-[0_24px_55px_rgba(20,20,19,0.08)] sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex shrink-0 items-center justify-center rounded-xl bg-[#ECE9E2] px-6 py-6">
                    <BookCoverMockup
                      title={work.title}
                      tone={work.coverTone}
                      size="sm"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
                      <span className="text-[#F44322]">
                        {work.categoryLabel}
                      </span>
                      <span className="text-[#9A968E]">·</span>
                      <span className="font-mono text-[#78756E]">
                        {work.year}
                      </span>
                    </div>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#141413]">
                      {work.title}
                    </h3>
                    <p className="mt-1 font-serif text-sm italic text-[#57544E]">
                      {work.subtitle}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#6E6B64]">
                      {work.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#141413]/8 pt-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#ECE9E2] px-2.5 py-1 text-[11px] font-medium text-[#57544E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveWorkModal(work)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141413] transition-colors group-hover:text-[#F44322]"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Đọc trích đoạn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NHẬT KÝ & TIỂU LUẬN (MAGAZINE INDEX) */}
      <section
        id="nhat-ky"
        className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#F44322] uppercase">
              03 · Nhật ký & Tiểu luận
            </p>
            <h2 className="mt-2.5 text-3xl font-bold tracking-[-0.03em] text-[#141413] sm:text-4xl">
              Những ghi chép đọc chậm cuối tuần.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["Tất cả", "Tư duy", "Hành vi", "Làm việc", "Đời sống"] as const).map(
              (cat) => {
                const active = journalFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setJournalFilter(cat)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? "bg-[#141413] text-[#F5F4F0]"
                        : "border border-[#141413]/15 text-[#57544E] hover:border-[#141413] hover:text-[#141413]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div className="mt-10 divide-y divide-[#141413]/12 border-y border-[#141413]/12">
          {visibleEssays.map((essay) => (
            <button
              key={essay.id}
              type="button"
              onClick={() => setActiveEssayModal(essay)}
              className="group grid w-full items-center gap-4 py-6 text-left transition-colors hover:bg-[#ECE9E2]/45 sm:px-3 md:grid-cols-12"
            >
              <div className="flex items-center gap-3 md:col-span-2">
                <span className="font-mono text-xs font-semibold text-[#F44322]">
                  {essay.number}
                </span>
                <span className="rounded-full border border-[#141413]/15 px-2.5 py-0.5 text-[10.5px] font-semibold text-[#57544E]">
                  {essay.category}
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-lg font-bold tracking-tight text-[#141413] transition-colors group-hover:text-[#F44322] sm:text-xl">
                  {essay.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs text-[#6E6B64]">
                  {essay.lead}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 text-xs text-[#78756E] md:col-span-3 md:justify-end">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{essay.readTime}</span>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#141413]/20 text-[#141413] transition-all group-hover:border-[#F44322] group-hover:bg-[#F44322] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 5: BẢN TIN CHỦ NHẬT & LIÊN HỆ HỢP TÁC */}
      <footer
        id="lien-he"
        className="scroll-mt-20 bg-[#141413] text-[#F5F4F0]"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left: Sunday Newsletter */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#F44322] uppercase">
                <Feather className="h-3.5 w-3.5" />
                <span>Thư Chủ Nhật</span>
              </div>
              <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.03em] text-white sm:text-4xl">
                Một ý tưởng đáng suy ngẫm, gửi vào sáng{" "}
                <span className="font-serif font-medium italic text-[#F44322]">
                  Chủ Nhật
                </span>
                .
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#A8A49B]">
                Hơn 48.000 độc giả đón đọc mỗi tuần. Không quảng cáo ồn ào, chỉ
                có những ghi chép chọn lọc về tư duy sáng tạo, sách hay và nghệ
                thuật sống có chủ đích.
              </p>

              {newsletterSubscribed ? (
                <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-[#F44322]/40 bg-[#F44322]/10 px-4 py-3.5 text-sm text-[#FAF9F6]">
                  <Sparkles className="h-4 w-4 shrink-0 text-[#F44322]" />
                  <span>
                    Cảm ơn bạn đã đăng ký! Bức thư đầu tiên sẽ tới hộp thư vào
                    sáng Chủ Nhật này.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="mt-6 flex flex-col gap-2.5 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    placeholder="email-cua-ban@domain.vn"
                    className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-[#78756E] focus:border-[#F44322] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#F44322] px-6 py-3 text-xs font-bold tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-90"
                  >
                    <span>Đăng ký đọc</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Editorial Contact Form */}
            <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-12">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#A8A49B] uppercase">
                Trao đổi & Mời hợp tác
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Diễn thuyết / Workshop",
                  "Cố vấn thương hiệu",
                  "Bản quyền & Xuất bản",
                  "Trò chuyện cà phê",
                ].map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setContactTopic(topic)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      contactTopic === topic
                        ? "bg-white text-[#141413]"
                        : "border border-white/15 text-[#A8A49B] hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {contactSent ? (
                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="inline-flex items-center gap-2 text-sm font-bold text-[#F44322]">
                    <Check className="h-4 w-4" />
                    <span>Đã nhận lời nhắn của bạn</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#A8A49B]">
                    Tôi thường đọc và hồi âm trực tiếp trong vòng 48 giờ làm
                    việc. Cảm ơn bạn đã kết nối!
                  </p>
                  <button
                    type="button"
                    onClick={() => setContactSent(false)}
                    className="mt-4 text-xs font-semibold text-white underline underline-offset-4 hover:text-[#F44322]"
                  >
                    Gửi thêm một lời nhắn khác
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="mt-5 grid gap-3.5 sm:grid-cols-2"
                >
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(event) => setContactName(event.target.value)}
                    placeholder="Họ và tên của bạn"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#78756E] focus:border-[#F44322] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(event) => setContactEmail(event.target.value)}
                    placeholder="Địa chỉ email"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#78756E] focus:border-[#F44322] focus:outline-none"
                  />
                  <textarea
                    rows={3}
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                    placeholder={`Chia sẻ đôi nét về lời mời (${contactTopic})...`}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#78756E] focus:border-[#F44322] focus:outline-none sm:col-span-2"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
                    <span className="inline-flex items-center gap-2 text-xs text-[#A8A49B]">
                      <Mail className="h-3.5 w-3.5 text-[#F44322]" />
                      <span>hello@khoinguyen.vn</span>
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold tracking-[0.08em] text-[#141413] uppercase transition-colors hover:bg-[#F44322] hover:text-white"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Gửi lời nhắn</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#78756E] sm:flex-row sm:items-center">
            <p className="font-black tracking-[-0.03em] text-[#F44322]">
              KHÔI NGUYÊN · EDITORIAL PORTFOLIO
            </p>
            <p>© 2026 Khôi Nguyên. Thiết kế & biên tập tại Việt Nam.</p>
          </div>
        </div>
      </footer>

      {/* MODAL: ĐỌC TRÍCH ĐOẠN SÁCH / DỰ ÁN */}
      {activeWorkModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeWorkModal.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#141413]/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveWorkModal(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FAF9F6] p-6 text-[#141413] shadow-2xl sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Đóng khung đọc trích đoạn"
              onClick={() => setActiveWorkModal(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#141413]/15 text-[#141413] hover:bg-[#ECE9E2]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <BookCoverMockup
                  title={activeWorkModal.title}
                  tone={activeWorkModal.coverTone}
                  size="sm"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#F44322] uppercase">
                  {activeWorkModal.categoryLabel} · {activeWorkModal.year}
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-tight">
                  {activeWorkModal.title}
                </h3>
                <p className="mt-1 font-serif text-sm italic text-[#57544E]">
                  {activeWorkModal.subtitle}
                </p>
                <p className="mt-2 font-mono text-xs text-[#78756E]">
                  {activeWorkModal.metrics}
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-4 border-t border-[#141413]/10 pt-6 font-serif text-base leading-[1.85] text-[#2A2926]">
              {activeWorkModal.excerpt.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#141413]/10 pt-5">
              <span className="text-xs text-[#78756E]">
                Trích đoạn từ bản in chính thức
              </span>
              <a
                href="#lien-he"
                onClick={() => setActiveWorkModal(null)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F44322] px-5 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
              >
                <span>Đặt ấn phẩm / Liên hệ</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ĐỌC TIỂU LUẬN NHẬT KÝ */}
      {activeEssayModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeEssayModal.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#141413]/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveEssayModal(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FAF9F6] p-6 text-[#141413] shadow-2xl sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Đóng bài viết"
              onClick={() => setActiveEssayModal(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#141413]/15 text-[#141413] hover:bg-[#ECE9E2]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
              <span className="text-[#F44322]">
                Bài số {activeEssayModal.number}
              </span>
              <span className="text-[#9A968E]">·</span>
              <span className="text-[#57544E]">
                {activeEssayModal.category}
              </span>
              <span className="text-[#9A968E]">·</span>
              <span className="text-[#78756E]">
                {activeEssayModal.readTime}
              </span>
            </div>

            <h3 className="mt-3 pr-8 text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              {activeEssayModal.title}
            </h3>
            <p className="mt-3 font-serif text-base italic leading-relaxed text-[#57544E]">
              {activeEssayModal.lead}
            </p>

            <div className="mt-6 space-y-4 border-t border-[#141413]/10 pt-6 text-[15px] leading-[1.85] text-[#2A2926]">
              {activeEssayModal.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#141413]/10 pt-5 text-xs text-[#78756E]">
              <span>Xuất bản {activeEssayModal.date}</span>
              <button
                type="button"
                onClick={() => setActiveEssayModal(null)}
                className="font-semibold text-[#141413] hover:text-[#F44322]"
              >
                Đóng bài đọc
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
