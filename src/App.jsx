import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Thumb from "./Components/Thumb";
import Footer from "./Components/Footer";
import locations from "./data/locations.json";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Thumb locations={locations} />
      <Footer />
    </div>
  );
}

export default App;
