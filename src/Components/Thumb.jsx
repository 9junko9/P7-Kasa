import "../Components/Thumb.scss";
import ApartmentCard from "./Apartment";

function Thumb() {
  return (
    <div className="ThumbContainer">
      <div className="ThumbGrid">
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </div>
    </div>
  );
}

export default Thumb;
