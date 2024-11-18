// PARENT
import OfferHero from "./OfferHero";
import NavBar from "./NavBar";
import { useState } from "react";

function Offer() {
  let [showX, setShowX] = useState("S");

  function handleClick() {
    showX == "S" ? setShowX("X") : setShowX("S");
  }

  return (
    <div>
      <h1>HOOK TEST</h1>
      <h2>{showX}</h2>
      <button onClick={handleClick}>ShowX</button>
    </div>
  );
}

export default Offer;
