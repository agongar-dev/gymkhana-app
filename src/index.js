import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import initData from "./data/hints";

const root = ReactDOM.createRoot(document.getElementById("root"));

initData();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
