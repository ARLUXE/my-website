import { Link } from "react-router-dom";
import { Plus, Infinity as InfinityIcon, Cog, Wind } from "lucide-react";
import { useState } from "react";
import type { Watch } from "@/data/watches";
import { formatINR } from "@/data/watches";
import { useCart } from "./CartContext";

export function WatchProductCard({ watch }: { watch: Watch }) {
  const { add } = useCart();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-ink-800/60 to-ink-900 overflow-hidden hover:border-[#c9a227]/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)]">
      {/* Product photo */}
      <Link
        to={`/projects/arluxe/watches/${watch.slug}`}
        className="block relative aspect-[3/4] bg-gradient-to-br from-ink-800 to-ink-950 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 40%, ${watch.accent}55, transparent 60%)` }}
        />
        {imgError ? (
          <FallbackWatch watch={watch} />
        ) : (
          <img
            src={watch.image}
            alt={`${watch.name} — ${watch.dialColor} dial, ${watch.strap}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="text-[10px] tracking-widest text-white/60 font-mono bg-black/40 backdrop-blur px-2 py-1 rounded">
            {watch.model}
          </span>
          {/* Lifetime Value badge */}
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#c9a227] bg-[#c9a227]/15 backdrop-blur px-2 py-1 rounded border border-[#c9a227]/30">
            <InfinityIcon className="w-3 h-3" /> {watch.lifetimeValue}
          </span>
        </div>

        {/* Automatic + Skeleton badge */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-white/80 bg-black/40 backdrop-blur px-2 py-1 rounded">
            <Wind className="w-3 h-3 text-[#c9a227]" /> Automatic
          </span>
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-white/80 bg-black/40 backdrop-blur px-2 py-1 rounded">
            <Cog className="w-3 h-3 text-[#c9a227]" /> Skeleton
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display font-semibold text-base truncate">{watch.name}</h3>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
            style={{ background: `${watch.accent}22`, color: watch.accent }}
          >
            {watch.availability}
          </span>
        </div>
        <p className="text-xs text-white/40 mb-3">{watch.dialColor} · {watch.caseDiameter} · {watch.strap}</p>

        {/* Quick specs row */}
        <div className="flex items-center gap-3 mb-3 text-[10px] text-white/35">
          <span className="inline-flex items-center gap-1">
            <Wind className="w-3 h-3" /> Auto
          </span>
          <span className="inline-flex items-center gap-1">
            <Cog className="w-3 h-3" /> Skeleton
          </span>
          <span className="inline-flex items-center gap-1">
            <InfinityIcon className="w-3 h-3 text-[#c9a227]" /> Lifetime
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-lg">{formatINR(watch.price)}</span>
          <button
            type="button"
            onClick={() => add(watch.slug)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#c9a227] text-black text-xs font-semibold hover:bg-[#e0c060] transition-colors"
            aria-label={`Add ${watch.name} to cart`}
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

// Gradient fallback when the product photo fails to load.
function FallbackWatch({ watch }: { watch: Watch }) {
  return (
    <div
      className="w-full h-full grid place-items-center"
      style={{ background: `radial-gradient(circle at 50% 40%, ${watch.dialHex}, #070708 70%)` }}
    >
      <div
        className="w-24 h-24 rounded-full border-2 opacity-80"
        style={{
          background: `radial-gradient(circle, ${watch.dialHex}, #000)`,
          borderColor: `${watch.accent}66`,
        }}
      />
    </div>
  );
}
