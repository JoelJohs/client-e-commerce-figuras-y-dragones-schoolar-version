import { create } from "zustand";

const getInitialCart = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const useCartStore = create((set) => ({
  cart: getInitialCart(),
  addToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (itemId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
}));

export default useCartStore;
