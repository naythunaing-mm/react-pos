import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import ProductDetail from "../pages/ProductDetail";

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
                path: "product-details/:id",
                element: <ProductDetail />,
            }

        ]
    }
]);
export default router