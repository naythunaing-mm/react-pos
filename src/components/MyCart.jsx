import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';

const MyCart = ({ cart: { productId, quantity }, addCart }) => {
    const [count, setCount] = useState(quantity);
    const { products } = useProductStore();
    const product = products.find((el) => el.id === productId);
    if (!product) return <div>Product not found.</div>;

    const cost = count * product.price;
    console.log("Product:", product);
    const increase = () => {
        const newCount = count + 1;
        setCount(newCount);
        addCart(product);
    };

    return (
        <div className="border border-black p-5 grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-6 items-center">
            <div className="col-span-1 flex justify-center">
                <img src={product.image} className="h-16" alt={product.title} />
            </div>

            <div className="col-span-1 md:col-span-3">
                <p className="font-bold">{product.title}</p>
                <p className="text-gray-500">Price: ${product.price}</p>
            </div>

            <div className="col-span-1 flex flex-col items-center">
                <p className="text-center">Quantity</p>
                <div className="flex flex-row gap-3 items-center justify-center mt-1">
                    <button onClick={increase} className="bg-black text-white px-3 py-1">+</button>
                    <p>{count}</p>
                    <button className="bg-black text-white px-3 py-1">-</button>
                </div>
            </div>

            <div className="col-span-1 flex items-center justify-end">
                <p className="text-xl font-bold">${cost.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default MyCart;
