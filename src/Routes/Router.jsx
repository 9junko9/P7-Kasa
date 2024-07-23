import { createBrowserRouter, Outlet } from "react-router-dom";
import "../main.scss";
import Home from "../Pages/Home";
import ApartmentPage from "../Pages/ApartmentPage";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import About from "../Pages/About";
import ErrorPageNotFound from "../Pages/ErrorPage";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/locations",
        element: <ApartmentPage />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
