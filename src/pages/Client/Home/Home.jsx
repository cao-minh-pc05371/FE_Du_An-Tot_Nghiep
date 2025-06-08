import HomeSection from "./HomeSection/HomeSection";
import FeaturedPhone from "./FeaturedPhone/FeaturedPhone";
import Laptop from "./Laptop/Laptop";
import ElectronicComponents from "./ElectronicComponents/ElectronicComponents";
import Tablet from "./Tablet/Tablet";
import SmartWatch from "./SmartWatch/SmartWatch";
import TiVi from "./Tivi/Tivi";
import PaymentOffers from "./PaymentOffers/PaymentOffers";



const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <HomeSection />
      <FeaturedPhone />
      <Laptop />
      <Tablet />
      <SmartWatch />
      <TiVi />
      <ElectronicComponents />
      <PaymentOffers />
    </div>
  );
};

export default Home;
