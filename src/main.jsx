import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MouseFollower } from "react-mouse-follower";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MouseFollower />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);