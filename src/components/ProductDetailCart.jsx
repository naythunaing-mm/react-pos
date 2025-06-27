import { useParams } from "react-router-dom";
import BreadCrump from "../components/BreadCrump";
import useProductStore from "../store/useProductStore";
import CartBtn from "./CartBtn";
import Rating from "../components/Rating";
import useCustomerReviewStore from "../store/useCustomerReviewStore";
import { useState } from "react";
import ReviewSection from "./ReviewSection";
import message from "../assets/Message.svg"


const ProductDetailCart = () => {
    const productId = useParams();
    const { products } = useProductStore();
    const currentProduct = products.find((product) => product.id === parseInt(productId.id));
    const [data, setData] = useState("");
    const { customerReviews, setCustomerReviews } = useCustomerReviewStore();

    const handleInputData = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = () => {
        if (data === "") return alert("Please enter your review.");
        const newData = { id: Date.now(), name: data };
        setCustomerReviews(newData);
        setData("");
    }

    return (<>
        <BreadCrump currentPageTitle="Product Detail" />
        <div className="mb-2 cart border border-gray-200 rounded-2xl p-4 shadow transition-shadow duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4">
                <div className="flex flex-col justify-center items-center hover:animate-pulse">
                    <img
                        src={currentProduct.image}
                        alt={currentProduct.title}
                        className="w-40 h-44 object-contain hover:rotate-6 transition duration-700 ease-in-out"
                    />
                </div>
                <div className="my-1 md:my-3 lg:my-3 flex flex-col justify-between items-start p-4">
                    <h3 className="text-xs md:text-xl lg:text-xl font-semibold my-2 text-justify leading-snug">
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
                        <p className="text-xs md:text-xl lg:text-xl text-gray-500 mb-3">Stock: <span className="bg-slate-700 text-white px-2 rounded-sm">{currentProduct.stock}</span></p>
                    </div>
                    <div className="w-full justify-between items-center flex">
                        <span className="text-lg font-medium text-gray-800">
                            ${currentProduct.price}
                        </span>
                        <CartBtn key={currentProduct.id} product={currentProduct} />
                    </div>
                </div>
            </div>
        </div>
        <div className="review-gp">
            <hr className="w-48 h-1 mx-auto my-7 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
            <p className="text-xl text-black font-semibold mt-5 text-center mb-2">Reviews</p>
            <div className="h-[300px] overflow-y-scroll overflow-x-hidden p-4 bg-white border border-gray-200 rounded-lg scrollbar-stable">
                {customerReviews.length === 0 ?
                    <div className="h-[300px] max-w-full rounded-lg"><img src={message} alt="message" /></div>
                    : customerReviews.map((review) => <ReviewSection key={review.id} review={review} />)}
            </div>
            <div className="w-full">
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea value={data} onChange={handleInputData} id="chat" rows="2" className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Review message..."></textarea>
                    <button onClick={handleSubmit} className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg className="w-8 h-8 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}
export default ProductDetailCart;