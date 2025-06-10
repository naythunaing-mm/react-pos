import MyCart from "./MyCart";
import useCartSectionStore from "../store/useCartSectionStore";

const MyCartSection = () => {
    const { carts, addCart } = useCartSectionStore();

    return (
        <>
            <div className="flex flex-col gap-5">
                {carts.map((cart) => (
                    <MyCart key={cart.id} cart={cart} addCart={addCart} />
                ))}
            </div>
            {carts.length > 0 && (
                <div className="sticky bottom-12 bg-white p-2">
                    <hr className="border border-black my-4" />
                    <div className="flex flex-wrap gap-2 md:gap-7 justify-center md:justify-end">
                        <div className="flex gap-1 text-nowrap justify-center">
                            <p className="text-gray-500 text-md">Total :</p>
                            <span className="font-bold text-md">$166.8</span>
                        </div>
                        <div className="flex gap-1 text-nowrap justify-center">
                            <p className="text-gray-500 text-md">Tax :</p>
                            <span className="font-bold text-md">5%</span>
                        </div>
                        <div className="flex gap-1 text-nowrap justify-center">
                            <p className="text-gray-500 text-md">Net Total :</p>
                            <span className="font-bold text-md">$175.14</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <button className="mt-3 px-3 py-1 border border-gray-600 rounded-md hover:bg-black hover:text-white text-nowrap" >Order Now</button>
                    </div>
                </div>
            )}
            {carts.length == 0 && (
                <div className="text-center text-2xl font-bold mt-5">Your cart is empty.</div>
            )}
        </>
    )
}
export default MyCartSection;