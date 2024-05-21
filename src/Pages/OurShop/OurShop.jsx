import { useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import oShopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useHelmet from "../../Hooks/useHelmet";

const OurShop = () => {
  // hooks
  const [menu, loading] = useMenu();
  const { title } = useParams();
  const helmetTitle = useHelmet("Our Shop | BISTRO BOSS");

  const titles = ["SALAD", "PIZZA", "SOUP", "DESSERT", "DRINKS"];
  const initialIndex = titles.indexOf(title);
  const [tabIndex, setTabIndex] = useState(title ? initialIndex : 0);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="max-w-[1320px] mx-auto">
      {helmetTitle}
      <SectionBanner title="OUR SHOP" img={oShopImg} />
      <Tabs
        defaultIndex={tabIndex || 0}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-6 my-12 justify-center">
            {salad?.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 my-12 justify-center">
            {pizza?.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 my-12 justify-center">
            {soup?.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 my-12 justify-center">
            {dessert?.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 my-12 justify-center">
            {drinks?.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
