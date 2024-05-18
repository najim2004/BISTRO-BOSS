import { Helmet } from "react-helmet-async";
import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";
import bImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const OurMenu = () => {
  const [menu, loading] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>MENU | BISTRO BOSS</title>
      </Helmet>
      <div className="max-w-[1320px] mx-auto">
        <SectionBanner img={bImg} title="OUR MENU" />
        <SectionTitle subtitle="---Don't miss---" title="TODAY'S OFFER" />
        <MenuCategory items={offered} />
        <MenuCategory items={dessert} title="dessert" />
      </div>
    </div>
  );
};

export default OurMenu;
