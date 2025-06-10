import Btn from './Btn';
import { Link } from 'react-router-dom';
import Rating from './Rating';
const Cart = ({ product: { id, title, price, image, rating: { rate } } }) => {
    const rating = parseInt(rate).toFixed(0);

    return (
        <>
            <Link to={`/product-details/${id}`} className="cart flex flex-col border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                    <img src={image} alt={title} className="cart-img w-40 h-44" />
                </div>
                <h3 className="text-md font-semibold mb-2 text-justify">{title}</h3>
                <div className="flex items-center my-2">
                    <Rating rate={rating} />
                    <span className="ml-2 text-sm text-gray-600">({rate.toFixed(1)})</span>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-gray-700 font-medium">${price}</p>
                    <Btn key={id} />
                </div>
            </Link>

        </>
    )

}
export default Cart;