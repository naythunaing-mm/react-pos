import useCategoryStore from '../store/useCategoryStore';
import Btn from './Btn';
const CategorySection = () => {
    const { categories } = useCategoryStore();
    if (!categories || categories.length === 0) {
        return <div className="text-center text-gray-500">No categories available</div>;
    }

    return (
        <div className="category-section m-4">
            <h2 className="text-2xl my-3">Categories</h2>
            <div className="flex overflow-scroll scroll-hidden">
                {categories.map((category) => (
                    <Btn key={category.id} id={category.id} category={category.category} current={category.isActive} />
                ))}
            </div>
        </div>
    );
}
export default CategorySection;