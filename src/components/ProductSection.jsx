import useProductStore from "../store/useProductStore";
import Cart from "./Cart"
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
    const { products } = useProductStore();
    const { categories } = useCategoryStore();
    const currentCategory = categories.find((category) => category.isActive == true);
    return (
        <>
            <section className="product-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {products.filter((el) => el.category === currentCategory.category || currentCategory.category === "All")
                    .map((product) =>
                        <Cart product={product} key={product.id} />
                    )}
            </section>
        </>
    )
}
export default ProductSection;