import { DescriptionPanel } from "../Components/DescriptionPanel";
import bannerAbout from "../assets/Images/imageapropos.png";

import "./About.scss";

function About() {
  return (
    <>
      <div className="banner__about">
        <img
          src={bannerAbout}
          alt="paysage de montagne"
          className="banner__about__image"
        />
      </div>
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
