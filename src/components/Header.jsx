import NavCartBtn from "./NavCartBtn";
import PageTitle from "./PageTitle";

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50">
                <div className="flex w-full justify-between shadow-sm bg-white items-center p-2 ">
                    <PageTitle />
                    <NavCartBtn />
                </div>
            </header>
        </>
    )
}
export default Header;