import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
import { ICartStore, IOrder } from "../types/interface";

/**
 * Функция для создания хранилища с уникальным именем
 * @param {string} storageName
 * @return {Function}
 */
export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      products: [],
      orders: [],

      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.products.find(
            (p) => p.id === product.id
          );
          if (existingProduct) {
            return {
              products: state.products.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
              ),
            };
          }
          return { products: [...state.products, { ...product, quantity: 1 }] };
        }),

      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity } : p
          ),
        })),

      clearCart: () => set({ products: [] }),

      addOrder: (order: IOrder) =>
        set((state) => {
          // const existingOrder = state.orders.find((o) => o.id === order.id);

          return { orders: [...state.orders, { ...order }] };
        }),
    }),
    {
      name: "cart-storage", // Ключ в localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
