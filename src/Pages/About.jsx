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
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
"
        />
        <DescriptionPanel
          title="Respect"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
"
        />
        <DescriptionPanel
          title="Service"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
"
        />
        <DescriptionPanel
          title="Sécurité"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
"
        />
      </div>
    </>
  );
}

export default About;
