import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

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
