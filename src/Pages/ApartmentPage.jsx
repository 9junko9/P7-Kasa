import "./ApartmentPage.scss";
import ApartmentBanner from "../Components/ApartmentBanner";
import ApartmentHeader from "../Components/ApartmentHeader";
import { DescriptionPanel } from "../Components/DescriptionPanel";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ApartmentPage() {
  const { apartmentId } = useParams();
  const navigate = useNavigate();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetchApartmentData();
  }, [apartmentId]);

  function fetchApartmentData() {
    fetch("/locations.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === apartmentId);
        if (flat) {
          setFlat(flat);
        } else {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  }

  if (flat == null) return <div>Loading...</div>;

  return (
    <div className="apartment-page">
      <ApartmentBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={
            <ul>
              {flat.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
