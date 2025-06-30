import { Link } from "react-router-dom";
import { HiSun, HiMoon } from "react-icons/hi";
import useCartSectionStore from "../store/useCartSectionStore";
import { useEffect, useState } from "react";

const NavCartBtn = () => {
    const name = "My Cart";
    const { carts } = useCartSectionStore();
    const count = carts.reduce((total, cart) => total + cart.quantity, 0);

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <div className="flex justify-center items-center">
            <button
                onClick={toggleDarkMode}
                className="text-3xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-gray-400 shadow-md hover:scale-105 transition mx-3"
            >
                {darkMode ? <HiSun className="text-2xl" /> : <HiMoon className="text-2xl" />}
            </button>

            <Link to="/my-cart" className="nav-btn">
                <button className="relative border border-black rounded-md p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:border-gray-600 dark:hover:text-black  dark:text-gray-200 dark:bg-gray-700">
                    {name}
                    {count > 0 && (
                        <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs px-2 py-0.5 flex items-center justify-center">
                            {count}
                        </span>
                    )}
                </button>
            </Link>
        </div>
    );
};

export default NavCartBtn;
