/**
 * TODO: сдлеать стор для хранения товаров, помещенных в корзину
 */
import { persist, subscribeWithSelector } from "zustand/middleware";
import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  article: number;
  quantity: number;
}

interface CartStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

/**
 * Функция для создания хранилища с уникальным именем
 * @param {string} storageName
 * @return {Function}
 */
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],

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

      checkWorking: () => set(() => console.log("this is working!")),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity } : p
          ),
        })),

      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage", // Ключ в localStorage
      getStorage: () => localStorage,
    }
  )
);
