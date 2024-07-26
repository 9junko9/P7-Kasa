import "../Components/ApartmentBanner.scss";
import { useState } from "react";

function ApartmentBanner(props) {
  const { pictures } = props;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => (i === currentPicture ? "show" : "");

  const moveToNext = () => {
    setCurrentPicture((prevPicture) => (prevPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture(
      (prevPicture) => (prevPicture - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="image__banner">
      <div className="image__container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)} />
        ))}
      </div>
      <button className="btn btn-next" onClick={moveToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <button className="btn btn-previous" onClick={moveToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
    </div>
  );
}

export default ApartmentBanner;
