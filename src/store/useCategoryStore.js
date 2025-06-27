import { create } from "zustand";
const useCategoryStore = create((set) => ({
    categories: [
        {
            id: 0,
            isActive: true,
            category: "All",
        },
        {
            id: 2,
            isActive: false,
            category: "jewelery",
        },
        {
            id: 3,
            isActive: false,
            category: "electronics",
        },
        {
            id: 4,
            isActive: false,
            category: "women's clothing",
        },
        {
            id: 1,
            isActive: false,
            category: "men's clothing",
        },
    ],
    activeCategory: (categoryId) =>
        set((state) => ({
            categories: state.categories.map((category) =>
                category.id === categoryId
                    ? { ...category, isActive: true }
                    : { ...category, isActive: false }
            ),
        })),
}));
export default useCategoryStore;
