import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import ProductDetail from "../pages/ProductDetail";
import MyCartPage from "../pages/MyCartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "product-detail/:id",
                element: <ProductDetail />,
            },
            {
                path: "my-cart",
                element: <MyCartPage />
            }

        ]
    }
]);
export default router