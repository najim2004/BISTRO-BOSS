import { BsCart3 } from "react-icons/bs";
import {
  FaArrowAltCircleLeft,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaMailBulk,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaShop, FaStar } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className="flex max-w-[1600px] mx-auto">
      <div className="w-64 min-h-screen p-8 bg-[#D1A054]">
        <h3 className="text-2xl text-black mb-10 font-black">BISTRO BOSS</h3>
        <ul className="menu-d space-y-6">
          <li>
            <Link to={-1} className={"flex uppercase gap-3"}>
              <FaArrowAltCircleLeft className="!text-2xl" />
              GO Back
            </Link>
          </li>
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/admin-home"}
                  className={"flex uppercase gap-3"}
                >
                  <FaHome className="!text-2xl" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/add-items"}
                  className={"flex uppercase gap-3"}
                >
                  <FaUtensils className="!text-2xl" />
                  add items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manage-items"}
                  className={"flex uppercase gap-3"}
                >
                  <FaList className="!text-2xl" />
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manage-bookings"}
                  className={"flex uppercase gap-3"}
                >
                  <FaBook className="!text-2xl" />
                  manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/all-users"}
                  className={"flex uppercase gap-3"}
                >
                  <FaUsers className="!text-2xl" />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/dashboard/user-home"}
                  className={"flex uppercase gap-3"}
                >
                  <FaHome className="!text-2xl" />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/reservation"}
                  className={"flex uppercase gap-3"}
                >
                  <FaCalendar className="!text-2xl" />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/payment-history"}
                  className={"flex uppercase gap-3"}
                >
                  <FaWallet className="!text-2xl" />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/cart"}
                  className={"flex uppercase gap-3"}
                >
                  <BsCart3 className="!text-2xl" />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/add-review"}
                  className={"flex uppercase gap-3"}
                >
                  <FaStar className="!text-2xl" />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/my-bookings"}
                  className={"flex uppercase gap-3"}
                >
                  <FaList className="!text-2xl" />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          <hr className="border-t-[1px] border-white" />

          {/* shared NavLink */}
          <li>
            <NavLink to={"/"} className={"flex uppercase gap-3"}>
              <FaHome className="!text-2xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/our-menu"} className={"flex uppercase gap-3"}>
              <FaList className="!text-2xl" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/our-shop"} className={"flex uppercase gap-3"}>
              <FaShop className="!text-2xl" />
              shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={"flex uppercase gap-3"}>
              <FaMailBulk className="!text-2xl" />
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 py-14 bg-[#F6F6F6]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
