import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavCartBtn from "./NavCartBtn";
import PageTitle from "./PageTitle";

const Header = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Account", path: "/auth-user" },
        { label: "Search", path: "/product-search" },
    ];

    const handleNavToggle = () => setNav(!nav);
    const closeNav = () => setNav(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:border-b dark:border-slate-800">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                <PageTitle />
                <button
                    onClick={handleNavToggle}
                    className="hidden p-2 w-10 h-10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <nav
                    className={`${nav ? "block" : "hidden"
                        } w-full md:flex md:items-center md:w-auto`}
                >
                    <ul className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none border md:border-none dark:border-gray-700">
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={index} onClick={closeNav}>
                                    <Link to={item.path}>
                                        <span
                                            className={`block py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                                                ? "text-blue-600 dark:text-blue-400"
                                                : "text-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <NavCartBtn />
            </div>
        </header>
    );
};

export default Header;
