import "./ApartmentPage.scss";
import { ApartmentDescription } from "../Components/ApartmentDescription";
import ApartmentBanner from "../Components/ApartmentBanner";
import ApartmentHeader from "../Components/ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ApartmentBanner />
      <ApartmentHeader />
      <div className="apartment__description__area">
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  );
}

export default ApartmentPage;
