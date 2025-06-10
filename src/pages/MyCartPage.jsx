import BreadCrump from "../components/BreadCrump";
import MyCartSection from "../components/MyCartSection";
const MyCartPage = () => {
    return (
        <>
            <BreadCrump currentPageTitle="My Cart" />
            <MyCartSection />
        </>
    );
}
export default MyCartPage;