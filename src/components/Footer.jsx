import { FaHome, FaBoxOpen, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
            <div className="flex justify-between items-center px-4 py-2 sm:px-6">
                <Link to="/">
                    <FooterButton icon={<FaHome />} label="Products" />
                </Link>
                <FooterButton icon={<FaBoxOpen />} label="Grocery" />
                <FooterButton icon={<FaSearch />} label="Search" />
                <FooterButton icon={<FaUser />} label="Account" />
            </div>
        </footer>
    );
};

const FooterButton = ({ icon, label }) => (
    <button className="flex flex-col items-center text-gray-600 hover:text-black transition-colors text-sm">
        {icon}
        <span className="mt-1">{label}</span>
    </button>
);

export default Footer;
