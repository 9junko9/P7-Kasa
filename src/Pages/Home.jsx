import React from "react";
import "./Home.scss";
import Banner from "../layout/Banner";
import Thumb from "../Components/Thumb";
import imgbanner from "../assets/Images/banner.png";

function Home() {
  return (
    <div>
      <Banner imgSrc={imgbanner} altText="Paysage de montagnes">
        Chez vous, <span className="break">partout et ailleurs</span>
      </Banner>
      <Thumb />
    </div>
  );
}

export default Home;
