import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-screen">
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;
