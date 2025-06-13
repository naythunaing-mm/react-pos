import { FaHome, FaBoxOpen, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
                <div className="flex justify-between items-center px-4 py-2 sm:px-6">
                    <Link to="/">
                        <FooterButton icon={<FaHome />} label="Products" />
                    </Link>
                    <Link to="/grocery">
                        <FooterButton icon={<FaBoxOpen />} label="Grocery" />
                    </Link>
                    <FooterButton icon={<FaEnvelope />} label="Message" />
                    <Link to="/auth-user">
                        <FooterButton icon={<FaUser />} label="Account" />
                    </Link>
                </div>
            </nav>
            <footer className="mb-16">
                <p className="bg-gray-200 text-center text-sm py-2">Copyright &copy; {new Date().getFullYear()}. Coding by  <span className="font-bold">Nay Thu Naing</span></p>
            </footer>

        </>
    );
};

const FooterButton = ({ icon, label }) => (
    <button className="flex flex-col items-center text-gray-600 hover:text-black transition-colors text-sm">
        {icon}
        <span className="mt-1">{label}</span>
    </button>
);

export default Footer;
