import "./Footer.css";
import logoFooter from "../Images/logoblack.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logoFooter} alt="Logo de Kasa" />
      </div>
      <div className="footer_text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
