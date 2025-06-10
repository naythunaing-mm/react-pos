import { Link } from "react-router-dom";
const CartBtn = () => {
    const name = "My Cart";
    var count = 2;
    return (
        <>
            <Link to="/my-cart" className="nav-btn">
                <button className="relative border border-black rounded-md p-2 hover:bg-black hover:text-white">
                    {name}
                    <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs px-2 py-0.5 flex items-center justify-center">
                        {count}
                    </span>
                </button>
            </Link>

        </>
    )
}
export default CartBtn;