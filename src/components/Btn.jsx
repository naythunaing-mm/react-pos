import useCategoryStore from "../store/useCategoryStore";
const Btn = ({ id, category, current }) => {
    const { activeCategory } = useCategoryStore();
    const handleClick = () => {
        activeCategory(id);
    };
    return (
        <button
            onClick={handleClick} className={`${current ? "bg-black text-white" : "bg-white text-black"
                } border border-black rounded-md p-2 hover:bg-black hover:text-white text-nowrap mx-2`}
        >
            {category ? category : "Add Cart"}
        </button>
    );
};

export default Btn;
