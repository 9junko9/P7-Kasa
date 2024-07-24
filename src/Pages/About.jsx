import { DescriptionPanel } from "../Components/DescriptionPanel";
import ApartmentBanner from "../Components/ApartmentBanner";
import "./About.scss";

function About() {
  return (
    <>
      <ApartmentBanner />
      <div className="about__container">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  );
}

export default About;
