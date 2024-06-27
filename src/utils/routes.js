import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import MainBody from "../components/MainBody";
import WatchPage from "../components/WatchPage";
import Results from "../components/Results";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
]);

export default routes;
