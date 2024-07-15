import React from "react";
import "./Navbar.css";
import logoKasa from "../Images/LOGO.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logoKasa} alt="Logo de Kasa" />
      </div>
      <div className="navbar_links">
        <a href="/">Accueil</a>
        <a href="/a-propos">A propos</a>
      </div>
    </nav>
  );
}

export default Navbar;
