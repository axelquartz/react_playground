// PARENT
import OfferHero from "./OfferHero";
import NavBar from "./NavBar";

let data = {
  hero1: "Buen fin en 10%",
  hero2: "Buen fin en 70%",
  navBar1: "Black Friday Offers",
  navBar2: "Hisense Screen in 70% OFF",
};
function Offer() {
  return (
    <div>
      <OfferHero hero1={data.hero1} hero2={data.hero2} />
      <NavBar navBar1={data.navBar1} navBar2={data.navBar2} />
    </div>
  );
}

export default Offer;
