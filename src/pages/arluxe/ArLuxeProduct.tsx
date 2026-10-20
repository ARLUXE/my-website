import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Zap, Check, Truck, RotateCcw, Infinity as InfinityIcon, Cog, Wind } from "lucide-react";
import { ArLuxeShell } from "@/components/watch/ArLuxeShell";
import { WatchDial } from "@/components/watch/WatchDial";
import { WatchProductCard } from "@/components/watch/WatchProductCard";
import { useCart, formatINR } from "@/components/watch/CartContext";
import { getWatch, watches } from "@/data/watches";
import NotFound from "@/pages/NotFound";

export default function ArLuxeProduct() {
  const { slug } = useParams<{ slug: string }>();
  const watch = getWatch(slug ?? "");
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!watch) return <NotFound />;

  const related = watches.filter((w) => w.id !== watch.id).slice(0, 4);

  const handleAdd = () => {
    add(watch.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    add(watch.slug, qty);
    navigate("/projects/arluxe/checkout");
  };

  const specs: [string, string][] = [
    ["Model", watch.model],
    ["Case Material", watch.caseMaterial],
    ["Case Diameter", watch.caseDiameter],
    ["Strap", watch.strap],
    ["Dial Color", watch.dialColor],
    ["Movement", watch.movement],
    ["Dial Type", "Open Skeleton"],
    ["Display", "Analog · Live Time"],
    ["Water Resistance", watch.waterResistance],
    ["Availability", watch.availability],
    ["Value Indicator", watch.lifetimeValue],
  ];

  return (
    <ArLuxeShell
      title={`${watch.name} — AR LUXE | Concept by AR Studio`}
      description={watch.description}
      path={`/projects/arluxe/watches/${watch.slug}`}
    >
      <section className="pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            to="/projects/arluxe/catalogue"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to catalogue
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product photo + live dial */}
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Main product photo */}
              <div className="relative rounded-3xl border border-white/10 overflow-hidden min-h-[440px] bg-gradient-to-br from-ink-800 to-ink-950">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(circle at 50% 40%, ${watch.accent}55, transparent 60%)` }}
                />
                {imgError ? (
                  <div
                    className="w-full h-full aspect-[3/4] grid place-items-center"
                    style={{ background: `radial-gradient(circle at 50% 40%, ${watch.dialHex}, #070708 70%)` }}
                  >
                    <div
                      className="w-40 h-40 rounded-full border-2 opacity-80"
                      style={{
                        background: `radial-gradient(circle, ${watch.dialHex}, #000)`,
                        borderColor: `${watch.accent}66`,
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={watch.image}
                    alt={`${watch.name} — ${watch.dialColor} dial, ${watch.strap}`}
                    className="relative w-full h-full object-cover aspect-[3/4]"
                    loading="eager"
                    onError={() => setImgError(true)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/50 via-transparent to-transparent pointer-events-none" />
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest backdrop-blur"
                  style={{ background: `${watch.accent}33`, color: watch.accent }}
                >
                  {watch.model}
                </div>
              </div>

              {/* Interactive live dial panel */}
              <div className="relative rounded-2xl border border-[#c9a227]/20 bg-gradient-to-br from-ink-800/60 to-ink-950 p-6 grid place-items-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(circle at 50% 45%, ${watch.accent}55, transparent 65%)` }}
                />
                <div className="relative text-center">
                  <p className="text-[10px] tracking-[0.3em] text-[#c9a227] mb-3">LIVE TIME · YOUR LOCAL TIME</p>
                  <WatchDial watch={watch} size={200} showDigital />
                </div>
              </div>

              {/* Color variant swatches */}
              <div className="grid grid-cols-4 gap-3">
                {[watch.dialHex, watch.strapHex, watch.accent, "#1a1a1f"].map((c, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-white/10"
                    style={{ background: `radial-gradient(circle, ${c}, #070708)` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#c9a227] mb-3">{watch.model}</p>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">{watch.name}</h1>
              <p className="mt-4 font-display font-bold text-2xl text-[#c9a227]">{formatINR(watch.price)}</p>

              {/* Key attribute badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                  <Wind className="w-3.5 h-3.5 text-[#c9a227]" /> Automatic Movement
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                  <Cog className="w-3.5 h-3.5 text-[#c9a227]" /> Open Skeleton Dial
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-xs text-[#c9a227]">
                  <InfinityIcon className="w-3.5 h-3.5" /> {watch.lifetimeValue}
                </span>
              </div>

              <p className="mt-5 text-white/55 leading-relaxed">{watch.description}</p>

              {/* Availability */}
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
                <Check className="w-3.5 h-3.5" /> {watch.availability}
              </div>

              {/* Features */}
              <div className="mt-7">
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">Highlights</h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {watch.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1 h-1 rounded-full bg-[#c9a227]" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity + actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 rounded-full border border-white/15 px-2 py-1.5">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid place-items-center w-8 h-8 rounded-full hover:bg-white/5" aria-label="Decrease quantity">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                  <button type="button" onClick={() => setQty((q) => q + 1)} className="grid place-items-center w-8 h-8 rounded-full hover:bg-white/5" aria-label="Increase quantity">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  {added ? <Check className="w-4 h-4 text-emerald-400" /> : <ShoppingBag className="w-4 h-4 text-[#c9a227]" />}
                  {added ? "Added" : "Add to Cart"}
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-colors"
                >
                  <Zap className="w-4 h-4" /> Buy Now
                </button>
              </div>

              {/* Policies */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-ink-900/40">
                  <Truck className="w-5 h-5 text-[#c9a227] mt-0.5" />
                  <div>
                    <p className="font-semibold text-white/80">Demo Delivery</p>
                    <p className="text-xs text-white/40 mt-0.5">Illustrative 3–5 day window. This is a concept store — no real shipping.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-ink-900/40">
                  <RotateCcw className="w-5 h-5 text-[#c9a227] mt-0.5" />
                  <div>
                    <p className="font-semibold text-white/80">Demo Returns</p>
                    <p className="text-xs text-white/40 mt-0.5">14-day concept return policy. No real transactions occur.</p>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Specifications</h3>
                <dl className="divide-y divide-white/10 border-y border-white/10">
                  {specs.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-2 py-3 text-sm">
                      <dt className="text-white/40">{k}</dt>
                      <dd className="text-white/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">You may also like</h2>
              <Link to="/projects/arluxe/catalogue" className="text-sm text-white/60 hover:text-white inline-flex items-center gap-1.5">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((w) => (
                <WatchProductCard key={w.id} watch={w} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ArLuxeShell>
  );
}
