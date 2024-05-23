import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

const App = () => {
  const location = useLocation();
  const isLoginRoute =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {isLoginRoute || <Navbar />}
      <div className="max-w-[1500px] mx-auto">
        <Outlet />
      </div>
      {isLoginRoute || <Footer />}
    </div>
  );
};

export default App;
