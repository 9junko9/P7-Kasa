import "./ApartmentCard.scss";
import { NavLink } from "react-router-dom";

function ApartmentCard(props) {
  console.log("props dans apartment card", props);
  return (
    <div className="apartment">
      <img src={props.imageUrl} alt="" />
      <NavLink to="./locations" className="apart_link">
        <div className="apart_subtitle">{props.title}</div>
      </NavLink>
    </div>
  );
}

export default ApartmentCard;
