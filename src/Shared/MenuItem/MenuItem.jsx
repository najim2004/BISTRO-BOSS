import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-8">
      <img
        className="max-w-[120px] h-[104px] rounded-[200px] rounded-tl-none"
        src={image}
        alt=""
      />
      <div className="space-y-2">
        <h3 className="text-xl">{name}-------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 text-xl">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
