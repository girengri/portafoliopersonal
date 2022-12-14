import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/normalize.css";
import "./styles/globals.css";

import { AppRouter } from "./routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
