import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

serviceWorker.register();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Source: https://felixgerschau.com/how-to-communicate-with-service-workers/
navigator.serviceWorker.onmessage = (event) => {
  if (event.data && event.data.type === "REQUEST") {
    const requestUrl = new URL(event.data.request.url);
    console.log(event.data.request);

    if (requestUrl.pathname === "/hello") {
      (event.source as any).postMessage({ hello: "word10" });
    }
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
