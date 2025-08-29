import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductStore {
  products: Product[];
  favorites: number[];
  cart: { productId: number; quantity: number }[];
  
  // Actions
  setProducts: (products: Product[]) => void;
  addToFavorites: (productId: number) => void;
  removeFromFavorites: (productId: number) => void;
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useProductStore = create<ProductStore>()(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        favorites: [],
        cart: [],

        setProducts: products => set({ products }),

        addToFavorites: productId => {
          const { favorites } = get();
          if (!favorites.includes(productId)) {
            set({ favorites: [...favorites, productId] });
          }
        },

        removeFromFavorites: productId => {
          const { favorites } = get();
          set({ favorites: favorites.filter(id => id !== productId) });
        },

        addToCart: (productId, quantity = 1) => {
          const { cart } = get();
          const existingItem = cart.find(item => item.productId === productId);

          if (existingItem) {
            set({
              cart: cart.map(item =>
                item.productId === productId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            });
          } else {
            set({ cart: [...cart, { productId, quantity }] });
          }
        },

        removeFromCart: productId => {
          const { cart } = get();
          set({ cart: cart.filter(item => item.productId !== productId) });
        },

        updateCartQuantity: (productId, quantity) => {
          const { cart } = get();
          if (quantity <= 0) {
            get().removeFromCart(productId);
            return;
          }

          set({
            cart: cart.map(item =>
              item.productId === productId ? { ...item, quantity } : item
            ),
          });
        },

        clearCart: () => set({ cart: [] }),
      }),
      {
        name: 'product-storage',
        partialize: state => ({
          favorites: state.favorites,
          cart: state.cart,
        }),
      }
    )
  )
);
