import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
// Import my modules
import Offer from "./components/Offer";
import OfferHero from "./components/OfferHero";

function App() {
  const date = new Date().toLocaleTimeString();
  return (
    <div>
      <Offer />
    </div>
  );
}

export default App;
