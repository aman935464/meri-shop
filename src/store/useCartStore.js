import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import IndexedDBStorage from "./IndexedDBStorage";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const items = get().cart;
        const exists = items?.find((item) => item.id === product.id);
        if (exists) {
          set({
            cart: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({ cart: [...items, { ...product, quantity: 1 }] });
        }
      },
      removeCart: (id) =>
        set({ cart: get().cart.filter((item) => item.id !== id) }),
      decreaseQty: (id) => {
        const items = get().cart;
        const exist = items.find((item) => item.id === id);
        if (!exist) return;
        const newCart =
          exist.quantity === 1
            ? items.filter((item) => item.id !== id)
            : items.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
              );
        set({ cart: newCart });
      },
      increaseQty: (id) => {
        const items = get().cart;
        const exist = items.find((item) => item.id === id);
        if (!exist) return;
        const newCart =
          exist.quantity === 0
            ? items.filter((item) => item.id !== id)
            : items.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              );
        set({ cart: newCart });
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-Storage",
      storage: createJSONStorage(() => IndexedDBStorage),
    },
  ),
);

export default useCartStore;
