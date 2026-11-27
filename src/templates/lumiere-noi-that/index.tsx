"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatVnd } from "@/lib/paths";
import {
  LUMIERE_CATEGORIES,
  LUMIERE_HERO_IMAGE,
  LUMIERE_LOOKBOOK_IMAGE,
  LUMIERE_PRODUCTS,
  type LumiereCategory,
  type LumiereProduct,
} from "./data";

interface CartItem {
  key: string;
  product: LumiereProduct;
  finishName: string;
  quantity: number;
}

const FREE_SHIPPING_THRESHOLD = 15000000;

export function LumiereNoiThatTemplate() {
  const [selectedCategory, setSelectedCategory] =
    useState<LumiereCategory>("tat-ca");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">(
    "featured"
  );
  const [selectedFinishes, setSelectedFinishes] = useState<
    Record<string, string>
  >({});
  const [cart, setCart] = useState<CartItem[]>([
    {
      key: `${LUMIERE_PRODUCTS[3].id}::${LUMIERE_PRODUCTS[3].finishes[0].name}`,
      product: LUMIERE_PRODUCTS[3],
      finishName: LUMIERE_PRODUCTS[3].finishes[0].name,
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] =
    useState<LumiereProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const visibleProducts = useMemo(() => {
    const filtered =
      selectedCategory === "tat-ca"
        ? LUMIERE_PRODUCTS
        : LUMIERE_PRODUCTS.filter((p) => p.category === selectedCategory);

    if (sortBy === "price-asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "price-desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [selectedCategory, sortBy]);

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  );

  const shippingFee =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 350000;
  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const getActiveFinish = (product: LumiereProduct) =>
    selectedFinishes[product.id] ?? product.finishes[0].name;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2400);
  };

  const addToCart = (product: LumiereProduct, finishName?: string) => {
    const chosenFinish = finishName ?? getActiveFinish(product);
    const key = `${product.id}::${chosenFinish}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { key, product, finishName: chosenFinish, quantity: 1 }];
    });
    setOrderSubmitted(false);
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
  };

  const updateQuantity = (key: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (key: string) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] font-sans text-[#241E19]">
      {/* Top announcement bar */}
      <div className="bg-[#241E19] px-4 py-2 text-center text-[11px] font-medium tracking-wide text-[#EAE3D7]">
        Miễn phí giao hàng & lắp đặt tận nơi tại TP.HCM và Hà Nội cho đơn từ{" "}
        {formatVnd(FREE_SHIPPING_THRESHOLD)} · Bảo hành kết cấu gỗ 5 năm
      </div>

      {/* Storefront Header */}
      <header className="sticky top-0 z-30 border-b border-[#E5DDD2] bg-[#F7F4EF]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-serif text-xl font-semibold tracking-[0.06em] text-[#241E19] uppercase"
          >
            Lumière
          </a>

          <nav className="hidden items-center gap-7 text-xs font-medium tracking-wide text-[#5E5247] uppercase md:flex">
            <a href="#san-pham" className="transition-colors hover:text-[#241E19]">
              Sản phẩm
            </a>
            <a href="#lookbook" className="transition-colors hover:text-[#241E19]">
              Không gian mẫu
            </a>
            <a href="#cam-ket" className="transition-colors hover:text-[#241E19]">
              Chế tác
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9CFC2] bg-white px-4 py-2 text-xs font-semibold text-[#241E19] transition-colors hover:border-[#241E19]"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Giỏ hàng</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#241E19] px-1.5 text-[10px] font-bold text-[#F7F4EF]">
              {totalItems}
            </span>
          </button>
        </div>
      </header>

      {/* Editorial Hero */}
      <section id="top" className="mx-auto max-w-[1280px] px-5 pt-8 pb-14 sm:px-8 sm:pt-12 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#9A6B3F] uppercase">
              Bộ sưu tập Thu — Đông 2026
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] font-medium tracking-tight text-[#241E19] sm:text-5xl lg:text-[3.5rem]">
              Nghệ thuật sống chậm trong từng đường nét{" "}
              <span className="italic">gỗ tự nhiên</span>.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-[#5E5247] sm:text-base">
              Lumière chế tác nội thất nguyên bản từ gỗ sồi trắng, gỗ óc chó và
              đá Travertine tuyển chọn — mang lại sự tĩnh tại bền bỉ cho ngôi
              nhà Việt đương đại.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#san-pham"
                className="inline-flex items-center gap-2 rounded-full bg-[#241E19] px-6 py-3 text-xs font-semibold tracking-wide text-[#F7F4EF] uppercase transition-colors hover:bg-[#3A3129]"
              >
                <span>Khám phá sản phẩm</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="rounded-full border border-[#D4C9BA] bg-white/80 px-5 py-3 text-xs font-semibold tracking-wide text-[#241E19] uppercase transition-colors hover:border-[#241E19]"
              >
                Xem giỏ hàng ({totalItems})
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[26px] border border-[#E5DDD2] bg-[#EAE3D7]">
              <SafeImage
                src={LUMIERE_HERO_IMAGE}
                alt="Không gian phòng khách tối giản cao cấp Lumière"
                priority
                containerClassName="aspect-[16/11] w-full"
              />
              <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#241E19]/82 px-4 py-3 text-[#F7F4EF] backdrop-blur-md sm:right-6 sm:bottom-6 sm:left-6">
                <div>
                  <p className="text-[10px] tracking-[0.14em] text-[#D8CBB8] uppercase">
                    Tâm điểm không gian
                  </p>
                  <p className="text-sm font-semibold">
                    Phòng khách Atelier · Gỗ Sồi & Bouclé Bỉ
                  </p>
                </div>
                <span className="font-serif text-base font-medium text-[#E9C7A1]">
                  Từ {formatVnd(11400000)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Catalog */}
      <section
        id="san-pham"
        className="border-t border-[#E5DDD2] bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#9A6B3F] uppercase">
                Danh mục tuyển chọn
              </p>
              <h2 className="mt-1.5 font-serif text-3xl font-medium tracking-tight text-[#241E19] sm:text-4xl">
                Thiết kế dành cho từng căn phòng
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <label htmlFor="lumiere-sort" className="text-[#6E6257]">
                Sắp xếp:
              </label>
              <select
                id="lumiere-sort"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "featured" | "price-asc" | "price-desc"
                  )
                }
                className="rounded-full border border-[#DFD6C9] bg-[#F7F4EF] px-3.5 py-2 text-xs font-medium text-[#241E19] focus:border-[#241E19] focus:outline-none"
              >
                <option value="featured">Nổi bật</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
              </select>
            </div>
          </div>

          {/* Category filter bar */}
          <div className="mt-7 flex flex-wrap gap-2">
            {LUMIERE_CATEGORIES.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    active
                      ? "bg-[#241E19] text-[#F7F4EF]"
                      : "border border-[#E5DDD2] bg-[#F7F4EF]/70 text-[#5E5247] hover:border-[#241E19] hover:text-[#241E19]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => {
              const activeFinish = getActiveFinish(product);
              return (
                <article
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-[#EAE3D8] bg-[#FAF8F4] transition-all duration-300 hover:border-[#CBBDA9] hover:shadow-[0_18px_40px_rgba(36,30,25,0.07)]"
                >
                  <div className="relative overflow-hidden">
                    <SafeImage
                      src={product.image}
                      alt={product.name}
                      containerClassName="aspect-[4/3] w-full"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 rounded-full bg-[#241E19]/88 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#F7F4EF] uppercase backdrop-blur-sm">
                        {product.badge}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setQuickViewProduct(product)}
                      className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-semibold text-[#241E19] shadow-sm backdrop-blur-sm transition-transform hover:scale-105"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Xem chi tiết</span>
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="text-[11px] font-medium tracking-wide text-[#8A7B6C] uppercase">
                        {product.categoryLabel}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-[#241E19]">
                        {product.name}
                      </h3>

                      {/* Swatch selector */}
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          {product.finishes.map((finish) => {
                            const isSelected = activeFinish === finish.name;
                            return (
                              <button
                                key={finish.name}
                                type="button"
                                title={finish.name}
                                aria-label={`Chọn màu ${finish.name}`}
                                onClick={() =>
                                  setSelectedFinishes((prev) => ({
                                    ...prev,
                                    [product.id]: finish.name,
                                  }))
                                }
                                style={{ backgroundColor: finish.hex }}
                                className={`h-5 w-5 rounded-full border transition-transform ${
                                  isSelected
                                    ? "scale-110 ring-2 ring-[#241E19] ring-offset-2 ring-offset-[#FAF8F4]"
                                    : "border-black/15 hover:scale-105"
                                }`}
                              />
                            );
                          })}
                        </div>
                        <span className="truncate text-[11px] text-[#6E6257]">
                          {activeFinish}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#E8E0D4] pt-4">
                      <div>
                        <p className="text-sm font-bold text-[#241E19]">
                          {formatVnd(product.price)}
                        </p>
                        {product.originalPrice && (
                          <p className="text-[11px] text-[#9A8F83] line-through">
                            {formatVnd(product.originalPrice)}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(product, activeFinish)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#241E19] px-3.5 py-2 text-xs font-semibold text-[#F7F4EF] transition-colors hover:bg-[#9A6B3F]"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Thêm giỏ</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Lookbook & Craftsmanship */}
      <section
        id="lookbook"
        className="border-t border-[#E5DDD2] bg-[#F7F4EF] py-14 sm:py-20"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SafeImage
              src={LUMIERE_LOOKBOOK_IMAGE}
              alt="Xưởng thiết kế và không gian trưng bày Lumière"
              containerClassName="aspect-[4/3] w-full rounded-[24px] border border-[#E5DDD2]"
            />
          </div>
          <div id="cam-ket" className="lg:col-span-6 lg:pl-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#9A6B3F] uppercase">
              Triết lý chế tác
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#241E19] sm:text-4xl">
              Mỗi món đồ là một khoản đầu tư lâu dài cho cảm xúc ngôi nhà.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5E5247]">
              Từ khâu sấy gỗ đạt chuẩn độ ẩm nhiệt đới tới lớp dầu lau thực vật
              an toàn cho trẻ nhỏ, mọi sản phẩm Lumière đều trải qua 14 bước
              kiểm định trước khi giao tới tay gia chủ.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E5DDD2] bg-white p-4">
                <Truck className="h-4 w-4 text-[#9A6B3F]" />
                <p className="mt-2.5 text-sm font-bold text-[#241E19]">
                  Giao lắp chuẩn 5 sao
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#6E6257]">
                  Đội ngũ kỹ thuật riêng vận chuyển, cân chỉnh vị trí và dọn
                  sạch bao bì.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5DDD2] bg-white p-4">
                <ShieldCheck className="h-4 w-4 text-[#9A6B3F]" />
                <p className="mt-2.5 text-sm font-bold text-[#241E19]">
                  Bảo hành 5 năm kết cấu
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#6E6257]">
                  Bảo dưỡng bề mặt gỗ định kỳ miễn phí năm đầu tiên tại nhà.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DDD2] bg-[#241E19] py-10 text-[#D8CBB8]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-5 text-xs sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-serif text-lg font-semibold tracking-[0.06em] text-[#F7F4EF] uppercase">
              Lumière Nội Thất
            </p>
            <p className="mt-1 text-[#A79A8B]">
              Showroom Thảo Điền, TP. Thủ Đức · Mở cửa 09:00 – 20:00 mỗi ngày
            </p>
          </div>
          <p className="text-[#8E8173]">
            Bản demo tương tác thuộc bộ sưu tập Xưởng Giao Diện
          </p>
        </div>
      </footer>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[24px] bg-[#FAF8F4] shadow-2xl md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Đóng xem nhanh"
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#241E19] shadow-sm hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            <SafeImage
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              containerClassName="aspect-square md:aspect-auto md:h-full"
            />

            <div className="flex flex-col justify-between p-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#9A6B3F] uppercase">
                  {quickViewProduct.categoryLabel}
                </p>
                <h3 className="mt-1.5 font-serif text-2xl font-medium text-[#241E19]">
                  {quickViewProduct.name}
                </h3>
                <p className="mt-2 text-lg font-bold text-[#241E19]">
                  {formatVnd(quickViewProduct.price)}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#5E5247]">
                  {quickViewProduct.description}
                </p>

                <dl className="mt-4 space-y-2 border-y border-[#E5DDD2] py-3.5 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#8A7B6C]">Kích thước</dt>
                    <dd className="font-medium text-[#241E19]">
                      {quickViewProduct.dimensions}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#8A7B6C]">Chất liệu</dt>
                    <dd className="text-right font-medium text-[#241E19]">
                      {quickViewProduct.material}
                    </dd>
                  </div>
                </dl>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-[#241E19]">
                    Phiên bản: {getActiveFinish(quickViewProduct)}
                  </p>
                  <div className="mt-2 flex gap-2">
                    {quickViewProduct.finishes.map((finish) => {
                      const active =
                        getActiveFinish(quickViewProduct) === finish.name;
                      return (
                        <button
                          key={finish.name}
                          type="button"
                          onClick={() =>
                            setSelectedFinishes((prev) => ({
                              ...prev,
                              [quickViewProduct.id]: finish.name,
                            }))
                          }
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium ${
                            active
                              ? "border-[#241E19] bg-[#241E19] text-[#F7F4EF]"
                              : "border-[#DFD6C9] bg-white text-[#5E5247]"
                          }`}
                        >
                          <span
                            style={{ backgroundColor: finish.hex }}
                            className="h-3 w-3 rounded-full border border-black/20"
                          />
                          <span>{finish.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                  setIsCartOpen(true);
                }}
                className="mt-6 w-full rounded-full bg-[#241E19] py-3 text-xs font-semibold tracking-wide text-[#F7F4EF] uppercase transition-colors hover:bg-[#9A6B3F]"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Interactive Cart Drawer */}
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-md flex-col bg-[#FAF8F4] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E5DDD2] px-5 py-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#241E19]">
                  Giỏ hàng ({totalItems})
                </h3>
                <p className="text-[11px] text-[#7D7063]">
                  {remainingForFreeShip > 0
                    ? `Mua thêm ${formatVnd(remainingForFreeShip)} để được miễn phí vận chuyển`
                    : "Đơn hàng đã đủ điều kiện miễn phí giao & lắp đặt"}
                </p>
              </div>
              <button
                type="button"
                aria-label="Đóng giỏ hàng"
                onClick={() => setIsCartOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DFD6C9] bg-white text-[#241E19]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Free shipping progress bar */}
            <div className="h-1 w-full bg-[#EAE3D7]">
              <div
                style={{
                  width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                }}
                className="h-full bg-[#9A6B3F] transition-all duration-300"
              />
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-8 w-8 text-[#B8AA9B]" />
                  <p className="mt-3 text-sm font-semibold text-[#241E19]">
                    Giỏ hàng đang trống
                  </p>
                  <p className="mt-1 text-xs text-[#7D7063]">
                    Hãy chọn sản phẩm nội thất bạn yêu thích để trải nghiệm tính
                    tổng tự động.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-3.5 rounded-2xl border border-[#EAE3D8] bg-white p-3"
                  >
                    <SafeImage
                      src={item.product.image}
                      alt={item.product.name}
                      containerClassName="h-20 w-20 shrink-0 rounded-xl"
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-[#241E19]">
                            {item.product.name}
                          </p>
                          <p className="text-[11px] text-[#7D7063]">
                            {item.finishName}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label="Xóa sản phẩm"
                          onClick={() => removeFromCart(item.key)}
                          className="text-[#9E9082] hover:text-red-600"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-[#E5DDD2] bg-[#F7F4EF]">
                          <button
                            type="button"
                            aria-label="Giảm số lượng"
                            onClick={() => updateQuantity(item.key, -1)}
                            className="px-2 py-1 text-[#241E19] hover:text-[#9A6B3F]"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-6 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Tăng số lượng"
                            onClick={() => updateQuantity(item.key, 1)}
                            className="px-2 py-1 text-[#241E19] hover:text-[#9A6B3F]"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-[#241E19]">
                          {formatVnd(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Checkout Summary */}
            <div className="border-t border-[#E5DDD2] bg-white p-5">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6E6257]">
                  <span>Tạm tính</span>
                  <span>{formatVnd(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#6E6257]">
                  <span>Giao hàng & lắp đặt</span>
                  <span>
                    {shippingFee === 0 ? "Miễn phí" : formatVnd(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#EAE3D8] pt-2.5 text-sm font-bold text-[#241E19]">
                  <span>Tổng cộng</span>
                  <span>{formatVnd(subtotal + shippingFee)}</span>
                </div>
              </div>

              {orderSubmitted ? (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-2.5 text-xs font-medium text-emerald-800">
                  <Check className="h-4 w-4 shrink-0" />
                  <span>
                    Đơn hàng mô phỏng đã được xác nhận! Đây là trải nghiệm giỏ
                    hàng tương tác.
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={() => setOrderSubmitted(true)}
                  className="mt-4 w-full rounded-full bg-[#241E19] py-3 text-xs font-semibold tracking-wide text-[#F7F4EF] uppercase transition-colors hover:bg-[#9A6B3F] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Đặt hàng ngay (Demo)
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#241E19] px-4 py-2.5 text-xs font-medium text-[#F7F4EF] shadow-xl">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
