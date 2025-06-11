import { create } from "zustand";
const useCartSectionStore = create((set) => ({
    carts: [
        {
            id: 1,
            productId: 1,
            quantity: 2,
        },
        {
            id: 2,
            productId: 6,
            quantity: 3,
        },
        {
            id: 3,
            productId: 7,
            quantity: 2,
        },
    ],
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
}));
export default useCartSectionStore;
