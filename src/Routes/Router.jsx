import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import ApartmentPage from "../Pages/ApartmentPage";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

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
        element: <h3>A propos</h3>,
      },
      {
        path: "*",
        element: <h3>404 not found</h3>,
      },
    ],
  },
]);
