import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ShoppingBag, CheckCircle2, Info } from "lucide-react";
import { ArLuxeShell } from "@/components/watch/ArLuxeShell";
import { SmartImage } from "@/components/ui";
import { useCart, formatINR } from "@/components/watch/CartContext";

export default function ArLuxeCheckout() {
  const { detailed, subtotal, count, clear } = useCart();
  const navigate = useNavigate();
  const shipping = 0;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + shipping + tax;

  return (
    <ArLuxeShell
      title="Demo Checkout — AR LUXE | Concept by AR Studio"
      description="A demonstration checkout experience for the AR LUXE concept store. No real payment is processed."
      path="/projects/arluxe/checkout"
    >
      <section className="pt-12 pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* Demo notice */}
          <div className="flex items-start gap-3 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-sm text-amber-200 mb-10">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">This is a demonstration checkout.</p>
              <p className="text-amber-200/70 mt-0.5">
                No real payment is collected and no order is placed. This exists
                to showcase the e-commerce design experience only.
              </p>
            </div>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mb-10">Demo Checkout</h1>

          {detailed.length === 0 ? (
            <div className="text-center py-20">
              <div className="grid place-items-center w-16 h-16 mx-auto rounded-full border border-white/10 text-white/30 mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h2 className="font-display font-semibold text-xl mb-2">Your cart is empty</h2>
              <p className="text-white/40 text-sm mb-6">Add a timepiece to begin the demo checkout.</p>
              <Link
                to="/projects/arluxe/catalogue"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060]"
              >
                Browse the collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
              {/* Order summary */}
              <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6">
                <h2 className="font-display font-semibold text-lg mb-5">Order ({count} items)</h2>
                <ul className="divide-y divide-white/10">
                  {detailed.map(({ watch, quantity }) => (
                    <li key={watch.slug} className="py-4 flex gap-4">
                      <div className="shrink-0 w-14 h-14 rounded-lg bg-ink-800 border border-white/10 overflow-hidden">
                        <SmartImage src={watch.image} alt={watch.name} accent="#c9a227" className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display font-semibold text-sm">{watch.name}</p>
                        <p className="text-xs text-white/40">{watch.model} · Qty {quantity}</p>
                      </div>
                      <span className="font-semibold text-sm">{formatINR(watch.price * quantity)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Totals + place order */}
              <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 h-fit">
                <h2 className="font-display font-semibold text-lg mb-5">Summary</h2>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-white/50">Subtotal</dt><dd>{formatINR(subtotal)}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Shipping</dt><dd>{shipping === 0 ? "Free" : formatINR(shipping)}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Tax (12%)</dt><dd>{formatINR(tax)}</dd></div>
                  <div className="flex justify-between pt-3 border-t border-white/10"><dt className="font-semibold">Total</dt><dd className="font-display font-bold text-xl text-[#c9a227]">{formatINR(total)}</dd></div>
                </dl>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    clear();
                    alert("Demo checkout complete. No real payment was processed.");
                    navigate("/projects/arluxe");
                  }}
                  className="mt-6 space-y-3"
                >
                  <input disabled placeholder="Name (demo)" className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-white/10 text-sm opacity-60" />
                  <input disabled placeholder="Address (demo)" className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-white/10 text-sm opacity-60" />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Place Demo Order
                  </button>
                  <p className="text-[11px] text-white/30 text-center">No payment is collected. For demonstration only.</p>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </ArLuxeShell>
  );
}
