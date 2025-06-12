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

    return (
        <>
            <div onClick={handleOpenDetail} className="cart flex flex-col border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4 hover:animate-pulse">
                    <img src={image} alt={title} className="cart-img w-40 h-44" />
                </div>
                <h3 className="text-xs md:text-xl lg:text-xl font-semibold mb-2 text-justify">{title}</h3>
                <div className="flex items-center my-2">
                    <Rating rate={rating} />
                    <span className="ml-2 text-sm text-gray-600">({rate.toFixed(1)})</span>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-gray-700 font-medium">${price}</p>
                    <CartBtn key={id} product={{ id, title, price, image, rating: { rate } }} current={false} />
                </div>
            </div>

        </>
    )

}
export default Cart;