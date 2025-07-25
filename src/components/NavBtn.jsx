import { FaHome, FaBoxOpen, FaEnvelope, FaUser } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
const NavBtn = () => {
    const FooterButton = ({ icon, label }) => (
        <button className="flex flex-col items-center text-gray-600 hover:text-white transition-colors text-sm">
            {icon}
            <span className="mt-1 text-xs md:text-sm lg:text-sm">{label}</span>
        </button>
    );
    return (<>
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t dark:border-t-slate-800 border-gray-200 shadow-md z-50 dark:bg-gray-900">
            <div className="grid grid-cols-4 gap-2 px-4 py-2 sm:px-6">
                <Link to="/" className="flex flex-col items-center">
                    <FooterButton icon={<FaHome />} label="Products" />
                </Link>
                <Link to="/my-cart" className="flex flex-col items-center">
                    <FooterButton icon={<FaBoxOpen />} label="Grocery" />
                </Link>
                <Link to="/product-search" className="flex flex-col items-center">
                    <FooterButton icon={<HiOutlineSearch />} label="search" />
                </Link>
                <Link to="/auth-user" className="flex flex-col items-center">
                    <FooterButton icon={<FaUser />} label="Account" />
                </Link>
            </div>
        </nav>
    </>)
}
export default NavBtn