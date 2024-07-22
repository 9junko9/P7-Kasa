import "./Home.scss";
import Banner from "../layout/Banner";
import Thumb from "../Components/Thumb";

import locations from "../data/locations.json";

function Home() {
  return (
    <div>
      <Banner />
      <Thumb locations={locations} />
    </div>
  );
}

export default Home;
