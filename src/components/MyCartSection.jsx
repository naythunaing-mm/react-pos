import MyCart from "./MyCart";
import useCartSectionStore from "../store/useCartSectionStore";

const MyCartSection = () => {
    const { carts } = useCartSectionStore();

    return (
        <>
            <div className="min-h-screen relative pb-40">
                <div>
                    {carts.map((cart) =>
                        cart.quantity > 0 ? <MyCart key={cart.id} cart={cart} /> : null
                    )}
                </div>

                {carts.length > 0 && (
                    <div className="fixed bottom-16 left-0 w-full bg-white p-4 shadow-lg z-50">
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
                            <button className="mt-3 px-3 py-1 border border-gray-600 rounded-md hover:bg-black hover:text-white text-nowrap">
                                Order
                            </button>
                        </div>
                    </div>
                )}

                {carts.length === 0 && (
                    <div className="text-center text-2xl font-bold mt-5">
                        Your cart is empty.
                    </div>
                )}
            </div>

        </>
    )
}
export default MyCartSection;