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
            <div onClick={handleOpenDetail} className="cart flex flex-col border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300 dark:border-gray-600">
                <div className="flex justify-center mb-2 hover:animate-pulse">
                    <img src={image} alt={title} className="cart-img w-40 h-32 md:h-36 lg:h-36 hover:rotate-6 transition duration-700 ease-in-out" />
                </div>
                <h3 className="text-xs md:text-xl lg:text-xl font-semibold text-justify">{truncate(title, 15)}</h3>
                {/* <div className="flex items-center my-2">
                    <Rating className="w-2" rate={rating} />
                    <span className="ml-2 text-sm text-gray-600">({rate.toFixed(1)})</span>
                </div> */}
                <div className="my-2">
                    <Rating className="w-1 my-2" rate={rating} />
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-gray-700 text-xs md:text-lg lg:text-lg dark:text-white">${price}</p>
                    <CartBtn key={id} product={{ id, title, price, image, rating: { rate } }} current={false} />
                </div>
            </div>

        </>
    )

}
export default Cart;