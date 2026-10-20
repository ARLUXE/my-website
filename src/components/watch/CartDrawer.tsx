import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { SmartImage } from "@/components/ui";
import { useCart, formatINR } from "./CartContext";

export function CartDrawer() {
  const { isOpen, close, detailed, setQty, remove, subtotal, count, clear } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden={!isOpen}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ink-900 border-l border-white/10 shadow-2xl transition-transform duration-400 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#c9a227]" />
            <h2 className="font-display font-bold text-lg">Your Cart</h2>
            <span className="text-xs text-white/40">({count})</span>
          </div>
          <button
            type="button"
            onClick={close}
            className="grid place-items-center w-9 h-9 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {detailed.length === 0 ? (
            <div className="text-center py-16">
              <div className="grid place-items-center w-14 h-14 mx-auto rounded-full border border-white/10 text-white/30 mb-4">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-white/50 text-sm">Your cart is empty.</p>
              <Link
                to="/projects/arluxe"
                onClick={close}
                className="mt-4 inline-block text-sm text-[#c9a227] hover:text-[#e0c060] transition-colors"
              >
                Explore the collection →
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {detailed.map(({ watch, quantity }) => (
                <li key={watch.slug} className="flex gap-4">
                  <Link
                    to={`/projects/arluxe/watches/${watch.slug}`}
                    onClick={close}
                    className="shrink-0 w-16 h-16 rounded-lg bg-ink-800 border border-white/10 overflow-hidden"
                  >
                    <SmartImage src={watch.image} alt={watch.name} accent="#c9a227" className="w-full h-full object-cover" loading="lazy" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/projects/arluxe/watches/${watch.slug}`}
                      onClick={close}
                      className="font-display font-semibold text-sm truncate block hover:text-[#c9a227]"
                    >
                      {watch.name}
                    </Link>
                    <p className="text-xs text-white/40">{watch.model}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setQty(watch.slug, quantity - 1)}
                          className="grid place-items-center w-6 h-6 rounded border border-white/10 hover:bg-white/5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQty(watch.slug, quantity + 1)}
                          className="grid place-items-center w-6 h-6 rounded border border-white/10 hover:bg-white/5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">{formatINR(watch.price * quantity)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(watch.slug)}
                    className="self-start text-white/30 hover:text-red-400 transition-colors"
                    aria-label={`Remove ${watch.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {detailed.length > 0 && (
          <div className="px-6 py-5 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Subtotal</span>
              <span className="font-display font-bold text-xl">{formatINR(subtotal)}</span>
            </div>
            <p className="text-[11px] text-white/30">Shipping and taxes calculated at demo checkout.</p>
            <Link
              to="/projects/arluxe/checkout"
              onClick={close}
              className="block w-full text-center px-6 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-colors"
            >
              Proceed to Demo Checkout
            </Link>
            <button
              type="button"
              onClick={clear}
              className="block w-full text-center text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
