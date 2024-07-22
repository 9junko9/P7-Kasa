import { ApartmentDescription } from "../Components/ApartmentDescription";
import ApartmentBanner from "../Components/ApartmentBanner";
import "./About.scss";

function About() {
  return (
    <>
      <ApartmentBanner />
      <div className="about__container">
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </>
  );
}

export default About;
