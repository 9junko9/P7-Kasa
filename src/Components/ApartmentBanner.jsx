import "../Components/ApartmentBanner.scss";

function ApartmentBanner(props) {
  return (
    <div className="image__banner">
      <img src={props.imageUrl} alt="" />
    </div>
  );
}
export default ApartmentBanner;
