"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  Play,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { formatVnd } from "@/lib/paths";
import { KOVA_FAQS, KOVA_PRICING, KOVA_WORKFLOWS } from "./data";

export function KovaAiSaasTemplate() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(
    KOVA_WORKFLOWS[0].id
  );
  const [simulating, setSimulating] = useState(false);
  const [runCount, setRunCount] = useState(1);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeWorkflow =
    KOVA_WORKFLOWS.find((w) => w.id === activeWorkflowId) ?? KOVA_WORKFLOWS[0];

  const handleRunSimulation = () => {
    setSimulating(true);
    window.setTimeout(() => {
      setSimulating(false);
      setRunCount((c) => c + 1);
    }, 520);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] font-sans text-[#F5F4F0]">
      {/* Sticky Obsidian Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0C0E]/88 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#10B981] text-xs font-extrabold text-[#06241B]">
              K
            </span>
            <span className="text-sm font-bold tracking-tight text-white">
              KOVA <span className="font-normal text-stone-400">Workspace</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-medium text-stone-400 md:flex">
            <a href="#mo-phong" className="transition-colors hover:text-white">
              Trải nghiệm luồng
            </a>
            <a href="#uu-diem" className="transition-colors hover:text-white">
              Năng lực
            </a>
            <a href="#bang-gia" className="transition-colors hover:text-white">
              Bảng giá
            </a>
            <a href="#hoi-dap" className="transition-colors hover:text-white">
              Hỏi đáp
            </a>
          </nav>

          <a
            href="#bang-gia"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F4F0] px-4 py-2 text-xs font-semibold text-[#0B0C0E] transition-colors hover:bg-white"
          >
            <span>Dùng thử miễn phí</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Authoritative Editorial SaaS Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-[11px] font-medium tracking-[0.14em] text-stone-400 uppercase">
            <span>Nền tảng tự động hóa vận hành doanh nghiệp Việt</span>
            <span className="font-mono text-[#34D399]">
              SLA 99.98% · HẠ TẦNG VIỆT NAM
            </span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl leading-[1.06] font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem]">
                Biến quy trình thủ công hàng giờ thành một lệnh duy nhất.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-stone-400 sm:text-base">
                KOVA kết nối trực tiếp tài liệu nội bộ, Zalo OA và báo cáo kinh
                doanh để trợ lý AI xử lý chính xác theo ngữ cảnh doanh nghiệp
                bạn.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#mo-phong"
                  className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-5 py-2.5 text-xs font-bold text-[#05231A] transition-colors hover:bg-[#34D399]"
                >
                  <span>Chạy thử tương tác</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#bang-gia"
                  className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-white/30"
                >
                  Xem bảng giá
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live AI Workflow Console */}
      <section id="mo-phong" className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="overflow-hidden rounded-[24px] border border-white/12 bg-[#131519] shadow-[0_32px_90px_rgba(0,0,0,0.55)]">
          {/* Top Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0F1114] px-4 py-3 sm:px-6">
            <div className="flex flex-wrap items-center gap-1.5">
              {KOVA_WORKFLOWS.map((workflow) => {
                const isActive = workflow.id === activeWorkflow.id;
                return (
                  <button
                    key={workflow.id}
                    type="button"
                    onClick={() => setActiveWorkflowId(workflow.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-[#F5F4F0] text-[#0B0C0E]"
                        : "text-stone-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {workflow.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleRunSimulation}
              disabled={simulating}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#10B981]/40 bg-[#10B981]/12 px-3.5 py-1.5 text-xs font-semibold text-[#34D399] transition-colors hover:bg-[#10B981]/20 disabled:opacity-60"
            >
              <Play className="h-3 w-3 fill-current" />
              <span>{simulating ? "Đang phân tích..." : "Chạy mô phỏng"}</span>
            </button>
          </div>

          {/* Interactive Workspace Body */}
          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-5 lg:col-span-5">
              <div>
                <span className="font-mono text-[11px] font-medium tracking-wider text-[#34D399] uppercase">
                  {activeWorkflow.badge}
                </span>
                <div className="mt-3 rounded-2xl border border-white/10 bg-[#0B0C0E] p-4">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-stone-400">
                    <Terminal className="h-3.5 w-3.5 text-[#34D399]" />
                    <span>Lệnh tự động hóa</span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-100">
                    “{activeWorkflow.command}”
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {activeWorkflow.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/8 bg-[#181B20] p-4"
                  >
                    <p className="text-[11px] text-stone-400">{metric.label}</p>
                    <p className="mt-1.5 font-mono text-xl font-bold text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E1013] p-5 lg:col-span-7">
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Sparkles className="h-4 w-4 text-[#34D399]" />
                    <span>Kết quả phân tích · Lần chạy #{runCount}</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400">
                    {simulating ? "Đang xử lý..." : `${activeWorkflow.latencyMs}ms`}
                  </span>
                </div>

                <h3
                  className={`mt-4 text-base font-bold text-white transition-opacity sm:text-lg ${
                    simulating ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {activeWorkflow.summaryTitle}
                </h3>

                <ul
                  className={`mt-4 space-y-3 transition-opacity ${
                    simulating ? "opacity-35" : "opacity-100"
                  }`}
                >
                  {activeWorkflow.summaryPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-[11px] text-stone-500">
                <span>Đã lưu vết kiểm toán tự động</span>
                <span className="font-mono text-stone-400">
                  AES-256 · Dữ liệu cô lập
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section
        id="uu-diem"
        className="border-y border-white/10 bg-[#0F1114] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-t border-white/15 pt-5">
              <Zap className="h-5 w-5 text-[#34D399]" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Hiểu sâu tiếng Việt doanh nghiệp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Xử lý chuẩn xác hợp đồng pháp lý, chứng từ kế toán và ngữ cảnh
                giao tiếp khách hàng Việt Nam mà không cần dịch trung gian.
              </p>
            </div>
            <div className="border-t border-white/15 pt-5">
              <Lock className="h-5 w-5 text-[#34D399]" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Bảo mật cấp độ ngân hàng
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Phân quyền chi tiết theo từng phòng ban, lưu nhật ký truy cập
                đầy đủ và tùy chọn đặt máy chủ ngay tại Việt Nam.
              </p>
            </div>
            <div className="border-t border-white/15 pt-5">
              <Terminal className="h-5 w-5 text-[#34D399]" />
              <h3 className="mt-4 text-lg font-bold text-white">
                Kết nối hệ sinh thái trong 15 phút
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Đồng bộ hai chiều với Zalo OA, Google Workspace, Notion, Sapo,
                Haravan và webhook API nội bộ chỉ bằng vài thao tác cấu hình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="bang-gia" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#34D399] uppercase">
              Bảng giá minh bạch
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Mở rộng linh hoạt theo quy mô đội ngũ.
            </h2>
          </div>

          {/* Monthly / Yearly Switch */}
          <div className="inline-flex items-center rounded-full border border-white/12 bg-[#131519] p-1">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                billingCycle === "monthly"
                  ? "bg-white text-[#0B0C0E]"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              Thanh toán Tháng
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                billingCycle === "yearly"
                  ? "bg-white text-[#0B0C0E]"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              <span>Thanh toán Năm</span>
              <span className="rounded-full bg-[#10B981]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#059669]">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {KOVA_PRICING.map((tier) => {
            const displayPrice =
              billingCycle === "yearly"
                ? tier.yearlyMonthlyPrice
                : tier.monthlyPrice;
            const isSelected = selectedPlanId === tier.id;

            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-[22px] border p-6 transition-all ${
                  tier.highlighted
                    ? "border-[#10B981]/60 bg-[#141918]"
                    : "border-white/10 bg-[#121417]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    {tier.highlighted && (
                      <span className="rounded-full bg-[#10B981]/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#34D399] uppercase">
                        Phổ biến nhất
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-stone-400">
                    {tier.subtitle}
                  </p>

                  <div className="mt-6 border-b border-white/10 pb-6">
                    <p className="font-mono text-3xl font-bold tracking-tight text-white">
                      {formatVnd(displayPrice)}
                    </p>
                    <p className="mt-1 text-xs text-stone-500">
                      / tháng ·{" "}
                      {billingCycle === "yearly"
                        ? "Thanh toán theo năm"
                        : "Gia hạn linh hoạt hàng tháng"}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-stone-300"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#34D399]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPlanId(tier.id)}
                  className={`mt-8 w-full rounded-full py-3 text-xs font-bold transition-colors ${
                    isSelected
                      ? "bg-[#34D399] text-[#05231A]"
                      : tier.highlighted
                        ? "bg-[#10B981] text-[#05231A] hover:bg-[#34D399]"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {isSelected
                    ? `Đã chọn gói ${tier.name} (Demo)`
                    : tier.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section
        id="hoi-dap"
        className="border-t border-white/10 bg-[#0F1114] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[820px] px-5 sm:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#34D399] uppercase">
            Câu hỏi thường gặp
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Giải đáp nhanh trước khi triển khai
          </h2>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {KOVA_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="py-4">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-white transition-colors hover:text-[#34D399]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#34D399]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 pr-8 text-sm leading-relaxed text-stone-400">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B0C0E] py-10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-4 px-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:px-8">
          <p className="font-semibold text-stone-300">
            KOVA AI Workspace · Giải pháp tự động hóa doanh nghiệp
          </p>
          <p>Bản demo tương tác thuộc bộ sưu tập Xưởng Giao Diện</p>
        </div>
      </footer>
    </div>
  );
}
