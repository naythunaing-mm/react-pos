import useCategoryStore from "../store/useCategoryStore";
const CategoryBtn = ({ id, category, current }) => {
    const { activeCategory } = useCategoryStore();
    const handleClick = () => {
        activeCategory(id);
    };
    return (
        <>
            <button
                onClick={handleClick} className={`${current ? "bg-black dark:text-black dark:bg-gray-600  text-white" : "bg-white text-black"
                    } border dark:text-white border-black rounded-md p-1 px-2 hover:bg-black hover:text-white text-nowrap mx-2 dark:bg-gray-700`}
            >
                {category}
            </button>
        </>
    )
}
export default CategoryBtn;