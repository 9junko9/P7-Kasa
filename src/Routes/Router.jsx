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
    <div className="page-wrapper">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
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
        path: "/locations/:apartmentId",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
