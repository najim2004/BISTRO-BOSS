import PropTypes from "prop-types";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";
import SectionBanner from "../../../../Shared/SectionBanner/SectionBanner";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="">
      {title && <SectionBanner img={coverImg} title={title} />}

      <div className="grid grid-cols-2 gap-6">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default MenuCategory;
