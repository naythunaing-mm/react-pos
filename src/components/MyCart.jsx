import React, { useState } from 'react';
import useCartSectionStore from '../store/useCartSectionStore';
import useProductStore from '../store/useProductStore';
import toast from 'react-hot-toast';

const MyCart = ({ cart: { quantity, productId } }) => {
    const [count, setCount] = useState(quantity);
    const { products } = useProductStore();
    const product = products.find((el) => el.id === productId);
    const { increaseCart, decreaseCart, remove } = useCartSectionStore();
    const cost = count * product.price;

    if (!product) return <div className='text-center bg-red-400 text-white text-nowrap'>Product not found.</div>;

    const increase = () => {
        setCount(count + 1);
        increaseCart(productId, 1);
    };

    const decrease = () => {
        if (quantity <= 1) {
            toast.error("Item quantity cannot be less than 1.");
            return;
        }
        setCount(count - 1);
        decreaseCart(productId, 1);
    }
    const handleRemove = () => {
        remove(productId);
    };

    return (
        <div className="border border-black p-5 grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-6 items-center dark:border-gray-600">
            <div className="col-span-1 flex justify-center">
                <img src={product.image} className="h-16" alt={product.title} />
            </div>

            <div className="col-span-1 md:col-span-3">
                <p className="font-bold text-justify text-xs md:text-xl lg:text-xl">{product.title}</p>
                <p className="text-gray-500">Price: ${product.price}</p>
            </div>

            <div className="col-span-1 flex flex-col items-center">
                <p className="text-center">Quantity</p>
                <div className="flex flex-row gap-3 items-center justify-center mt-1">
                    <button onClick={increase} className="bg-black text-white px-3 py-1 dark:bg-gray-700">+</button>
                    <p>{quantity}</p>
                    <button onClick={decrease} className="bg-black text-white px-3 py-1 dark:bg-gray-700">-</button>
                </div>
            </div>

            <div className="col-span-1 gap-2 text-xs md:text-xl lg:text-xl flex items-center justify-end">
                <p className="font-bold">${cost.toFixed(2)}</p>
                <button onClick={handleRemove} className="border border-black dark:border-gray-600 rounded-md p-2 hover:bg-black hover:text-white text-xs ">remove</button>
            </div>
        </div>
    );
};

export default MyCart;
