import { create } from "zustand";
const useCartSectionStore = create((set) => ({
    carts: [],
    addCart: (newCart) =>
        set((state) => ({
            carts: [...state.carts, newCart],
        })),
    increaseCart: (productId, amount) =>
        set((state) => ({
            carts: state.carts.map((cart) =>
                cart.productId === productId
                    ? { ...cart, quantity: cart.quantity + amount }
                    : { ...cart, quantity: cart.quantity }
            ),
        })),

    decreaseCart: (productId, amount) =>
        set((state) => ({
            carts: state.carts.map((cart) =>
                cart.productId === productId
                    ? { ...cart, quantity: cart.quantity - amount }
                    : { ...cart, quantity: cart.quantity }
            ),
        })),
    remove: (productId) =>
        set((state) => ({
            carts: state.carts.filter((cart) => cart.productId !== productId),
        })),
}));
export default useCartSectionStore;
