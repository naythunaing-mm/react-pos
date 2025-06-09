import Btn from './Btn';
import { Link } from 'react-router-dom';
const Cart = ({ product: { id, title, price, image, rating: { rate } } }) => {
    const rating = Math.round(rate);
    const Star = ({ filled }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={filled ? "#facc15" : "none"} // yellow-400 if filled
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#facc15"
            className="w-5 h-5 border-yellow-300"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
        </svg>
    );

    return (
        <>
            <Link to={`/product-details/${id}`} className="cart flex flex-col border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                    <img src={image} alt={title} className="cart-img w-40 h-44" />
                </div>
                <h3 className="text-md font-semibold mb-2 text-justify">{title}</h3>
                <div className="flex items-center my-2">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} filled={index < rating} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({rate.toFixed(1)})</span>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-gray-700 font-medium">{price}</p>
                    <Btn key={id} />
                </div>
            </Link>

        </>
    )

}
export default Cart;