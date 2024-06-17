import { RouterProvider } from "react-router-dom";

import { appRoute } from "./utils/routes";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
