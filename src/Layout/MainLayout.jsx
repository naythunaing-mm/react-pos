import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
    return (
        <>
            {/* <Header />
            <Container >
                <Outlet />
            </Container>
            <Toaster />
            <Footer /> */}
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-grow">
                    <Container><Outlet /></Container>
                    <Toaster />
                </main>

                <Footer />
            </div>
        </ >
    )
}
export default MainLayout;