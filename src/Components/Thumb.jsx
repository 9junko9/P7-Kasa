import { useEffect, useState } from "react";
import "../Components/Thumb.scss";
import ApartmentCard from "./ApartmentCard";

function Thumb() {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    fetch("locations.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch((error) => {
        console.error(error);
        setError("Unable to fetch apartments.");
      });
  }

  if (error) return <div>Error: {error}</div>;

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
