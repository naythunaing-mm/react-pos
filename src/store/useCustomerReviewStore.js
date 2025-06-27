import { create } from "zustand";
const useCustomerReviewStore = create((set) => ({
    customerReviews: [],
    setCustomerReviews: (newData) =>
        set((state) => ({
            customerReviews: [...state.customerReviews, newData],
        })),
    deleteCustomerReview: (id) =>
        set((state) => ({
            customerReviews: state.customerReviews.filter(
                (review) => review.id !== id
            ),
        })),
}));
export default useCustomerReviewStore;
