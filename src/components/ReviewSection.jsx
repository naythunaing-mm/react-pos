import useCustomerReviewStore from "../store/useCustomerReviewStore";
import { HiTrash } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";

const ReviewSection = ({ review }) => {
    const { deleteCustomerReview } = useCustomerReviewStore();
    const handleDelete = () => {
        deleteCustomerReview(review.id);
    }
    return (
        <>
            <div className="my-4 dark:bg-gray-900">
                <div className="flex items-center justify-between mt-6 space-x-3 border dark:border-gray-600 border-gray-200 rounded-lg p-4">

                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <p className="text-md text-justify w-64 font-semibold text-gray-900 dark:text-white break-words">
                        {review.name}
                    </p>
                    <span onClick={handleDelete} className="p-2 bg-red-200 rounded-full dark:bg-red-600"><HiTrash className="w-6 h-6" /></span>
                </div>
            </div>
        </>
    )
}
export default ReviewSection