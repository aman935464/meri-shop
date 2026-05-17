import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Cart from "../Components/CartComponents/Cart";
import ProfilePage from "../Components/ProfileComponents/Profile";
import ProductPage from "../Components/DescriptionComponents/Description.jsx";
import { lazy, Suspense } from "react";
import HomeSkeleton from "../Skeleton/HomeSkeleton.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

const Home = lazy(() => import("../Components/HomeComponent/Home.jsx"));
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "product/:id",
        element: (
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "*",
        element: "Page Not Found"
      },
    ],
  },
]);

export default Router;
