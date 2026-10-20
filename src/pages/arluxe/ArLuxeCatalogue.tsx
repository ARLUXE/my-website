import { useState, useMemo } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import { ArLuxeShell } from "@/components/watch/ArLuxeShell";
import { WatchProductCard } from "@/components/watch/WatchProductCard";
import { watches, strapOptions, dialOptions } from "@/data/watches";

type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

export default function ArLuxeCatalogue() {
  const [strap, setStrap] = useState("All");
  const [dial, setDial] = useState("All");
  const [maxPrice, setMaxPrice] = useState(60000);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = watches.filter((w) => {
      if (strap !== "All" && w.strap !== strap) return false;
      if (dial !== "All" && w.dialColor !== dial) return false;
      if (w.price > maxPrice) return false;
      if (query && !w.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [strap, dial, maxPrice, query, sort]);

  return (
    <ArLuxeShell
      title="Catalogue — AR LUXE | Concept by AR Studio"
      description="Browse all eight AR LUXE concept timepieces. Filter by strap, dial color, and price."
      path="/projects/arluxe/catalogue"
    >
      <section className="pt-12 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-[#c9a227] mb-3">FULL CATALOGUE</p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl">Eight timepieces.</h1>
          </div>

          {/* Filters */}
          <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-5 mb-10 space-y-5">
            <div className="flex items-center gap-2 text-sm text-white/50 mb-1">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <label className="block">
                <span className="block text-xs text-white/40 mb-1.5">Search</span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Watch name..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-ink-800 border border-white/10 text-sm focus:border-[#c9a227]/60 outline-none"
                  />
                </div>
              </label>
              <label className="block">
                <span className="block text-xs text-white/40 mb-1.5">Strap</span>
                <select value={strap} onChange={(e) => setStrap(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-ink-800 border border-white/10 text-sm focus:border-[#c9a227]/60 outline-none">
                  <option>All</option>
                  {strapOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs text-white/40 mb-1.5">Dial Color</span>
                <select value={dial} onChange={(e) => setDial(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-ink-800 border border-white/10 text-sm focus:border-[#c9a227]/60 outline-none">
                  <option>All</option>
                  {dialOptions.map((d) => <option key={d}>{d}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs text-white/40 mb-1.5">Sort</span>
                <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="w-full px-3 py-2.5 rounded-lg bg-ink-800 border border-white/10 text-sm focus:border-[#c9a227]/60 outline-none">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A–Z</option>
                </select>
              </label>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-white/40 mb-1.5">
                <span>Max Price</span>
                <span className="text-white/70">₹{maxPrice.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={60000}
                step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#c9a227]"
              />
            </div>
          </div>

          <p className="text-sm text-white/40 mb-6">{filtered.length} timepiece{filtered.length !== 1 ? "s" : ""}</p>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-white/40">
              <p>No timepieces match these filters.</p>
              <button onClick={() => { setStrap("All"); setDial("All"); setMaxPrice(60000); setQuery(""); }} className="mt-4 text-sm text-[#c9a227] hover:text-[#e0c060]">
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((w) => (
                <WatchProductCard key={w.id} watch={w} />
              ))}
            </div>
          )}
        </div>
      </section>
    </ArLuxeShell>
  );
}
