import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart?.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="max-w-[990px] mx-auto">
      <SectionTitle title={"WANNA ADD MORE?"} subtitle={"---My Cart---"} />
      <div className="mt-10 bg-white w-full p-6">
        <div className="uppercase flex justify-between">
          <h2 className="text-4xl uppercase font-bold">
            Total Orders: {cart.length}
          </h2>
          <h2 className="text-4xl uppercase font-bold">
            Total Price: ${totalPrice}
          </h2>
          <button className="btn btn-sm bg-[#D1A054] w-[70px] h-14 text-white text-xl font-bold">
            Pay
          </button>
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item) => (
                  <tr key={item._id}>
                    <td>1</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <button className="btn btn-ghost bg-[#B91C1C] text-white size-12 p-0 text-2xl btn-xs">
                        <FaTrash />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
