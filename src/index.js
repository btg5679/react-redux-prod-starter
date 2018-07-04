import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./containers/App";
import "./index.css";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(combineReducers({ reducers }), composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(combineReducers({ reducers }), applyMiddleware(thunk));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
