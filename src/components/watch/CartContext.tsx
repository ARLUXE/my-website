import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { watches, type Watch, formatINR } from "@/data/watches";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: { watch: Watch; quantity: number }[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "arluxe-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = (slug: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) => (i.slug === slug ? { ...i, quantity: i.quantity + qty } : i));
      }
      return [...prev, { slug, quantity: qty }];
    });
    setIsOpen(true);
  };

  const remove = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug));

  const setQty = (slug: string, qty: number) => {
    if (qty <= 0) return remove(slug);
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, quantity: qty } : i)));
  };

  const clear = () => setItems([]);

  const detailed = useMemo(
    () =>
      items
        .map((i) => {
          const watch = watches.find((w) => w.slug === i.slug);
          return watch ? { watch, quantity: i.quantity } : null;
        })
        .filter((x): x is { watch: Watch; quantity: number } => x !== null),
    [items]
  );

  const count = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);
  const subtotal = useMemo(() => detailed.reduce((s, d) => s + d.watch.price * d.quantity, 0), [detailed]);

  const value: CartContextType = {
    items,
    add,
    remove,
    setQty,
    clear,
    count,
    subtotal,
    detailed,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export { formatINR };
