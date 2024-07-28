import "./ApartmentCard.scss";
import { NavLink } from "react-router-dom";

function ApartmentCard(props) {
  return (
    <div className="apartment">
      <img src={props.imageUrl} alt={props.title} />
      <NavLink to={`/locations/${props.id}`} className="apart_link">
        <div className="apart_subtitle">{props.title}</div>
      </NavLink>
    </div>
  );
}

export default ApartmentCard;
