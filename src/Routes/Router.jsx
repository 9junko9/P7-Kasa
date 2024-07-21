import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
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
    errorElement: <h3>404 not found</h3>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/locations",
        element: <h3>Nos appartements</h3>,
      },

      {
        path: "/about",
        element: <h3>A propos</h3>,
      },
    ],
  },
]);
