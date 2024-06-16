import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainContainer from "../components/MainContainer";
import Watch from "../pages/Watch";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
  {
    path: "/watch",
    element: <Watch />,
  },
]);
