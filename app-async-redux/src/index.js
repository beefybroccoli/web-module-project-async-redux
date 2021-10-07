import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import logger
import logger from "redux-logger";
//import thunk
import thunk from "redux-thunk";
//import createStore
import { createStore, applyMiddleware } from "redux";
//import Provider
import { Provider } from "react-redux";
import { reducer } from "./reducer/index";

/* add middleWare, add logger */
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* App get access to provider */}
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
