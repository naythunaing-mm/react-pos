import useCustomerReviewStore from "../store/useCustomerReviewStore";
import { HiOutlineTrash, HiOutlineUserCircle } from "react-icons/hi2";

const ReviewSection = ({ review }) => {
    const { deleteCustomerReview } = useCustomerReviewStore();
    const handleDelete = () => {
        deleteCustomerReview(review.id);
    }
    return (
        <>
            <div className="my-4 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between gap-4 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mt-6">

                    <div className="flex-shrink-0 w-10 h-10">
                        <HiOutlineUserCircle className="w-10 h-10" />
                    </div>

                    <p className="flex-1 min-w-[150px] text-sm sm:text-md font-semibold text-gray-900 dark:text-gray-400 break-words text-justify">
                        {review.name}
                    </p>

                    <div className="flex-shrink-0 w-6 h-6">
                        <HiOutlineTrash
                            onClick={handleDelete}
                            className="w-6 h-6 dark:text-gray-400 cursor-pointer"
                        />
                    </div>

                </div>
            </div>

        </>
    )
}
export default ReviewSection