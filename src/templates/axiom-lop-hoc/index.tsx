"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Lightbulb,
  Menu,
  Pause,
  Play,
  Presentation,
  RotateCcw,
  Sigma,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { formatVnd } from "@/lib/paths";
import {
  AXIOM_NAV_ITEMS,
  CLASSROOM_COURSES,
  CLASSROOM_TOPICS,
  PRICING_TIERS,
  SIMULATIONS,
  type ClassroomCourse,
  type SimulationId,
} from "./data";

interface ParameterSliderProps {
  symbol: string;
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  accentColor: string;
  onChange: (next: number) => void;
}

function ParameterSlider({
  symbol,
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  accentColor,
  onChange,
}: ParameterSliderProps) {
  const percent = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  return (
    <label className="group block cursor-pointer select-none">
      <div className="flex items-baseline gap-1.5 text-xs">
        <span
          className="font-serif text-[14px] font-semibold italic"
          style={{ color: accentColor }}
        >
          {symbol}
        </span>
        <span className="font-mono text-[11.5px] font-semibold text-[#111318] tabular-nums">
          {valueLabel}
        </span>
      </div>
      <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.12em] text-[#8A909E] uppercase">
        {label}
      </span>
      <div className="relative mt-2 h-1.5 w-full">
        <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded-full bg-[#E5E8F0]" />
        <div
          className="absolute top-1/2 left-0 h-[2.5px] -translate-y-1/2 rounded-full transition-[width] duration-75"
          style={{ width: `${percent}%`, backgroundColor: accentColor }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(parseFloat(event.target.value))}
          aria-label={label}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow-xs transition-transform group-hover:scale-125"
          style={{ left: `${percent}%`, backgroundColor: accentColor }}
        />
      </div>
    </label>
  );
}

export function AxiomClassroomTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active simulation (0..3)
  const [simIndex, setSimIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [clock, setClock] = useState(0);
  const lastFrameRef = useRef<number | null>(null);

  // Simulation 1: Sine wave y = A sin(ωx + φ)
  const [amplitude, setAmplitude] = useState(1.0);
  const [frequency, setFrequency] = useState(1.2);
  const [phasePi, setPhasePi] = useState(0.0);

  // Simulation 2: Projectile motion
  const [projSpeed, setProjSpeed] = useState(26);
  const [projAngle, setProjAngle] = useState(45);
  const [projGravity, setProjGravity] = useState(9.8);

  // Simulation 3: Simple pendulum
  const [pendAngle, setPendAngle] = useState(32);
  const [pendLength, setPendLength] = useState(1.6);
  const [pendDamping, setPendDamping] = useState(0.08);

  // Simulation 4: Compound interest
  const [principalTrieu, setPrincipalTrieu] = useState(100);
  const [annualRate, setAnnualRate] = useState(11);
  const [years, setYears] = useState(18);

  // Topics & Courses & Pricing states
  const [topicFilter, setTopicFilter] = useState<string>("Tất cả");
  const [expandedCourseId, setExpandedCourseId] = useState<string>(
    CLASSROOM_COURSES[0].id
  );
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">(
    "annual"
  );
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authRole, setAuthRole] = useState<"Học sinh" | "Giáo viên">(
    "Học sinh"
  );
  const [authEmail, setAuthEmail] = useState("");
  const [authSubmitted, setAuthSubmitted] = useState(false);
  const [previewCourse, setPreviewCourse] = useState<ClassroomCourse | null>(
    null
  );

  const activeSim = SIMULATIONS[simIndex] ?? SIMULATIONS[0];

  // Smooth 60fps simulation clock
  useEffect(() => {
    if (!isPlaying) {
      lastFrameRef.current = null;
      return;
    }

    let rafId = 0;
    const tick = (now: number) => {
      if (lastFrameRef.current !== null) {
        const dt = Math.min((now - lastFrameRef.current) / 1000, 0.05);
        setClock((prev) => prev + dt);
      }
      lastFrameRef.current = now;
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafId);
      lastFrameRef.current = null;
    };
  }, [isPlaying]);

  const handleSelectSimulation = (simId: SimulationId) => {
    const idx = SIMULATIONS.findIndex((s) => s.id === simId);
    if (idx !== -1) {
      setSimIndex(idx);
      const lab = document.getElementById("phong-thi-nghiem");
      lab?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleResetActiveSim = () => {
    setClock(0);
    if (activeSim.id === "sine-wave") {
      setAmplitude(1.0);
      setFrequency(1.2);
      setPhasePi(0.0);
    } else if (activeSim.id === "projectile") {
      setProjSpeed(26);
      setProjAngle(45);
      setProjGravity(9.8);
    } else if (activeSim.id === "pendulum") {
      setPendAngle(32);
      setPendLength(1.6);
      setPendDamping(0.08);
    } else {
      setPrincipalTrieu(100);
      setAnnualRate(11);
      setYears(18);
    }
  };

  // --- Geometry calculations for SVG Graph Canvas (viewBox 800 x 380) ---
  const sineGeometry = useMemo(() => {
    const cx = 165;
    const cy = 190;
    const baseRadius = 56;
    const r = baseRadius * amplitude;
    const waveStartX = 295;
    const waveWidth = 450;
    const phaseRad = phasePi * Math.PI;
    const angle = clock * frequency * 1.45 + phaseRad;

    const dotX = cx + r * Math.cos(angle);
    const dotY = cy - r * Math.sin(angle);

    // Build crisp SVG polyline path for sine wave
    const samples = 140;
    const points: string[] = [];
    for (let i = 0; i <= samples; i++) {
      const ratio = i / samples;
      const x = waveStartX + ratio * waveWidth;
      // Traveling wave synchronized with the orbiting point at x = waveStartX
      const theta = angle - ratio * frequency * Math.PI * 3.8;
      const y = cy - r * Math.sin(theta);
      points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    }

    // Wavelength in px
    const pxPerCycle = waveWidth / (frequency * 1.9);
    const peak1X = waveStartX + Math.min(waveWidth * 0.25, pxPerCycle * 0.55);
    const peak2X = Math.min(waveStartX + waveWidth - 36, peak1X + pxPerCycle);
    const peakY = cy - r;

    // Small arc for phase angle φ
    const arcR = Math.min(20, Math.max(12, r * 0.34));
    const normAngle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const arcEndX = cx + arcR * Math.cos(normAngle);
    const arcEndY = cy - arcR * Math.sin(normAngle);
    const largeArc = normAngle > Math.PI ? 1 : 0;
    const phaseArcPath = `M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 ${largeArc} 0 ${arcEndX.toFixed(1)} ${arcEndY.toFixed(1)}`;

    return {
      cx,
      cy,
      r,
      waveStartX,
      waveEndX: waveStartX + waveWidth,
      dotX,
      dotY,
      path: points.join(" "),
      peak1X,
      peak2X,
      peakY,
      phaseArcPath,
    };
  }, [amplitude, clock, frequency, phasePi]);

  const projectileGeometry = useMemo(() => {
    const originX = 115;
    const groundY = 300;
    const rad = (projAngle * Math.PI) / 180;
    const vx = projSpeed * Math.cos(rad);
    const vy = projSpeed * Math.sin(rad);
    const totalTime = (2 * vy) / projGravity;
    const maxRange = vx * totalTime;
    const maxHeight = (vy * vy) / (2 * projGravity);

    // Fixed visual scale so changing parameters visibly alters height & range
    const scale = 6.2;
    const samples = 80;
    const pts: string[] = [];
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * totalTime;
      const px = originX + vx * t * scale;
      const py = groundY - (vy * t - 0.5 * projGravity * t * t) * scale;
      if (px <= 740 && py >= 34) {
        pts.push(`${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`);
      }
    }

    const cycleT = totalTime > 0 ? (clock * 1.15) % totalTime : 0;
    const ballX = Math.min(735, originX + vx * cycleT * scale);
    const ballY = Math.max(
      38,
      groundY - (vy * cycleT - 0.5 * projGravity * cycleT * cycleT) * scale
    );
    const apexX = Math.min(720, originX + (maxRange / 2) * scale);
    const apexY = Math.max(46, groundY - maxHeight * scale);
    const landX = Math.min(735, originX + maxRange * scale);

    return {
      originX,
      groundY,
      path: pts.join(" "),
      ballX,
      ballY,
      apexX,
      apexY,
      landX,
      maxRange,
      maxHeight,
    };
  }, [clock, projAngle, projGravity, projSpeed]);

  const pendulumGeometry = useMemo(() => {
    const pivotX = 185;
    const pivotY = 66;
    const omega = Math.sqrt(9.8 / pendLength);
    const maxRad = (pendAngle * Math.PI) / 180;
    const loopT = clock % 12;
    const currentTheta = maxRad * Math.exp(-pendDamping * loopT * 0.45) * Math.cos(omega * loopT);
    const rodLenPx = 88 + pendLength * 55;
    const bobX = pivotX + rodLenPx * Math.sin(currentTheta);
    const bobY = pivotY + rodLenPx * Math.cos(currentTheta);

    // Right-side oscillation trace
    const traceStartX = 335;
    const traceWidth = 405;
    const traceMidY = 195;
    const pts: string[] = [];
    const samples = 110;
    for (let i = 0; i <= samples; i++) {
      const ratio = i / samples;
      const tSample = ratio * 10;
      const th =
        maxRad * Math.exp(-pendDamping * tSample * 0.45) * Math.cos(omega * (tSample + loopT * 0.5));
      const x = traceStartX + ratio * traceWidth;
      const y = traceMidY - th * 115;
      pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    }

    const period = 2 * Math.PI * Math.sqrt(pendLength / 9.8);
    return {
      pivotX,
      pivotY,
      bobX,
      bobY,
      traceStartX,
      traceMidY,
      traceEndX: traceStartX + traceWidth,
      path: pts.join(" "),
      period,
    };
  }, [clock, pendAngle, pendDamping, pendLength]);

  const compoundGeometry = useMemo(() => {
    const leftX = 110;
    const rightX = 720;
    const bottomY = 305;
    const topY = 68;
    const chartW = rightX - leftX;
    const chartH = bottomY - topY;
    const r = annualRate / 100;

    const finalCompound = principalTrieu * Math.pow(1 + r, years);
    const finalSimple = principalTrieu * (1 + r * years);
    const yMax = Math.max(finalCompound * 1.12, principalTrieu * 2.2);

    const compoundPts: string[] = [];
    const areaPts: string[] = [];
    const simplePts: string[] = [];
    const samples = 60;

    for (let i = 0; i <= samples; i++) {
      const ratio = i / samples;
      const t = ratio * years;
      const x = leftX + ratio * chartW;
      const valC = principalTrieu * Math.pow(1 + r, t);
      const valS = principalTrieu * (1 + r * t);
      const yC = bottomY - (valC / yMax) * chartH;
      const yS = bottomY - (valS / yMax) * chartH;
      compoundPts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${yC.toFixed(1)}`);
      simplePts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${yS.toFixed(1)}`);
      areaPts.push(`${x.toFixed(1)},${yC.toFixed(1)}`);
    }

    const areaPath = `M${leftX},${bottomY} L${areaPts.join(" L")} L${rightX},${bottomY} Z`;
    const activeRatio = 0.25 + 0.75 * ((Math.sin(clock * 0.55) + 1) / 2);
    const activeT = activeRatio * years;
    const activeVal = principalTrieu * Math.pow(1 + r, activeT);
    const dotX = leftX + activeRatio * chartW;
    const dotY = bottomY - (activeVal / yMax) * chartH;

    return {
      leftX,
      rightX,
      bottomY,
      topY,
      compoundPath: compoundPts.join(" "),
      simplePath: simplePts.join(" "),
      areaPath,
      dotX,
      dotY,
      activeT,
      activeVal,
      finalCompound,
      finalSimple,
    };
  }, [annualRate, clock, principalTrieu, years]);

  const visibleTopics = useMemo(() => {
    if (topicFilter === "Tất cả") return CLASSROOM_TOPICS;
    return CLASSROOM_TOPICS.filter((item) => item.track === topicFilter);
  }, [topicFilter]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCFCFD] font-sans text-[#111318] antialiased selection:bg-[#2F5CE5] selection:text-white">
      {/* Minimalist Academic Header */}
      <header className="sticky top-0 z-40 border-b border-[#ECEFF5] bg-[#FCFCFD]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-4 px-5 sm:px-8">
          {/* Left Axiom Brand Emblem */}
          <a href="#trang-chu" className="group flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#111318] font-serif text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105"
            >
              ∀
            </span>
            <span className="font-serif text-[17px] font-semibold tracking-tight text-[#111318]">
              Axiom
            </span>
          </a>

          {/* Center Nav */}
          <nav
            aria-label="Điều hướng lớp học"
            className="hidden items-center gap-7 text-xs font-medium text-[#5B606E] md:flex"
          >
            {AXIOM_NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#111318]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Sign-in */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                setAuthSubmitted(false);
                setAuthModalOpen(true);
              }}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#111318] transition-colors hover:bg-[#F1F3F8]"
            >
              Đăng nhập
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E4E7EE] text-[#111318] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#ECEFF5] bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2 text-sm font-medium text-[#4A4F5C]">
              {AXIOM_NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-[#F5F7FB]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION — Faithful Shadcn Hero Section 47 Interactive Math Lab */}
      <section
        id="trang-chu"
        className="relative overflow-hidden pb-16 pt-10 sm:pt-14 sm:pb-24"
      >
        {/* Subtle floating academic math margin doodles (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-8 mx-auto hidden max-w-[1360px] select-none lg:block"
        >
          {/* Left doodles */}
          <svg
            viewBox="0 0 60 50"
            className="absolute top-2 left-10 h-11 w-14 text-[#D3D8E3]"
            fill="none"
          >
            <path
              d="M8 42 L48 42 L48 10 Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path d="M40 42 L40 34 L48 34" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="absolute top-24 left-28 font-serif text-xs italic text-[#C9CFD9]">
            a² + b² = c²
          </span>
          <svg
            viewBox="0 0 56 50"
            className="absolute top-40 left-6 h-11 w-12 text-[#D3D8E3]"
            fill="none"
          >
            <path d="M6 42 H50 M28 6 V46" stroke="currentColor" strokeWidth="1" />
            <path
              d="M12 14 Q28 52 44 14"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span className="absolute top-52 left-40 font-serif text-xs italic text-[#C9CFD9]">
            sin²θ + cos²θ = 1
          </span>

          {/* Right doodles */}
          <svg
            viewBox="0 0 52 52"
            className="absolute top-0 right-16 h-12 w-12 text-[#D3D8E3]"
            fill="none"
          >
            <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="1.1" />
            <path d="M26 26 L41 16" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          <span className="absolute top-20 right-24 font-serif text-xs italic text-[#C9CFD9]">
            ∫ 2x dx = x² + C
          </span>
          <svg
            viewBox="0 0 64 44"
            className="absolute top-40 right-12 h-10 w-14 text-[#D3D8E3]"
            fill="none"
          >
            <path
              d="M8 24 L52 24 M45 18 L52 24 L45 30 M8 24 L42 10 M34 8 L42 10 L38 17"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute top-56 right-36 font-serif text-xs italic text-[#C9CFD9]">
            F = m · a
          </span>
        </div>

        {/* Soft top cobalt radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-28 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[#2F5CE5]/[0.05] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[1060px] px-5 sm:px-8">
          {/* Centered Academic Headline */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-[2.6rem] leading-[1.1] font-medium tracking-[-0.025em] text-[#111318] sm:text-6xl lg:text-[4.1rem]">
              Nhìn thấy toán học{" "}
              <span className="relative inline-block italic text-[#2F5CE5]">
                chuyển động.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 240 14"
                  fill="none"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-1.5 left-0 h-3 w-full"
                >
                  <path
                    d="M3 8.5C32 2.5 58 13 92 7C126 1 154 12.5 188 6.5C210 3 226 8.5 237 6"
                    stroke="#2F5CE5"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#5E6472] sm:text-[15px]">
              Kéo bất kỳ tham số nào trong công thức và đồ thị sẽ tự vẽ lại ngay
              khi bạn di chuyển. Sóng hình sin, quỹ đạo ném xiên, con lắc và lãi
              kép — hiểu tận gốc thay vì học thuộc lòng.
            </p>

            {/* Centered Cobalt Glow Primary + Outlined Secondary Pill CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setAuthSubmitted(false);
                  setAuthModalOpen(true);
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#2F5CE5] py-2 pr-2 pl-5 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(47,92,229,0.34)] transition-all hover:bg-[#244BC7]"
              >
                <span>Học thử miễn phí</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/18 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>

              <a
                href="#chu-de"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E6EE] bg-white px-5 py-2.5 text-xs font-semibold text-[#111318] shadow-[0_2px_8px_rgba(17,19,24,0.03)] transition-colors hover:border-[#2F5CE5]/40 hover:text-[#2F5CE5]"
              >
                <Sigma className="h-3.5 w-3.5 text-[#5E6472]" />
                <span>Khám phá chủ đề</span>
              </a>
            </div>
          </div>

          {/* LIVE INTERACTIVE GRAPH-PAPER LAB CARD */}
          <div
            id="phong-thi-nghiem"
            className="mx-auto mt-10 max-w-[880px] overflow-hidden rounded-2xl border border-[#E5E8F0] bg-white shadow-[0_28px_80px_rgba(17,19,24,0.075)] sm:mt-12"
          >
            {/* Lab Top Bar: Inquiry Question + Simulation Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EEF0F5] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2 text-xs text-[#4A4F5C]">
                <Lightbulb className="h-3.5 w-3.5 shrink-0 text-[#8A909E]" />
                <span className="font-serif text-[13.5px] italic text-[#383D47]">
                  {activeSim.question}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-full border border-[#E5E8F0] bg-[#FAFBFD] p-0.5 text-[10px] font-semibold tracking-[0.12em] text-[#4A4F5C] uppercase">
                  <button
                    type="button"
                    aria-label="Mô phỏng trước"
                    onClick={() =>
                      setSimIndex(
                        (prev) =>
                          (prev - 1 + SIMULATIONS.length) % SIMULATIONS.length
                      )
                    }
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[#6B7280] hover:bg-white hover:text-[#111318]"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <span className="px-2.5 font-mono text-[10px] font-semibold text-[#111318]">
                    {activeSim.badge}
                  </span>
                  <button
                    type="button"
                    aria-label="Mô phỏng tiếp theo"
                    onClick={() =>
                      setSimIndex((prev) => (prev + 1) % SIMULATIONS.length)
                    }
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[#6B7280] hover:bg-white hover:text-[#111318]"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? "Tạm dừng chuyển động" : "Chạy chuyển động"}
                  title={isPlaying ? "Tạm dừng" : "Chạy mô phỏng"}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E8F0] bg-white text-[#4A4F5C] transition-colors hover:border-[#2F5CE5] hover:text-[#2F5CE5]"
                >
                  {isPlaying ? (
                    <Pause className="h-3 w-3" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleResetActiveSim}
                  aria-label="Đặt lại tham số mặc định"
                  title="Đặt lại mặc định"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E8F0] bg-white text-[#4A4F5C] transition-colors hover:border-[#2F5CE5] hover:text-[#2F5CE5]"
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Graph Paper Live Interactive SVG Viewport */}
            <div className="relative w-full bg-white">
              <svg
                viewBox="0 0 800 380"
                className="block h-auto w-full"
                role="img"
                aria-label={`Đồ thị tương tác ${activeSim.badge}`}
              >
                <defs>
                  <pattern
                    id="axiom-minor-grid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke="#F1F3F8"
                      strokeWidth="1"
                    />
                  </pattern>
                  <linearGradient
                    id="axiom-wave-fade"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#111318" stopOpacity="0.95" />
                    <stop offset="78%" stopColor="#111318" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#111318" stopOpacity="0.22" />
                  </linearGradient>
                  <linearGradient
                    id="axiom-compound-fill"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2F5CE5" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#2F5CE5" stopOpacity="0.01" />
                  </linearGradient>
                </defs>

                {/* Graph paper background */}
                <rect width="800" height="380" fill="url(#axiom-minor-grid)" />

                {/* SIMULATION 1: SINE WAVE + UNIT CIRCLE */}
                {activeSim.id === "sine-wave" && (
                  <g>
                    {/* Subtle central horizontal axis & wave vertical axis */}
                    <line
                      x1="60"
                      y1={sineGeometry.cy}
                      x2="762"
                      y2={sineGeometry.cy}
                      stroke="#E2E6F0"
                      strokeWidth="1"
                    />
                    <line
                      x1={sineGeometry.waveStartX}
                      y1="72"
                      x2={sineGeometry.waveStartX}
                      y2="308"
                      stroke="#E2E6F0"
                      strokeWidth="1"
                    />

                    {/* Unit circle in terracotta orange */}
                    <circle
                      cx={sineGeometry.cx}
                      cy={sineGeometry.cy}
                      r={sineGeometry.r}
                      fill="none"
                      stroke="#D96B27"
                      strokeWidth="1.45"
                    />

                    {/* Phase angle arc φ in crimson */}
                    <path
                      d={sineGeometry.phaseArcPath}
                      fill="none"
                      stroke="#D93860"
                      strokeWidth="1.35"
                    />
                    <text
                      x={sineGeometry.cx + 22}
                      y={sineGeometry.cy - 9}
                      fill="#D93860"
                      fontSize="12"
                      fontStyle="italic"
                      fontFamily="Georgia, serif"
                    >
                      φ
                    </text>

                    {/* Radius vector from center to orbiting dot */}
                    <line
                      x1={sineGeometry.cx}
                      y1={sineGeometry.cy}
                      x2={sineGeometry.dotX}
                      y2={sineGeometry.dotY}
                      stroke="#111318"
                      strokeWidth="1.35"
                    />
                    <circle
                      cx={sineGeometry.cx}
                      cy={sineGeometry.cy}
                      r="2.4"
                      fill="#111318"
                    />

                    {/* Dashed projection line from circle dot to wave start */}
                    <line
                      x1={sineGeometry.dotX}
                      y1={sineGeometry.dotY}
                      x2={sineGeometry.waveStartX}
                      y2={sineGeometry.dotY}
                      stroke="#9AA1B2"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />

                    {/* Live sine wave curve */}
                    <path
                      d={sineGeometry.path}
                      fill="none"
                      stroke="url(#axiom-wave-fade)"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                    />

                    {/* Orbiting dot & wave-origin dot */}
                    <circle
                      cx={sineGeometry.dotX}
                      cy={sineGeometry.dotY}
                      r="4"
                      fill="#111318"
                    />
                    <circle
                      cx={sineGeometry.waveStartX}
                      cy={sineGeometry.dotY}
                      r="3.5"
                      fill="#111318"
                    />

                    {/* Wavelength λ blue callout bracket */}
                    {sineGeometry.peak2X - sineGeometry.peak1X > 44 && (
                      <g>
                        <line
                          x1={sineGeometry.peak1X}
                          y1={sineGeometry.peakY - 22}
                          x2={sineGeometry.peak2X}
                          y2={sineGeometry.peakY - 22}
                          stroke="#8FA8EE"
                          strokeWidth="1.2"
                        />
                        <line
                          x1={sineGeometry.peak1X}
                          y1={sineGeometry.peakY - 26}
                          x2={sineGeometry.peak1X}
                          y2={sineGeometry.peakY - 18}
                          stroke="#8FA8EE"
                          strokeWidth="1.2"
                        />
                        <line
                          x1={sineGeometry.peak2X}
                          y1={sineGeometry.peakY - 26}
                          x2={sineGeometry.peak2X}
                          y2={sineGeometry.peakY - 18}
                          stroke="#8FA8EE"
                          strokeWidth="1.2"
                        />
                        <text
                          x={(sineGeometry.peak1X + sineGeometry.peak2X) / 2}
                          y={sineGeometry.peakY - 28}
                          textAnchor="middle"
                          fill="#2F5CE5"
                          fontSize="13"
                          fontStyle="italic"
                          fontFamily="Georgia, serif"
                        >
                          λ
                        </text>
                      </g>
                    )}

                    {/* Amplitude A terracotta vertical callout */}
                    <g>
                      <line
                        x1="756"
                        y1={sineGeometry.cy}
                        x2="756"
                        y2={sineGeometry.peakY}
                        stroke="#E3976B"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="751"
                        y1={sineGeometry.cy}
                        x2="761"
                        y2={sineGeometry.cy}
                        stroke="#E3976B"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="751"
                        y1={sineGeometry.peakY}
                        x2="761"
                        y2={sineGeometry.peakY}
                        stroke="#E3976B"
                        strokeWidth="1.2"
                      />
                      <text
                        x="744"
                        y={(sineGeometry.cy + sineGeometry.peakY) / 2 + 4}
                        textAnchor="end"
                        fill="#D96B27"
                        fontSize="13"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                      >
                        A
                      </text>
                    </g>

                    {/* Time axis label */}
                    <text
                      x="756"
                      y={sineGeometry.cy + 16}
                      textAnchor="end"
                      fill="#9AA1B2"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      thời gian →
                    </text>
                  </g>
                )}

                {/* SIMULATION 2: PROJECTILE PARABOLA */}
                {activeSim.id === "projectile" && (
                  <g>
                    <line
                      x1="80"
                      y1={projectileGeometry.groundY}
                      x2="748"
                      y2={projectileGeometry.groundY}
                      stroke="#CBD2E1"
                      strokeWidth="1.3"
                    />
                    <line
                      x1={projectileGeometry.originX}
                      y1="44"
                      x2={projectileGeometry.originX}
                      y2={projectileGeometry.groundY + 12}
                      stroke="#E2E6F0"
                      strokeWidth="1"
                    />

                    {/* Apex dashed guide */}
                    <line
                      x1={projectileGeometry.apexX}
                      y1={projectileGeometry.apexY}
                      x2={projectileGeometry.apexX}
                      y2={projectileGeometry.groundY}
                      stroke="#E3976B"
                      strokeWidth="1.1"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={projectileGeometry.apexX + 8}
                      y={(projectileGeometry.apexY + projectileGeometry.groundY) / 2}
                      fill="#D96B27"
                      fontSize="11.5"
                      fontFamily="monospace"
                    >
                      H = {projectileGeometry.maxHeight.toFixed(1)}m
                    </text>

                    {/* Parabola trajectory */}
                    <path
                      d={projectileGeometry.path}
                      fill="none"
                      stroke="#111318"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />

                    {/* Launch angle indicator */}
                    <circle
                      cx={projectileGeometry.originX}
                      cy={projectileGeometry.groundY}
                      r="4"
                      fill="#2F5CE5"
                    />
                    <text
                      x={projectileGeometry.originX + 18}
                      y={projectileGeometry.groundY - 12}
                      fill="#2F5CE5"
                      fontSize="12"
                      fontStyle="italic"
                      fontFamily="Georgia, serif"
                    >
                      θ = {projAngle}°
                    </text>

                    {/* Animated projectile ball */}
                    <circle
                      cx={projectileGeometry.ballX}
                      cy={projectileGeometry.ballY}
                      r="6"
                      fill="#2F5CE5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />

                    {/* Range callout */}
                    <line
                      x1={projectileGeometry.originX}
                      y1={projectileGeometry.groundY + 24}
                      x2={projectileGeometry.landX}
                      y2={projectileGeometry.groundY + 24}
                      stroke="#8FA8EE"
                      strokeWidth="1.2"
                    />
                    <text
                      x={(projectileGeometry.originX + projectileGeometry.landX) / 2}
                      y={projectileGeometry.groundY + 42}
                      textAnchor="middle"
                      fill="#2F5CE5"
                      fontSize="11.5"
                      fontFamily="monospace"
                    >
                      Tầm xa R = {projectileGeometry.maxRange.toFixed(1)}m
                    </text>
                  </g>
                )}

                {/* SIMULATION 3: SIMPLE PENDULUM */}
                {activeSim.id === "pendulum" && (
                  <g>
                    {/* Ceiling support */}
                    <line
                      x1="125"
                      y1={pendulumGeometry.pivotY}
                      x2="245"
                      y2={pendulumGeometry.pivotY}
                      stroke="#111318"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Equilibrium vertical line */}
                    <line
                      x1={pendulumGeometry.pivotX}
                      y1={pendulumGeometry.pivotY}
                      x2={pendulumGeometry.pivotX}
                      y2="310"
                      stroke="#E2E6F0"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    {/* Swinging rod */}
                    <line
                      x1={pendulumGeometry.pivotX}
                      y1={pendulumGeometry.pivotY}
                      x2={pendulumGeometry.bobX}
                      y2={pendulumGeometry.bobY}
                      stroke="#111318"
                      strokeWidth="1.8"
                    />
                    {/* Bob */}
                    <circle
                      cx={pendulumGeometry.bobX}
                      cy={pendulumGeometry.bobY}
                      r="12"
                      fill="#D96B27"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <text
                      x={pendulumGeometry.pivotX}
                      y="335"
                      textAnchor="middle"
                      fill="#5E6472"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      Chu kỳ T = {pendulumGeometry.period.toFixed(2)}s
                    </text>

                    {/* Right-side oscillation trace */}
                    <line
                      x1={pendulumGeometry.traceStartX}
                      y1={pendulumGeometry.traceMidY}
                      x2={pendulumGeometry.traceEndX}
                      y2={pendulumGeometry.traceMidY}
                      stroke="#E2E6F0"
                      strokeWidth="1"
                    />
                    <path
                      d={pendulumGeometry.path}
                      fill="none"
                      stroke="url(#axiom-wave-fade)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <text
                      x={pendulumGeometry.traceEndX}
                      y={pendulumGeometry.traceMidY + 18}
                      textAnchor="end"
                      fill="#9AA1B2"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      góc lệch θ(t) →
                    </text>
                  </g>
                )}

                {/* SIMULATION 4: COMPOUND INTEREST */}
                {activeSim.id === "compound" && (
                  <g>
                    {/* Axes */}
                    <line
                      x1={compoundGeometry.leftX}
                      y1={compoundGeometry.bottomY}
                      x2={compoundGeometry.rightX + 16}
                      y2={compoundGeometry.bottomY}
                      stroke="#CBD2E1"
                      strokeWidth="1.2"
                    />
                    <line
                      x1={compoundGeometry.leftX}
                      y1={compoundGeometry.topY - 12}
                      x2={compoundGeometry.leftX}
                      y2={compoundGeometry.bottomY}
                      stroke="#CBD2E1"
                      strokeWidth="1.2"
                    />

                    {/* Compound growth shaded area */}
                    <path
                      d={compoundGeometry.areaPath}
                      fill="url(#axiom-compound-fill)"
                    />

                    {/* Simple interest linear dashed comparison */}
                    <path
                      d={compoundGeometry.simplePath}
                      fill="none"
                      stroke="#9AA1B2"
                      strokeWidth="1.4"
                      strokeDasharray="5 4"
                    />

                    {/* Exponential compound curve */}
                    <path
                      d={compoundGeometry.compoundPath}
                      fill="none"
                      stroke="#2F5CE5"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />

                    {/* Animated readout dot */}
                    <line
                      x1={compoundGeometry.dotX}
                      y1={compoundGeometry.dotY}
                      x2={compoundGeometry.dotX}
                      y2={compoundGeometry.bottomY}
                      stroke="#8FA8EE"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={compoundGeometry.dotX}
                      cy={compoundGeometry.dotY}
                      r="5.5"
                      fill="#2F5CE5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />

                    {/* Labels */}
                    <text
                      x={compoundGeometry.rightX}
                      y={compoundGeometry.topY + 6}
                      textAnchor="end"
                      fill="#2F5CE5"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="monospace"
                    >
                      Lãi kép: {Math.round(compoundGeometry.finalCompound)} triệu ₫
                    </text>
                    <text
                      x={compoundGeometry.rightX}
                      y={compoundGeometry.topY + 24}
                      textAnchor="end"
                      fill="#8A909E"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      Lãi đơn: {Math.round(compoundGeometry.finalSimple)} triệu ₫
                    </text>
                    <text
                      x={compoundGeometry.rightX}
                      y={compoundGeometry.bottomY + 22}
                      textAnchor="end"
                      fill="#9AA1B2"
                      fontSize="10.5"
                      fontFamily="monospace"
                    >
                      Năm thứ {years} →
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Interactive Formula + Color-Coded Scrubbable Controls Bar */}
            <div className="grid items-center gap-6 border-t border-[#EEF0F5] bg-[#FCFDFE] px-5 py-4 sm:px-6 lg:grid-cols-12">
              {/* Formula Display */}
              <div className="font-serif text-xl tracking-tight text-[#111318] sm:text-2xl lg:col-span-5">
                {activeSim.id === "sine-wave" && (
                  <span>
                    <em className="italic">y</em> ={" "}
                    <em className="font-semibold italic text-[#D96B27]">A</em>{" "}
                    sin(
                    <em className="font-semibold italic text-[#2F5CE5]">ω</em>
                    <em className="italic">x</em> +{" "}
                    <em className="font-semibold italic text-[#D93860]">φ</em>)
                  </span>
                )}
                {activeSim.id === "projectile" && (
                  <span>
                    <em className="italic">y</em> ={" "}
                    <em className="italic">x</em> tan
                    <em className="font-semibold italic text-[#2F5CE5]">θ</em> −{" "}
                    <span className="text-lg">
                      <em className="font-semibold italic text-[#D93860]">g</em>
                      x² / 2
                      <em className="font-semibold italic text-[#D96B27]">
                        v₀
                      </em>
                      ²cos²θ
                    </span>
                  </span>
                )}
                {activeSim.id === "pendulum" && (
                  <span>
                    <em className="italic">θ(t)</em> ={" "}
                    <em className="font-semibold italic text-[#D96B27]">θ₀</em>{" "}
                    e
                    <sup className="text-xs text-[#D93860]">−γt</sup> cos(√(g/
                    <em className="font-semibold italic text-[#2F5CE5]">L</em>
                    )t)
                  </span>
                )}
                {activeSim.id === "compound" && (
                  <span>
                    <em className="italic">A(t)</em> ={" "}
                    <em className="font-semibold italic text-[#D96B27]">P</em> ·
                    (1 +{" "}
                    <em className="font-semibold italic text-[#2F5CE5]">r</em>)
                    <sup className="font-semibold italic text-[#D93860]">t</sup>
                  </span>
                )}
              </div>

              {/* 3 Interactive Parameter Sliders */}
              <div className="grid grid-cols-3 gap-5 lg:col-span-7">
                {activeSim.id === "sine-wave" && (
                  <>
                    <ParameterSlider
                      symbol="A"
                      label="Biên độ"
                      valueLabel={amplitude.toFixed(2)}
                      min={0.4}
                      max={1.6}
                      step={0.05}
                      value={amplitude}
                      accentColor="#D96B27"
                      onChange={setAmplitude}
                    />
                    <ParameterSlider
                      symbol="ω"
                      label="Tần số góc"
                      valueLabel={frequency.toFixed(2)}
                      min={0.6}
                      max={2.4}
                      step={0.05}
                      value={frequency}
                      accentColor="#2F5CE5"
                      onChange={setFrequency}
                    />
                    <ParameterSlider
                      symbol="φ"
                      label="Pha ban đầu"
                      valueLabel={`${phasePi.toFixed(2)}π`}
                      min={0}
                      max={2}
                      step={0.05}
                      value={phasePi}
                      accentColor="#D93860"
                      onChange={setPhasePi}
                    />
                  </>
                )}

                {activeSim.id === "projectile" && (
                  <>
                    <ParameterSlider
                      symbol="v₀"
                      label="Vận tốc đầu"
                      valueLabel={`${projSpeed} m/s`}
                      min={16}
                      max={34}
                      step={1}
                      value={projSpeed}
                      accentColor="#D96B27"
                      onChange={setProjSpeed}
                    />
                    <ParameterSlider
                      symbol="θ"
                      label="Góc ném"
                      valueLabel={`${projAngle}°`}
                      min={18}
                      max={75}
                      step={1}
                      value={projAngle}
                      accentColor="#2F5CE5"
                      onChange={setProjAngle}
                    />
                    <ParameterSlider
                      symbol="g"
                      label="Trọng trường"
                      valueLabel={`${projGravity.toFixed(1)}`}
                      min={3.7}
                      max={15}
                      step={0.1}
                      value={projGravity}
                      accentColor="#D93860"
                      onChange={setProjGravity}
                    />
                  </>
                )}

                {activeSim.id === "pendulum" && (
                  <>
                    <ParameterSlider
                      symbol="θ₀"
                      label="Biên độ góc"
                      valueLabel={`${pendAngle}°`}
                      min={10}
                      max={55}
                      step={1}
                      value={pendAngle}
                      accentColor="#D96B27"
                      onChange={setPendAngle}
                    />
                    <ParameterSlider
                      symbol="L"
                      label="Chiều dài dây"
                      valueLabel={`${pendLength.toFixed(1)} m`}
                      min={0.6}
                      max={2.6}
                      step={0.1}
                      value={pendLength}
                      accentColor="#2F5CE5"
                      onChange={setPendLength}
                    />
                    <ParameterSlider
                      symbol="γ"
                      label="Hệ số cản"
                      valueLabel={pendDamping.toFixed(2)}
                      min={0}
                      max={0.45}
                      step={0.01}
                      value={pendDamping}
                      accentColor="#D93860"
                      onChange={setPendDamping}
                    />
                  </>
                )}

                {activeSim.id === "compound" && (
                  <>
                    <ParameterSlider
                      symbol="P"
                      label="Vốn gốc"
                      valueLabel={`${principalTrieu}tr`}
                      min={20}
                      max={300}
                      step={10}
                      value={principalTrieu}
                      accentColor="#D96B27"
                      onChange={setPrincipalTrieu}
                    />
                    <ParameterSlider
                      symbol="r"
                      label="Lãi suất / năm"
                      valueLabel={`${annualRate}%`}
                      min={4}
                      max={18}
                      step={0.5}
                      value={annualRate}
                      accentColor="#2F5CE5"
                      onChange={setAnnualRate}
                    />
                    <ParameterSlider
                      symbol="t"
                      label="Thời gian"
                      valueLabel={`${years} năm`}
                      min={5}
                      max={30}
                      step={1}
                      value={years}
                      accentColor="#D93860"
                      onChange={setYears}
                    />
                  </>
                )}
              </div>
            </div>

            {/* Bottom Insight Caption */}
            <div className="flex items-center gap-2 border-t border-[#EEF0F5] bg-[#F8FAFC] px-5 py-2.5 text-xs text-[#6B7280] sm:px-6">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5CE5]" />
              <p className="font-serif italic">{activeSim.insight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHỦ ĐỀ & PHÒNG THÍ NGHIỆM TRỰC QUAN */}
      <section
        id="chu-de"
        className="scroll-mt-20 border-t border-[#ECEFF5] bg-white"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#2F5CE5] uppercase">
                Thư viện chủ đề tương tác
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#111318] sm:text-4xl">
                Chạm vào từng khái niệm để hiểu tận gốc.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Tất cả",
                "Giải tích & Lượng giác",
                "Vật lý trực quan",
                "Xác suất & Tài chính",
              ].map((track) => {
                const active = topicFilter === track;
                return (
                  <button
                    key={track}
                    type="button"
                    onClick={() => setTopicFilter(track)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? "bg-[#111318] text-white"
                        : "border border-[#E4E7EE] bg-[#FCFCFD] text-[#5E6472] hover:border-[#2F5CE5] hover:text-[#2F5CE5]"
                    }`}
                  >
                    {track}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTopics.map((topic) => (
              <div
                key={topic.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#E6E9F0] bg-[#FCFCFD] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F5CE5]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(47,92,229,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold">
                    <span className="text-[#2F5CE5]">{topic.track}</span>
                    <span className="rounded-full bg-[#F1F3F8] px-2.5 py-0.5 text-[#5E6472]">
                      {topic.level}
                    </span>
                  </div>

                  <div className="mt-4 rounded-xl border border-[#ECEFF5] bg-white px-4 py-3 font-serif text-base italic text-[#111318]">
                    {topic.formula}
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-[#111318]">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5E6472]">
                    {topic.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#EEF0F5] pt-4 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-[#6B7280]">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{topic.lessons} bài thí nghiệm</span>
                  </span>
                  {topic.linkedSim && (
                    <button
                      type="button"
                      onClick={() => handleSelectSimulation(topic.linkedSim!)}
                      className="inline-flex items-center gap-1 font-semibold text-[#2F5CE5] hover:underline"
                    >
                      <span>Mở đồ thị</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LỘ TRÌNH KHÓA HỌC LỚP HỌC */}
      <section
        id="khoa-hoc"
        className="mx-auto max-w-[1200px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#2F5CE5] uppercase">
            Lộ trình lớp học có hệ thống
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#111318] sm:text-4xl">
            Học theo từng bước nhỏ, làm chủ tư duy dài lâu.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {CLASSROOM_COURSES.map((course) => {
            const expanded = expandedCourseId === course.id;
            return (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E5E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(17,19,24,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-[10.5px] font-semibold text-[#2F5CE5]">
                      {course.badge}
                    </span>
                    <span className="text-[11px] font-medium text-[#6B7280]">
                      {course.audience}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#111318]">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5E6472]">
                    {course.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-[11px] font-medium text-[#6B7280]">
                    <span>{course.duration}</span>
                    <span>·</span>
                    <span>{course.students}</span>
                  </div>

                  {/* Module List Toggle */}
                  <div className="mt-5 border-t border-[#EEF0F5] pt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCourseId(expanded ? "" : course.id)
                      }
                      className="flex w-full items-center justify-between text-xs font-semibold text-[#111318]"
                    >
                      <span>Đề cương chi tiết ({course.modules.length} chương)</span>
                      <ChevronRight
                        className={`h-4 w-4 text-[#6B7280] transition-transform ${
                          expanded ? "rotate-90 text-[#2F5CE5]" : ""
                        }`}
                      />
                    </button>

                    {expanded && (
                      <ul className="mt-3 space-y-2">
                        {course.modules.map((mod) => (
                          <li
                            key={mod.title}
                            className="flex items-start justify-between gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2 text-[11.5px] text-[#4A4F5C]"
                          >
                            <span>{mod.title}</span>
                            <span className="shrink-0 font-mono text-[10.5px] text-[#2F5CE5]">
                              {mod.lessons} bài
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewCourse(course)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#E2E6EE] bg-[#FCFCFD] py-2.5 text-xs font-semibold text-[#111318] transition-colors hover:border-[#2F5CE5] hover:bg-[#2F5CE5] hover:text-white"
                >
                  <span>Xem giáo án mẫu</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: DÀNH CHO TRƯỜNG HỌC & GIÁO VIÊN */}
      <section
        id="truong-hoc"
        className="scroll-mt-20 border-y border-[#ECEFF5] bg-white"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#2F5CE5] uppercase">
                Dành cho giáo viên & trường học
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-[1.15] font-medium tracking-tight text-[#111318] sm:text-4xl">
                Biến bảng đen thành phòng thí nghiệm sống động.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5E6472]">
                Hơn 85 trường THPT và trung tâm STEM tại Việt Nam sử dụng Axiom
                ngay trên máy chiếu lớp học để giảng dạy đạo hàm, sóng cơ và xác
                suất mà không cần cài đặt phần mềm phức tạp.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
              {[
                {
                  icon: Presentation,
                  title: "Chế độ trình chiếu lớp",
                  desc: "Phóng to đồ thị sắc nét trên bảng tương tác & máy chiếu, kéo tham số trực tiếp khi giảng bài.",
                },
                {
                  icon: Users,
                  title: "Giao bài theo lớp học",
                  desc: "Tạo bài tập tương tác chỉ với 1 liên kết — học sinh kéo đồ thị để tìm đáp án thay vì khoanh bừa.",
                },
                {
                  icon: GraduationCap,
                  title: "Báo cáo hiểu bài sâu",
                  desc: "Tự động chỉ ra khái niệm nào cả lớp đang vướng để giáo viên điều chỉnh nhịp giảng ngay tiết sau.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E6E9F0] bg-[#FCFCFD] p-5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#2F5CE5]">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-[#111318]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#5E6472]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HỌC PHÍ MINH BẠCH */}
      <section
        id="hoc-phi"
        className="mx-auto max-w-[1200px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#2F5CE5] uppercase">
              Học phí linh hoạt
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#111318] sm:text-4xl">
              Bắt đầu miễn phí, nâng cấp khi sẵn sàng.
            </h2>
          </div>

          <div className="inline-flex items-center rounded-full border border-[#E4E7EE] bg-white p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                billingCycle === "monthly"
                  ? "bg-[#111318] text-white"
                  : "text-[#5E6472]"
              }`}
            >
              Theo tháng
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 transition-colors ${
                billingCycle === "annual"
                  ? "bg-[#2F5CE5] text-white"
                  : "text-[#5E6472]"
              }`}
            >
              <span>Cả năm</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  billingCycle === "annual"
                    ? "bg-white/20 text-white"
                    : "bg-[#EEF2FF] text-[#2F5CE5]"
                }`}
              >
                -25%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const price =
              billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-2xl border p-7 ${
                  tier.highlighted
                    ? "border-[#2F5CE5] bg-white shadow-[0_24px_60px_rgba(47,92,229,0.12)] ring-1 ring-[#2F5CE5]/20"
                    : "border-[#E5E8F0] bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#111318]">
                      {tier.name}
                    </h3>
                    {tier.highlighted && (
                      <span className="rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[10.5px] font-semibold text-[#2F5CE5]">
                        Khuyên dùng
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#5E6472]">
                    {tier.subtitle}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5 border-b border-[#EEF0F5] pb-6">
                    {price === null ? (
                      <span className="text-3xl font-bold tracking-tight text-[#111318]">
                        Liên hệ
                      </span>
                    ) : price === 0 ? (
                      <span className="text-3xl font-bold tracking-tight text-[#111318]">
                        Miễn phí
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold tracking-tight text-[#111318] tabular-nums">
                          {formatVnd(price)}
                        </span>
                        <span className="text-xs text-[#6B7280]">/ tháng</span>
                      </>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[#4A4F5C]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F5CE5]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setAuthRole(
                      tier.id === "school" ? "Giáo viên" : "Học sinh"
                    );
                    setAuthSubmitted(false);
                    setAuthModalOpen(true);
                  }}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-[#2F5CE5] text-white shadow-[0_10px_25px_rgba(47,92,229,0.3)] hover:bg-[#244BC7]"
                      : "border border-[#E2E6EE] bg-[#FCFCFD] text-[#111318] hover:border-[#2F5CE5] hover:text-[#2F5CE5]"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ECEFF5] bg-white py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 text-xs text-[#6B7280] sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#111318] font-serif text-xs font-bold text-white">
              ∀
            </span>
            <span className="font-serif text-sm font-semibold text-[#111318]">
              Axiom — Lớp Học Toán & Khoa Học Trực Quan
            </span>
          </div>
          <p>© 2026 Axiom Education Vietnam. Hiểu bản chất qua từng chuyển động.</p>
        </div>
      </footer>

      {/* MODAL: ĐĂNG KÝ HỌC THỬ / ĐĂNG NHẬP LỚP HỌC */}
      {authModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Đăng ký tài khoản lớp học Axiom"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111318]/50 p-4 backdrop-blur-xs"
          onClick={() => setAuthModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-[#E5E8F0] bg-white p-7 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Đóng cửa sổ"
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E8F0] text-[#5E6472] hover:text-[#111318]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#2F5CE5]">
              <Sparkles className="h-4 w-4" />
              <span>Bắt đầu miễn phí trong 30 giây</span>
            </div>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[#111318]">
              Mở khóa lớp học trực quan Axiom
            </h3>

            {authSubmitted ? (
              <div className="mt-5 rounded-xl border border-[#2F5CE5]/25 bg-[#F4F7FF] p-5 text-xs leading-relaxed text-[#244BC7]">
                <p className="font-bold">
                  Đã gửi liên kết kích hoạt lớp học ({authRole})!
                </p>
                <p className="mt-1.5 text-[#4A4F5C]">
                  Kiểm tra hộp thư của bạn để truy cập ngay bộ 12 phòng thí
                  nghiệm Toán & Vật lý miễn phí.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!authEmail.trim()) return;
                  setAuthSubmitted(true);
                  setAuthEmail("");
                }}
                className="mt-5 space-y-4"
              >
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#F4F6FA] p-1 text-xs font-semibold">
                  {(["Học sinh", "Giáo viên"] as const).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setAuthRole(role)}
                      className={`rounded-lg py-2 transition-colors ${
                        authRole === role
                          ? "bg-white text-[#111318] shadow-xs"
                          : "text-[#6B7280]"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#4A4F5C]">
                    Email học tập / nhà trường
                  </label>
                  <input
                    type="email"
                    required
                    value={authEmail}
                    onChange={(event) => setAuthEmail(event.target.value)}
                    placeholder="hocvien@truonghoc.edu.vn"
                    className="w-full rounded-xl border border-[#E2E6EE] bg-[#FCFCFD] px-4 py-2.5 text-sm text-[#111318] focus:border-[#2F5CE5] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2F5CE5] py-3 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(47,92,229,0.3)] hover:bg-[#244BC7]"
                >
                  <span>Tạo tài khoản {authRole} miễn phí</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL: XEM GIÁO ÁN MẪU */}
      {previewCourse && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={previewCourse.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111318]/50 p-4 backdrop-blur-xs"
          onClick={() => setPreviewCourse(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-[#E5E8F0] bg-white p-7 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Đóng giáo án mẫu"
              onClick={() => setPreviewCourse(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E8F0] text-[#5E6472] hover:text-[#111318]"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-[10.5px] font-semibold text-[#2F5CE5]">
              {previewCourse.badge} · {previewCourse.audience}
            </span>
            <h3 className="mt-3 font-serif text-2xl font-medium text-[#111318]">
              {previewCourse.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5E6472]">
              {previewCourse.description}
            </p>

            <div className="mt-5 space-y-2 border-t border-[#EEF0F5] pt-4">
              {previewCourse.modules.map((mod) => (
                <div
                  key={mod.title}
                  className="flex items-center justify-between gap-3 rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-xs text-[#383D47]"
                >
                  <span>{mod.title}</span>
                  <span className="shrink-0 font-mono text-[11px] font-semibold text-[#2F5CE5]">
                    {mod.lessons} bài
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-xs text-[#6B7280]">
                {previewCourse.duration}
              </span>
              <button
                type="button"
                onClick={() => {
                  setPreviewCourse(null);
                  setAuthSubmitted(false);
                  setAuthModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#2F5CE5] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#244BC7]"
              >
                <span>Học thử chương 1 miễn phí</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
