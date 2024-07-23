import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "./ErrorPage.scss";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="error__page">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink to="/">Retournez sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
