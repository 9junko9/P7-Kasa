import React from "react";
import bannerAbout from "../assets/Images/imageapropos.png";
import Banner from "../layout/Banner";
import { DescriptionPanel } from "../Components/DescriptionPanel";
import "./About.scss";

function About() {
  return (
    <>
      <Banner
        imgSrc={bannerAbout}
        altText="Paysage de montagne"
        showMask={false}
      />
      <div className="about__container">
        <DescriptionPanel
          title="Fiabilité"
          content="à remplir avec les bonnes informations"
        />
        <DescriptionPanel
          title="Respect"
          content="à remplir avec les bonnes informations"
        />
        <DescriptionPanel
          title="Service"
          content="à remplir avec les bonnes informations"
        />
        <DescriptionPanel
          title="Sécurité"
          content="à remplir avec les bonnes informations"
        />
      </div>
    </>
  );
}

export default About;
