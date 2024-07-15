import imgbanner from "../Images/banner.png";
import "../Components/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src={imgbanner} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>

      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
