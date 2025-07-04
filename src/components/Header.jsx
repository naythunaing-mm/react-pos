import NavCartBtn from "./NavCartBtn";
import PageTitle from "./PageTitle";

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 dark:border-b bg-white shadow-md dark:bg-gray-900 dark:border-b-slate-800">
                <div className="flex justify-between p-2 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <PageTitle />
                    <NavCartBtn />
                </div>
            </header>
        </>
    )
}
export default Header;