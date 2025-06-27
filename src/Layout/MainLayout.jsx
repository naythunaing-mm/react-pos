import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import NavBtn from "../components/NavBtn";
const MainLayout = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Container><Outlet /></Container>
                    <Toaster position="top-right"
                        reverseOrder={false} />
                </main>
                <NavBtn />
                <Footer />
            </div>
        </ >
    )
}
export default MainLayout;