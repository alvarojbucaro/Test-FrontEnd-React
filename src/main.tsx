import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

import HomeView from "./views/home/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <HomeView />
  </Provider>,
  rootElement
);
