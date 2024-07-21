import Banner from "./layout/Banner";
import Thumb from "./Components/Thumb";

import locations from "./data/locations.json";
import "./App.scss";

function App() {
  return (
    <div>
      <Banner />
      <Thumb locations={locations} />
    </div>
  );
}

export default App;
