import CartBtn from './CartBtn';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';
const Cart = ({ product: { id, title, price, image, rating: { rate } } }) => {
    const rating = parseInt(rate).toFixed(0);
    const navigate = useNavigate();
    const handleOpenDetail = () => {
        navigate(`/product-detail/${id}`);
    }

    const truncate = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    return (
        <>
            <div
                onClick={handleOpenDetail}
                className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-md p-2 shadow-sm hover:shadow-lg transition duration-300 bg-white dark:bg-gray-900 cursor-pointer"
            >
                <div className="flex justify-center mb-2">
                    <img
                        src={image}
                        alt={title}
                        className="w-36 h-24 md:w-40 md:h-32 lg:w-40 lg:h-32 object-contain transform group-hover:rotate-3 group-hover:scale-105 transition duration-500 ease-in-out"
                    />
                </div>

                <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200 text-center line-clamp-2">
                    {truncate(title, 15)}
                </h3>

                <div className="flex items-center justify-between text-sm md:text-base mb-1">
                    <Rating rate={rating} />
                    <p className="text-gray-900 dark:text-gray-300 font-medium">${price}</p>
                </div>

                <div className="mt-auto">
                    <CartBtn
                        key={id}
                        product={{ id, title, price, image, rating: { rate } }}
                        current={false}
                    />
                </div>
            </div>


        </>
    )

}
export default Cart;