import "./Apartment.scss";
import { NavLink } from "react-router-dom";

function Apartment() {
  return (
    <div className="apartment">
      <NavLink to="./locations" className="apart_link">
        <div className="apart_subtitle">Titre de la location</div>
      </NavLink>
    </div>
  );
}

export default Apartment;
