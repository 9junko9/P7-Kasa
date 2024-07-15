import "./Navbar.css";
import logoKasa from "../Images/LOGO.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logoKasa} alt="Logo de Kasa" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  );
}

export default Navbar;
