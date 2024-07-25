import "./ApartmentPage.scss";

import ApartmentBanner from "../Components/ApartmentBanner";
import ApartmentHeader from "../Components/ApartmentHeader";
import { DescriptionPanel } from "../Components/DescriptionPanel";

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
