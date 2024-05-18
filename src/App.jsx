import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
