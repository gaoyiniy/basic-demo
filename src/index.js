import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import routes from "./routes";
import "antd/dist/antd.css";

import "./styles.css";

const store = createStore(reducers);

const App = () => renderRoutes(routes);

// const getConfirmation = (message, callback) => {
//   const allowTransition = window.confirm(message)
//   callback(allowTransition)
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
