import MyCart from "./MyCart";
import useCartSectionStore from "../store/useCartSectionStore";
import useProductStore from "../store/useProductStore";
import emptyCart from '../assets/emptyCart.svg';


const MyCartSection = () => {
    const { carts } = useCartSectionStore();
    const { products } = useProductStore();

    const total = +carts
        .reduce((total, cart) => {
            const product = products.find((el) => el.id === cart.productId);
            return total + (product ? cart.quantity * product.price : 0);
        }, 0)
        .toFixed(1);

    const tax = +(total * 0.005).toFixed(1);
    const netTotal = +(total + tax).toFixed(1);
    return (
        <>
            <div className="relative">
                <div>
                    {carts.map((cart) =>
                        <MyCart key={cart.id} cart={cart} />
                    )}
                </div>

                {carts.length > 0 && (
                    <div className="">
                        <div className="mb-16"></div>
                        <div className="fixed bottom-16 left-0 w-full bg-white p-4 shadow-lg z-50 ">
                            <hr className="border border-black my-4" />
                            <div className="md:px-10">
                                <div className="flex text-xs md:text-xl lg:text-xl flex-wrap gap-2 md:gap-7 justify-center md:justify-end">
                                    <div className="flex gap-1 text-nowrap justify-center">
                                        <p className="text-gray-500">Total :</p>
                                        <span className="font-bold">${total}</span>
                                    </div>
                                    <div className="flex gap-1 text-nowrap justify-center">
                                        <p className="text-gray-500">Tax :</p>
                                        <span className="font-bold">${tax}(0.5%)</span>
                                    </div>
                                    <div className="flex gap-1 text-nowrap justify-center">
                                        <p className="text-gray-500 ">Net Total :</p>
                                        <span className="font-bold">${netTotal}</span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <button className="mt-3 px-3 py-1 border border-gray-600 rounded-md hover:bg-black hover:text-white text-nowrap">
                                        Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {carts.length === 0 && (
                    <div className="text-center text-2xl font-bold mt-5">
                        <img src={emptyCart} alt="Empty cart" className="mx-auto w-48" />
                        <p className="text-gray-600 my-7">Your cart is empty.</p>
                    </div>
                )}
            </div>

        </>
    )
}
export default MyCartSection;