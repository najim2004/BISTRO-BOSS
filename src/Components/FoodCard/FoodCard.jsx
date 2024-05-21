import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="card rounded-none w-96 bg-base-100 shadow-xl">
        <figure className="relative">
          <img className="w-full" src={item.image} alt="Shoes" />
          <p className="absolute top-5 right-5 px-3 py-2 bg-black text-white ">
            ${item.price}
          </p>
        </figure>
        <div className="card-body bg-[#F3F3F3]">
          <h2 className="text-2xl my-1 font-semibold text-center w-full">
            {item.name}
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn bg-transparent text-xl !shadow-none !border-t-[0px] !border-l-[0px] !border-r-[0px] h-8 border-[3px] !border-b-[#BB8506] text-[#BB8506] rounded-[8px]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FoodCard;
