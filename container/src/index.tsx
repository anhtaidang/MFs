import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "~/app/App";
import { store, persist } from "./redux/store";

export const history = createBrowserHistory();

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
