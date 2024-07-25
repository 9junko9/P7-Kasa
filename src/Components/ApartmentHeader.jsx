import "../Components/ApartmentHeader.scss";

function ApartmentHaeder({ flat }) {
  const { name } = flat.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      <div className="apartment_title">
        <h2>{flat.title}</h2>
        <h3>{flat.location}</h3>
        <div className="apartment__tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment_host_details">
        <div className="apartment_host">
          <h4>
            <div className="host-name">
              <div className="first-name">{firstName}</div>
              <div className="last-name">{lastName}</div>
            </div>
          </h4>

          <div className="apartment_host_badge">
            <img src={flat.host.picture} alt="" />
          </div>
        </div>
        <div className="apartment_host_stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentHaeder;
