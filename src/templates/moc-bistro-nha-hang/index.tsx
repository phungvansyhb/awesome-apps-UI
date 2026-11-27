"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  ChefHat,
  Clock,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  Users,
  Wine,
  X,
} from "lucide-react";
import { formatVnd, withBasePath } from "@/lib/paths";
import {
  BISTRO_CATEGORIES,
  BISTRO_DISHES,
  BISTRO_NAV_ITEMS,
  BISTRO_OFFERS,
  BISTRO_REVIEWS,
  RESERVATION_SLOTS,
  RESERVATION_ZONES,
  type BistroCategoryId,
  type BistroDish,
} from "./data";

interface OrderItem {
  dish: BistroDish;
  quantity: number;
}

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Custom slanted-top rounded trapezoid frame matching the Bistro reference dish selector.
 */
function SlantedCardFrame({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 104"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <path
        d="M14 28 L166 8 C173.5 7 179 12.6 179 20 L179 88 C179 95.7 172.7 102 165 102 L15 102 C7.3 102 1 95.7 1 88 L1 41 C1 34.1 6.5 29 14 28 Z"
        fill={active ? "#FFFFFF" : "rgba(255,255,255,0.45)"}
        stroke={active ? "#8E1F24" : "#ECE7E4"}
        strokeWidth={active ? "1.6" : "1.15"}
      />
    </svg>
  );
}

export function MocBistroTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero active dish showcase
  const [activeDishIndex, setActiveDishIndex] = useState(0);

  // Menu category & order cart drawer
  const [selectedCategory, setSelectedCategory] =
    useState<BistroCategoryId>("tat-ca");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { dish: BISTRO_DISHES[0], quantity: 1 },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Reservation state
  const [guestCount, setGuestCount] = useState("2 khách");
  const [selectedDate, setSelectedDate] = useState("2026-11-28");
  const [selectedSlot, setSelectedSlot] = useState("19:00");
  const [selectedZone, setSelectedZone] = useState(RESERVATION_ZONES[0]);
  const [selectedOfferNote, setSelectedOfferNote] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [reservationCode, setReservationCode] = useState<string | null>(null);

  const activeDish = BISTRO_DISHES[activeDishIndex] ?? BISTRO_DISHES[0];

  const visibleDishes = useMemo(() => {
    if (selectedCategory === "tat-ca") return BISTRO_DISHES;
    return BISTRO_DISHES.filter((d) => d.category === selectedCategory);
  }, [selectedCategory]);

  const totalOrderCount = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.quantity, 0),
    [orderItems]
  );

  const totalOrderAmount = useMemo(
    () =>
      orderItems.reduce(
        (sum, item) => sum + item.dish.price * item.quantity,
        0
      ),
    [orderItems]
  );

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 2400);
  };

  const handleAddToOrder = (dish: BistroDish) => {
    setOrderConfirmed(false);
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.dish.id === dish.id);
      if (existing) {
        return prev.map((i) =>
          i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
    showToast(`Đã thêm "${dish.name}" vào đơn món`);
  };

  const handleUpdateQty = (dishId: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.dish.id === dishId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleApplyOffer = (offerTitle: string) => {
    setSelectedOfferNote(offerTitle);
    const el = document.getElementById("dat-ban");
    el?.scrollIntoView({ behavior: "smooth" });
    showToast(`Đã áp dụng ưu đãi: ${offerTitle}`);
  };

  const handleReservationSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) return;
    const code = `MB-${selectedSlot.replace(":", "")}-${guestCount.charAt(0)}K`;
    setReservationCode(code);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F7F6] font-sans text-[#181818] antialiased selection:bg-[#8E1F24] selection:text-white">
      {/* Minimalist Bistro Header */}
      <header className="sticky top-0 z-40 border-b border-[#ECE8E6] bg-[#F8F7F6]/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          {/* Left Burgundy Emblem + Serif Brand */}
          <a href="#trang-chu" className="group flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8E1F24] text-white transition-transform duration-300 group-hover:scale-105"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="h-4.5 w-4.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 19.5C9.01472 19.5 7 17.4853 7 15C7 12.5147 9.01472 10.5 11.5 10.5C13.9 10.5 15.2 12.6 16 15C16.8 17.4 18.1 19.5 20.5 19.5C22.9853 19.5 25 17.4853 25 15C25 12.5147 22.9853 10.5 20.5 10.5C18.1 10.5 16.8 12.6 16 15C15.2 17.4 13.9 19.5 11.5 19.5Z"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-serif text-[19px] font-bold tracking-tight text-[#8E1F24]">
              Mộc Bistro
            </span>
          </a>

          {/* Center Serif Navigation */}
          <nav
            aria-label="Điều hướng nhà hàng"
            className="hidden items-center gap-7 font-serif text-[15px] text-[#4A4745] md:flex lg:gap-9"
          >
            {BISTRO_NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#8E1F24]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Mở đơn đặt món"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFDC] bg-white text-[#4A4745] transition-colors hover:border-[#8E1F24] hover:text-[#8E1F24]"
            >
              <ShoppingBag className="h-4 w-4" />
              {totalOrderCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-[#8E1F24] px-1 text-[10px] font-bold text-white">
                  {totalOrderCount}
                </span>
              )}
            </button>

            <a
              href="#dat-ban"
              className="hidden rounded-full bg-[#8E1F24] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#75181C] sm:inline-flex"
            >
              Đặt bàn
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFDC] bg-white text-[#181818] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#ECE8E6] bg-white px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-2 font-serif text-base text-[#4A4745]">
              {BISTRO_NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 hover:bg-[#F8F7F6] hover:text-[#8E1F24]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#dat-ban"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-full bg-[#8E1F24] py-2.5 text-xs font-semibold text-white"
            >
              Đặt bàn ngay
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION — Faithful Minimalist Bistro Overhead Showcase */}
      <section
        id="trang-chu"
        className="relative overflow-hidden border-b border-[#ECE8E6] bg-[#F8F7F6]"
      >
        <div className="mx-auto max-w-[1320px] px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
          {/* Upper Hero Row: Editorial Copy Left + Giant Rotating Overhead Dish Right */}
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-[2.35rem] leading-[1.12] font-bold tracking-[-0.028em] text-[#181818] sm:text-5xl lg:text-[3.4rem]">
                Thưởng trọn hương vị tinh hoa
              </h1>
              <p className="mt-4 max-w-[490px] font-serif text-[17px] leading-[1.65] text-[#4A4745] sm:text-[18px]">
                Chào mừng đến với Mộc Bistro — nơi đam mê ẩm thực hòa quyện trên
                từng đĩa món. Từ khai vị thanh tao đến món chính và tráng miệng
                đặc trưng, mỗi trải nghiệm đều được chăm chút trọn vẹn.
              </p>

              {/* Signature Burgundy & Blush Pill Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#thuc-don"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#8E1F24] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#75181C]"
                >
                  <span>Đặt món ngay</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#dat-ban"
                  className="inline-flex items-center rounded-full bg-[#F4E4E4] px-6 py-2.5 text-xs font-semibold text-[#8E1F24] transition-colors hover:bg-[#EBD3D3]"
                >
                  Đặt bàn
                </a>
              </div>

              {/* Subtle Active Dish Caption Pill */}
              <div className="mt-7 inline-flex flex-wrap items-center gap-2 text-xs text-[#6E6A67]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8E1F24]" />
                <span className="font-semibold text-[#181818]">
                  {activeDish.name}
                </span>
                <span>·</span>
                <span className="font-semibold text-[#8E1F24]">
                  {formatVnd(activeDish.price)}
                </span>
              </div>
            </div>

            {/* Right: Giant Overhead Round Porcelain Plate */}
            <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
              <div className="relative flex h-[285px] w-[285px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]">
                {/* Soft ambient floor shadow beneath floating plate */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-6 rounded-full bg-[#181818]/10 blur-2xl"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDish.id}
                    initial={{ opacity: 0, scale: 0.9, rotate: -14 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.92, rotate: 12 }}
                    transition={{ duration: 0.55, ease: EASE_SMOOTH }}
                    className="relative h-full w-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(activeDish.image)}
                      alt={activeDish.name}
                      width={680}
                      height={680}
                      loading="eager"
                      className="h-full w-full rounded-full object-contain drop-shadow-[0_24px_40px_rgba(24,24,24,0.14)]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Lower Hero Row: Signature Slanted Dish Selector Cards + Minimalist Guest Quote */}
          <div className="mt-12 grid items-end gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
            {/* Left: Interactive Slanted-Top Plate Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4 sm:gap-5">
                {BISTRO_DISHES.map((dish, idx) => {
                  const isActive = idx === activeDishIndex;
                  return (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => setActiveDishIndex(idx)}
                      aria-pressed={isActive}
                      aria-label={`Xem món ${dish.name}`}
                      className="group relative flex h-[112px] w-full flex-col items-center justify-end pb-3 text-center transition-transform duration-300 hover:-translate-y-1 focus:outline-none"
                    >
                      <SlantedCardFrame active={isActive} />

                      {/* Overhead circular dish straddling top border */}
                      <div className="relative z-10 -mt-9 mb-1.5 flex h-[78px] w-[78px] items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={withBasePath(dish.image)}
                          alt={dish.name}
                          width={160}
                          height={160}
                          loading="eager"
                          className="h-full w-full rounded-full object-contain drop-shadow-[0_10px_18px_rgba(24,24,24,0.16)]"
                        />
                      </div>

                      <span
                        className={`relative z-10 max-w-[90%] truncate text-[10.5px] font-medium transition-colors ${
                          isActive
                            ? "font-semibold text-[#8E1F24]"
                            : "text-[#6E6A67] group-hover:text-[#181818]"
                        }`}
                      >
                        {dish.categoryLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Minimalist Avatar + Vertical Burgundy Line + Serif Quote */}
            <div className="lg:col-span-5 lg:pl-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDish.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: EASE_SMOOTH }}
                  className="flex items-start gap-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeDish.guestQuote.avatar}
                    alt={activeDish.guestQuote.name}
                    width={42}
                    height={42}
                    className="mt-1 h-10.5 w-10.5 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div className="border-l-[1.5px] border-[#8E1F24] pl-4">
                    <p className="font-serif text-[14.5px] leading-[1.6] text-[#2C2927]">
                      {activeDish.guestQuote.text}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium text-[#7A7572]">
                      {activeDish.guestQuote.name} ·{" "}
                      {activeDish.guestQuote.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THỰC ĐƠN ĐẶC TRƯNG & ĐẶT MÓN TRỰC TIẾP */}
      <section
        id="thuc-don"
        className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8E1F24] uppercase">
              Thực đơn tuyển chọn
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
              Mỗi đĩa món là một bản hòa vị.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {BISTRO_CATEGORIES.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#8E1F24] text-white"
                      : "border border-[#E6DFDC] bg-white text-[#4A4745] hover:border-[#8E1F24] hover:text-[#8E1F24]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visibleDishes.map((dish) => (
            <article
              key={dish.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#ECE8E6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8E1F24]/35 hover:shadow-[0_22px_50px_rgba(24,24,24,0.07)] sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="relative mx-auto mb-5 flex h-36 w-36 shrink-0 items-center justify-center sm:mx-0 sm:mb-0 sm:h-40 sm:w-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(dish.image)}
                  alt={dish.name}
                  width={320}
                  height={320}
                  className="h-full w-full rounded-full object-contain drop-shadow-[0_14px_24px_rgba(24,24,24,0.14)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#8E1F24] uppercase">
                    {dish.categoryLabel}
                  </span>
                  {dish.badge && (
                    <span className="rounded-full bg-[#F4E4E4] px-2.5 py-0.5 text-[10.5px] font-semibold text-[#8E1F24]">
                      {dish.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-lg font-bold tracking-tight text-[#181818]">
                  {dish.name}
                </h3>
                <p className="mt-1.5 font-serif text-sm leading-relaxed text-[#5C5855]">
                  {dish.description}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#7A7572]">
                  <Wine className="h-3.5 w-3.5 text-[#8E1F24]" />
                  <span>{dish.pairing}</span>
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-[#F1ECEA] pt-4">
                  <span className="text-base font-bold text-[#181818] tabular-nums">
                    {formatVnd(dish.price)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleAddToOrder(dish)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#F4E4E4] px-4 py-2 text-xs font-semibold text-[#8E1F24] transition-colors hover:bg-[#8E1F24] hover:text-white"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Thêm món</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3: VỀ CHÚNG TÔI */}
      <section
        id="ve-chung-toi"
        className="scroll-mt-20 border-y border-[#ECE8E6] bg-white"
      >
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8E1F24] uppercase">
                Câu chuyện Mộc Bistro
              </p>
              <h2 className="mt-2.5 text-3xl leading-[1.16] font-bold tracking-tight text-[#181818] sm:text-4xl">
                Kỹ thuật Âu tinh tế, hồn nguyên liệu bản địa.
              </h2>
              <p className="mt-4 font-serif text-base leading-[1.75] text-[#4A4745]">
                Ra đời từ mong muốn tạo nên một chốn dừng chân thanh lịch giữa
                lòng phố thị, Mộc Bistro chọn lọc nông sản tươi thu hoạch trong
                ngày từ Đà Lạt, hải sản đánh bắt lạnh và sô-cô-la thủ công Bến
                Tre để tạo nên thực đơn theo mùa giàu cảm xúc.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
              {[
                {
                  icon: ChefHat,
                  title: "Bếp mở thủ công",
                  desc: "Mọi loại sốt vang, mỳ tươi và bánh ngọt đều được chuẩn bị mới mỗi sáng tại gian bếp mở.",
                },
                {
                  icon: Sparkles,
                  title: "Nông sản theo mùa",
                  desc: "Hợp tác trực tiếp với nông trại hữu cơ Đà Lạt để giữ trọn độ giòn ngọt nguyên bản.",
                },
                {
                  icon: Wine,
                  title: "60+ nhãn vang tuyển chọn",
                  desc: "Sommelier tại bàn tư vấn kết hợp vang theo khẩu vị cho từng bữa trưa hay tiệc tối.",
                },
              ].map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-[#ECE8E6] bg-[#F8F7F6] p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4E4E4] text-[#8E1F24]">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-[#181818]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 font-serif text-sm leading-relaxed text-[#5C5855]">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ƯU ĐÃI ĐẶC BIỆT */}
      <section
        id="uu-dai"
        className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8E1F24] uppercase">
            Ưu đãi đặc quyền
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
            Dành riêng cho những buổi hẹn đáng nhớ.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BISTRO_OFFERS.map((offer, idx) => {
            const highlighted = idx === 1;
            return (
              <div
                key={offer.id}
                className={`flex flex-col justify-between rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  highlighted
                    ? "border-[#8E1F24] bg-[#8E1F24] text-white shadow-[0_24px_50px_rgba(142,31,36,0.22)]"
                    : "border-[#ECE8E6] bg-white text-[#181818]"
                }`}
              >
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[10.5px] font-semibold ${
                      highlighted
                        ? "bg-white/15 text-white"
                        : "bg-[#F4E4E4] text-[#8E1F24]"
                    }`}
                  >
                    {offer.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    {offer.title}
                  </h3>
                  <p
                    className={`mt-2 font-serif text-lg font-semibold ${
                      highlighted ? "text-[#FDE8E8]" : "text-[#8E1F24]"
                    }`}
                  >
                    {offer.priceLabel}
                  </p>
                  <p
                    className={`mt-3 font-serif text-sm leading-relaxed ${
                      highlighted ? "text-white/85" : "text-[#5C5855]"
                    }`}
                  >
                    {offer.description}
                  </p>
                </div>

                <div className="mt-6 pt-5">
                  <p
                    className={`text-[11px] ${
                      highlighted ? "text-white/70" : "text-[#7A7572]"
                    }`}
                  >
                    {offer.note}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleApplyOffer(offer.title)}
                    className={`mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-semibold transition-colors ${
                      highlighted
                        ? "bg-white text-[#8E1F24] hover:bg-[#F4E4E4]"
                        : "bg-[#F4E4E4] text-[#8E1F24] hover:bg-[#8E1F24] hover:text-white"
                    }`}
                  >
                    <span>Áp dụng khi đặt bàn</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: ĐÁNH GIÁ THỰC KHÁCH */}
      <section
        id="danh-gia"
        className="scroll-mt-20 border-y border-[#ECE8E6] bg-white"
      >
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8E1F24] uppercase">
              Cảm nhận từ thực khách
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#181818] sm:text-4xl">
              4.9/5 từ hơn 1.200 bữa tối trọn vẹn.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BISTRO_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-2xl border border-[#ECE8E6] bg-[#F8F7F6] p-6"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#8E1F24]">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-3.5 w-3.5 fill-[#8E1F24] text-[#8E1F24]"
                      />
                    ))}
                  </div>
                  <p className="mt-4 font-serif text-[15px] leading-[1.7] text-[#2C2927]">
                    “{review.quote}”
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[#E6DFDC] pt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#181818]">
                      {review.name}
                    </p>
                    <p className="truncate text-[11px] text-[#7A7572]">
                      {review.role} · Món yêu thích: {review.dish}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ĐẶT BÀN TRỰC TUYẾN & FOOTER */}
      <section
        id="dat-ban"
        className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="grid gap-10 rounded-3xl border border-[#ECE8E6] bg-white p-6 shadow-[0_24px_60px_rgba(24,24,24,0.05)] sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8E1F24] uppercase">
              Đặt bàn trực tuyến
            </p>
            <h2 className="mt-2.5 text-3xl leading-[1.15] font-bold tracking-tight text-[#181818]">
              Giữ chỗ cho bữa tối hoàn hảo của bạn.
            </h2>
            <p className="mt-4 font-serif text-sm leading-relaxed text-[#5C5855]">
              Xác nhận tức thì không cần đặt cọc cho nhóm dưới 8 khách. Vui lòng
              ghi chú nếu bạn có yêu cầu ăn chay, dị ứng thực phẩm hoặc trang
              trí kỷ niệm.
            </p>

            <div className="mt-7 space-y-3 border-t border-[#F1ECEA] pt-6 text-xs text-[#4A4745]">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#8E1F24]" />
                <span>42 Ngô Thời Nhiệm, Quận 3, TP. Hồ Chí Minh</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#8E1F24]" />
                <span>Mở cửa mỗi ngày · 11:00 – 22:30</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#8E1F24]" />
                <span>Hotline giữ bàn: 028 3824 6868</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {reservationCode ? (
              <div className="rounded-2xl border border-[#8E1F24]/25 bg-[#FDF7F7] p-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#8E1F24] px-3.5 py-1 text-xs font-semibold text-white">
                  <Check className="h-3.5 w-3.5" />
                  <span>Đã xác nhận giữ bàn</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#181818]">
                  Mã đặt bàn: {reservationCode}
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[#4A4745]">
                  Mộc Bistro đã giữ bàn <strong>{guestCount}</strong> tại{" "}
                  <strong>{selectedZone}</strong> vào lúc{" "}
                  <strong>{selectedSlot}</strong> ngày{" "}
                  <strong>{selectedDate}</strong>.
                  {selectedOfferNote
                    ? ` Ưu đãi áp dụng: ${selectedOfferNote}.`
                    : ""}
                </p>
                <button
                  type="button"
                  onClick={() => setReservationCode(null)}
                  className="mt-5 rounded-full bg-[#F4E4E4] px-5 py-2 text-xs font-semibold text-[#8E1F24] hover:bg-[#8E1F24] hover:text-white"
                >
                  Đặt thêm bàn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-5">
                {/* Date + Guests */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#4A4745]">
                      <Calendar className="h-3.5 w-3.5 text-[#8E1F24]" />
                      <span>Ngày dùng bữa</span>
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(event) => setSelectedDate(event.target.value)}
                      className="w-full rounded-xl border border-[#E6DFDC] bg-[#F8F7F6] px-4 py-2.5 text-sm text-[#181818] focus:border-[#8E1F24] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#4A4745]">
                      <Users className="h-3.5 w-3.5 text-[#8E1F24]" />
                      <span>Số lượng khách</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {["2 khách", "4 khách", "6 khách", "8+ khách"].map(
                        (option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setGuestCount(option)}
                            className={`rounded-xl py-2.5 text-xs font-semibold transition-colors ${
                              guestCount === option
                                ? "bg-[#8E1F24] text-white"
                                : "border border-[#E6DFDC] bg-[#F8F7F6] text-[#4A4745] hover:border-[#8E1F24]"
                            }`}
                          >
                            {option.replace(" khách", "")}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <span className="mb-1.5 block text-xs font-semibold text-[#4A4745]">
                    Khung giờ phục vụ
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {RESERVATION_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                          selectedSlot === slot
                            ? "bg-[#8E1F24] text-white"
                            : "border border-[#E6DFDC] bg-[#F8F7F6] text-[#4A4745] hover:border-[#8E1F24]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating zone */}
                <div>
                  <span className="mb-1.5 block text-xs font-semibold text-[#4A4745]">
                    Khu vực chỗ ngồi
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {RESERVATION_ZONES.map((zone) => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => setSelectedZone(zone)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          selectedZone === zone
                            ? "bg-[#F4E4E4] font-semibold text-[#8E1F24] ring-1 ring-[#8E1F24]"
                            : "border border-[#E6DFDC] bg-white text-[#5C5855] hover:border-[#8E1F24]"
                        }`}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Họ và tên khách hàng"
                    className="rounded-xl border border-[#E6DFDC] bg-[#F8F7F6] px-4 py-2.5 text-sm text-[#181818] placeholder:text-[#9A9490] focus:border-[#8E1F24] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                    placeholder="Số điện thoại xác nhận"
                    className="rounded-xl border border-[#E6DFDC] bg-[#F8F7F6] px-4 py-2.5 text-sm text-[#181818] placeholder:text-[#9A9490] focus:border-[#8E1F24] focus:outline-none"
                  />
                </div>

                {selectedOfferNote && (
                  <div className="flex items-center justify-between rounded-xl bg-[#F4E4E4]/70 px-4 py-2.5 text-xs text-[#8E1F24]">
                    <span>
                      Ưu đãi đang áp dụng: <strong>{selectedOfferNote}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedOfferNote("")}
                      aria-label="Gỡ ưu đãi"
                      className="rounded-full p-0.5 hover:bg-white/60"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8E1F24] py-3 text-xs font-semibold text-white transition-colors hover:bg-[#75181C]"
                >
                  <span>Xác nhận đặt bàn ngay</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="border-t border-[#ECE8E6] bg-white py-8">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-5 text-xs text-[#7A7572] sm:flex-row sm:px-8 lg:px-10">
          <span className="font-serif text-base font-bold text-[#8E1F24]">
            Mộc Bistro · Ẩm Thực Đương Đại
          </span>
          <p>© 2026 Mộc Bistro. Hương vị tinh hoa từ nguyên liệu bản địa.</p>
        </div>
      </footer>

      {/* ORDER CART DRAWER */}
      {cartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Đơn đặt món của bạn"
          className="fixed inset-0 z-50 flex justify-end bg-[#181818]/45 backdrop-blur-xs"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#ECE8E6] px-6 py-5">
              <div>
                <h3 className="text-base font-bold text-[#181818]">
                  Đơn đặt món ({totalOrderCount})
                </h3>
                <p className="text-xs text-[#7A7572]">
                  Chuẩn bị tươi mới khi bạn tới bàn hoặc giao tận nơi
                </p>
              </div>
              <button
                type="button"
                aria-label="Đóng giỏ món"
                onClick={() => setCartOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECE8E6] text-[#4A4745] hover:border-[#8E1F24] hover:text-[#8E1F24]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {orderItems.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="font-serif text-base text-[#5C5855]">
                    Chưa có món ăn nào trong đơn.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCartOpen(false)}
                    className="mt-4 rounded-full bg-[#F4E4E4] px-5 py-2 text-xs font-semibold text-[#8E1F24]"
                  >
                    Xem thực đơn ngay
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-[#F1ECEA]">
                  {orderItems.map(({ dish, quantity }) => (
                    <div
                      key={dish.id}
                      className="flex items-center gap-4 py-4"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(dish.image)}
                        alt={dish.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 shrink-0 rounded-full object-contain"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-[#181818]">
                          {dish.name}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-[#8E1F24] tabular-nums">
                          {formatVnd(dish.price * quantity)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(dish.id, -1)}
                            aria-label="Giảm số lượng"
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E6DFDC] text-[#4A4745] hover:border-[#8E1F24]"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold tabular-nums">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(dish.id, 1)}
                            aria-label="Tăng số lượng"
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E6DFDC] text-[#4A4745] hover:border-[#8E1F24]"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(dish.id, -quantity)}
                            aria-label="Xóa món"
                            className="ml-auto text-[#9A9490] hover:text-[#8E1F24]"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {orderItems.length > 0 && (
              <div className="border-t border-[#ECE8E6] bg-[#F8F7F6] px-6 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5C5855]">Tạm tính</span>
                  <span className="text-lg font-bold text-[#181818] tabular-nums">
                    {formatVnd(totalOrderAmount)}
                  </span>
                </div>

                {orderConfirmed ? (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#F4E4E4] px-4 py-3 text-xs font-semibold text-[#8E1F24]">
                    <Check className="h-4 w-4 shrink-0" />
                    <span>
                      Đã gửi đơn tới gian bếp Mộc Bistro! Nhân viên sẽ xác nhận
                      trong 3 phút.
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOrderConfirmed(true)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#8E1F24] py-3 text-xs font-semibold text-white transition-colors hover:bg-[#75181C]"
                  >
                    <span>Gửi đơn đặt món</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Subtle Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#181818] px-5 py-2.5 text-xs font-medium text-white shadow-xl">
          {toast}
        </div>
      )}
    </div>
  );
}
