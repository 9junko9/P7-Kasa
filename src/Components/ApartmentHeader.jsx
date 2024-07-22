import "../Components/ApartmentHeader.scss";

function ApartmentHaeder() {
  return (
    <div className="apartment__header">
      <div className="apartment_title">
        <h2>Cozy loft on the Canal Saint-Martin</h2>
        <h3>Paris, Île-de-France</h3>
        <div className="apartment__tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
      </div>
      <div className="apartment_host_details">
        <div className="apartment_host">
          <h4>
            Alexandre
            <br /> Dumas
          </h4>

          <div className="apartment_host_badge"></div>
        </div>
        <div className="apartment_host_stars">
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="off">★</span>
          <span className="off">★</span>
        </div>
      </div>
    </div>
  );
}

export default ApartmentHaeder;
