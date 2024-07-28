// src/components/Thumb.jsx
import React from "react";
import useFetchApartments from "../hooks/useFetchApartments";
import "./Thumb.scss";
import ApartmentCard from "./ApartmentCard";

function Thumb() {
  const { apartments, error } = useFetchApartments();

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
