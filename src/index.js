import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import { MemoryRouter } from "react-router";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
