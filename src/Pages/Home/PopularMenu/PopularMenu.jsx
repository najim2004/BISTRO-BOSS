import SectionTitle from "../../../Components/SectionTitle";
// import axios from "axios";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // useEffect(() => {
  //   axios.get("/menu.json").then((res) => {
  //     setMenu(res.data.filter((item) => item.category === "popular"));
  //   });
  //   console.log(menu);
  // }, []);
  return (
    <div className="max-w-[1320px] mb-12 mx-auto">
      <SectionTitle
        subtitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-10 items-center">
        <button className="btn bg-transparent text-xl !shadow-none !border-t-[0px] !border-l-[0px] !border-r-[0px] h-16 border-[3px] !border-b-[#1F2937] rounded-[8px]">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
