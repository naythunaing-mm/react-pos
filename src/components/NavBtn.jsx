import { HiOutlineUserCircle, HiOutlineInboxStack, HiOutlineHome } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const NavBtn = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const FooterButton = ({ icon, label, path }) => {
        const isActive = currentPath === path;

        return (
            <Link to={path} className="flex flex-col items-center">
                <button
                    className={`flex flex-col items-center text-sm transition-colors ${isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white"
                        }`}
                >
                    {icon}
                    <span className="mt-1 text-xs md:text-sm lg:text-sm">{label}</span>
                </button>
            </Link>
        );
    };
    return (<>
        <nav className="fixed bottom-0 md:hidden left-0 right-0 bg-white border-t dark:border-t-slate-800 border-gray-200 shadow-md z-50 dark:bg-gray-900">
            <div className="grid grid-cols-4 gap-2 px-4 py-2 sm:px-6">
                <FooterButton icon={<HiOutlineHome className="text-2xl" />} label="Home" path={"/"} />
                <FooterButton icon={<HiOutlineUserCircle className="text-2xl" />} label="Account" path="/auth-user" />
                <FooterButton icon={<HiOutlineInboxStack className="text-2xl" />} label="Grocery" path="/my-cart" />
                <FooterButton icon={<HiOutlineSearch className="text-2xl" />} label="search" path="/product-search" />
            </div>
        </nav>
    </>)
}
export default NavBtn