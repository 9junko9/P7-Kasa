import "../Components/Navbar.css";
import logoKasa from "../assets/Images/LOGO.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar_logo">
          <img src={logoKasa} alt="Logo de Kasa" />
        </div>
      </NavLink>
      <div className="navbar_links">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div>A propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
