import HomeSection from "./HomeSection/HomeSection";
import FeaturedPhone from "./FeaturedPhone/FeaturedPhone";
import Laptop from "./Laptop/Laptop";
import ElectronicComponents from "./ElectronicComponents/ElectronicComponents";

const Home = () => {
  return (
    <div className="max-w-[1300px] container mx-auto">
      <HomeSection />
      <FeaturedPhone />
      <Laptop />
      <ElectronicComponents />
    </div>
  );
};

export default Home;
