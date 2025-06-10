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
    addCart: (newProduct) =>
        set((state) => ({
            carts: state.carts.map((cart) =>
                cart.productId === newProduct.id
                    ? { ...cart, quantity: cart.quantity + 1 }
                    : state.carts.push(newProduct)
            ),
        })),
}));
export default useCartSectionStore;
