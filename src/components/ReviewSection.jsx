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
            <div className="my-4">
                <div className="flex items-center justify-between mt-6 space-x-3 border border-gray-200 rounded-lg p-4">
                    <div className="bg-slate-200 p-2">
                        <HiOutlineUserCircle className="w-7 h-7 " />
                    </div>
                    <p className="text-md text-justify w-64 font-semibold text-gray-900 dark:text-white break-words">
                        {review.name}
                    </p>
                    <span onClick={handleDelete} className="p-2 bg-red-200 rounded-full"><HiTrash className="w-6 h-6" /></span>
                </div>
            </div>
        </>
    )
}
export default ReviewSection