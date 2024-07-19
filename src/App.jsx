import Navbar from "./assets/Components/Navbar";
import Banner from "./assets/Components/Banner";
import Thumb from "./assets/Components/Thumb";
import Footer from "./assets/Components/Footer";
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
