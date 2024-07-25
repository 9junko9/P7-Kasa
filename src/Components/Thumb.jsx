import { useEffect, useState } from "react";
import "../Components/Thumb.scss";
import ApartmentCard from "./ApartmentCard";

function Thumb() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("locations.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <div className="ThumbContainer">
      <div className="ThumbGrid">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            title={apartment.title}
            imageUrl={apartment.cover}
            id={apartment.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Thumb;
