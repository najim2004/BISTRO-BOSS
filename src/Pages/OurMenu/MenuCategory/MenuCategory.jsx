import PropTypes from "prop-types";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionBanner from "../../../Shared/SectionBanner/SectionBanner";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg, btn }) => {
  return (
    <div className="mt-16 flex flex-col items-center">
      {title && <SectionBanner img={coverImg} title={title} />}

      <div className="grid grid-cols-2 mt-16 gap-6">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className="my-10" to={`/our-shop/${title}`}>
        <button className="btn bg-transparent text-xl !shadow-none !border-t-[0px] !border-l-[0px] !border-r-[0px] h-16 border-[3px] !border-b-[#1F2937] rounded-[8px]">
          {btn}
        </button>
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  coverImg: PropTypes.string,
  btn: PropTypes.string.isRequired,
};

export default MenuCategory;
