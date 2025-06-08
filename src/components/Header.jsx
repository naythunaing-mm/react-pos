import CartBtn from "./CartBtn";
import PageTitle from "./PageTitle";

const Header = () => {
    return (
        <>
            <div className="flex justify-between shadow-sm bg-white items-center p-2">
                <PageTitle />
                <CartBtn />
            </div>
        </>
    )
}
export default Header;