import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import TESTIMONIALS from "./TESTIMONIALS/TESTIMONIALS";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <TESTIMONIALS />
    </div>
  );
};

export default Home;
