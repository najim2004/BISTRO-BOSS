import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price } = item;
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cart = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cart).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added to cart!",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={handleAddToCart}
              className="btn bg-transparent text-xl !shadow-none !border-t-[0px] !border-l-[0px] !border-r-[0px] h-8 border-[3px] !border-b-[#BB8506] text-[#BB8506] rounded-[8px]"
            >
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
