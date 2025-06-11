import useCartSectionStore from "../store/useCartSectionStore";
import { toast } from "react-hot-toast";
const CartBtn = ({ product }) => {
    const { carts, addCart } = useCartSectionStore();

    const handleAddCart = (event) => {
        event.stopPropagation();
        const newCart = {
            id: Date.now(),
            productId: product.id,
            quantity: 1,
        }
        addCart(newCart);
    };

    const handleAdded = (event) => {
        event.stopPropagation();
        toast("Item is already added.");
    }

    const isAdded = carts.find((cart) => cart.productId === product.id);
    return (
        <>
            {isAdded ? (
                <button onClick={handleAdded} className="bg-black text-white border border-black rounded-md p-2 hover:bg-black hover:text-white text-nowrap mx-2">
                    Added
                </button>
            ) : (
                <button
                    onClick={handleAddCart}
                    className="border border-black rounded-md p-2 hover:bg-black hover:text-white"
                >
                    Add Cart
                </button>
            )}
        </>
    );
};

export default CartBtn;
