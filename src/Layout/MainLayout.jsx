import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Container >
                <Outlet />
            </Container>
            <Footer />

        </ >
    )
}
export default MainLayout;