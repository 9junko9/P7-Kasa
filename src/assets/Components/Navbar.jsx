import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="/public/Images/LOGO.svg" alt="Logo de Kasa" />{" "}
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  );
}

export default Navbar;
