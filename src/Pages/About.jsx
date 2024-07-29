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
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.
"
        />
        <DescriptionPanel
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoireou de perturbationdu voisinage entraînera une exclusion de notre plateforme.
"
        />
        <DescriptionPanel
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
"
        />
        <DescriptionPanel
          title="Sécurité"
          content="La sécurité est la priorité de Kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aux locataires,cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
"
        />
      </div>
    </>
  );
}

export default About;
