import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { appRoute } from "./utils/routes";
function App() {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
