import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Auth from "./screens/Login";
import Routes from "./screens/Routes";
import { BrowserRouter } from "react-router-dom";
import rootSaga from "./sagas";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "./i18n.js";
import Cookie from "js-cookie";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter>
        <Provider store={store}>
          {console.log(
            'Cookie.getJSON("userInfo"):',
            Cookie.getJSON("userInfo")
          )}
          {Cookie.getJSON("userInfo") ? <Routes /> : <Auth />}
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

sagaMiddleware.run(rootSaga);
