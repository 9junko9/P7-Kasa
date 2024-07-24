import "./ApartmentPage.scss";
import { DescriptionPanel } from "../Components/DescriptionPanel";
import ApartmentBanner from "../Components/ApartmentBanner";
import ApartmentHeader from "../Components/ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ApartmentBanner />
      <ApartmentHeader />
      <div className="apartment__description__area">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export default ApartmentPage;
