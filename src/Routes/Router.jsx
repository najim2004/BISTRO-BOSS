import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop",
        element: <OurShop />,
      },
      {
        path: "/our-shop/:title",
        element: <OurShop />,
      },
    ],
  },
]);

export default router;
