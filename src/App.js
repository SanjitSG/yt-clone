import { RouterProvider } from "react-router-dom";
import { appRoute } from "./utils/routes";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <div className="max-w-screen">
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
