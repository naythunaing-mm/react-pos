import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
    return (
        <>

            <Container >
                <Header />
                <Outlet />
                <Footer />
            </Container>

            <Toaster />
        </ >
    )
}
export default MainLayout;