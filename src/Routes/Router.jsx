import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Home/OurMenu/OurMenu";

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
    ],
  },
]);

export default router;
