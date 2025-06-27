import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import MyCartPage from "../pages/MyCartPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import GroceryPage from "../pages/GroceryPage";
import AuthPage from "../pages/AuthPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "product-detail/:id",
                element: <ProductDetailPage />,
            },
            {
                path: "my-cart",
                element: <MyCartPage />
            },
            {
                path: "/my-cart",
                element: <GroceryPage />
            },
            {
                path: "auth-user",
                element: <AuthPage />
            }, {
                path: "product-search",
                element: <SearchPage />
            }

        ]
    }
], {
    basename: "/react-pos",
});
export default router