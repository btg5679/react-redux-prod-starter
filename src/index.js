import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Routes from './containers/Routes';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store;
const history = createBrowserHistory();

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    connectRouter(history)(reducers),
    combineReducers({ reducers }),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)),
  );
} else {
  store = createStore(
    connectRouter(history)(reducers),
    combineReducers({ reducers }),
    applyMiddleware(routerMiddleware(history), thunk),
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
