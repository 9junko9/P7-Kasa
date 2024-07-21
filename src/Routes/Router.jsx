import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <h3>404 not found</h3>,
  },
  {
    path: "/locations",
    element: (
      <>
        <Navbar />
        <h3>Nos appartements</h3>
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <h3>A propos</h3>
        <Footer />
      </>
    ),
  },
]);
