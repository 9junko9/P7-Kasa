import imgbanner from "../assets/Images/banner.png";
import "../layout/Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={imgbanner} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>

      <h1>
        Chez vous, <span className="break"> partout et ailleurs</span>
      </h1>
    </div>
  );
}

export default Banner;
