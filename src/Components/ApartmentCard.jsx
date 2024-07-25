import "./ApartmentCard.scss";
import { NavLink } from "react-router-dom";

function ApartmentCard(props) {
  return (
    <div className="apartment">
      <img src={props.imageUrl} alt="" />
      <NavLink
        to="/locations"
        state={{ apartmentId: props.id }}
        className="apart_link"
      >
        <div className="apart_subtitle">{props.title}</div>
      </NavLink>
    </div>
  );
}

export default ApartmentCard;
