import { useParams } from "react-router-dom";
import BreadCrump from "../components/BreadCrump";
import useProductStore from "../store/useProductStore";
import Btn from "../components/Btn";
import Rating from "../components/Rating";

const ProductDetailCart = () => {
    const productId = useParams();
    const { products } = useProductStore();
    const currentProduct = products.find((product) => product.id === parseInt(productId.id));

    return (<>
        <BreadCrump currentPageTitle="Product Detail" />
        <div className="cart  border border-gray-200 rounded-2xl p-4 shadow transition-shadow duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4">
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={currentProduct.image}
                        alt={currentProduct.title}
                        className="w-40 h-44 object-contain"
                    />
                </div>
                <div className="my-1 md:my-3 lg:my-3 flex flex-col justify-between items-start p-4">
                    <h3 className="text-md font-semibold my-2 text-justify leading-snug">
                        {currentProduct.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-justify mb-3">
                        {currentProduct.description}
                    </p>
                    <div className="flex items-center mb-3">
                        <Rating rate={currentProduct.rating.rate} />
                        <span className="ml-2 text-sm text-gray-500">
                            ({currentProduct.rating.rate.toFixed(1)})
                        </span>
                    </div>
                    <div className="my-4">
                        <p className="text-md text-gray-500 mb-3">Stock: <span className="bg-slate-700 text-white px-2 rounded-sm">{currentProduct.stock}</span></p>
                    </div>
                    <div className="w-full justify-between items-center flex">
                        <span className="text-lg font-medium text-gray-800">
                            ${currentProduct.price}
                        </span>
                        <Btn key={currentProduct.id} />
                    </div>
                </div>
            </div>

        </div>

    </>)
}
export default ProductDetailCart;