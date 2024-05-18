import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>HOME</NavLink>
      </li>

      <li>
        <NavLink to={"/dashboard"}>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to={"/our-menu"}>OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to={"/our-shop"}>OUR SHOP</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>CONTACT US</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 z-10 bg-black w-full bg-opacity-40 text-white">
      <div className="navbar max-w-[1500px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
