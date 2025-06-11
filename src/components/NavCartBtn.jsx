import { Link } from "react-router-dom";
import useCartSectionStore from "../store/useCartSectionStore";
const NavCartBtn = () => {
    const name = "My Cart";
    const { carts } = useCartSectionStore();
    const count = carts.reduce((total, cart) => total + cart.quantity, 0);
    return (
        <>
            <Link to="/my-cart" className="nav-btn">
                <button className="relative border border-black rounded-md p-2 hover:bg-black hover:text-white">
                    {name}
                    {count > 0 && <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs px-2 py-0.5 flex items-center justify-center">{count}</span>}
                </button>
            </Link>

        </>
    )
}
export default NavCartBtn;