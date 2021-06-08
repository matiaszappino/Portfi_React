import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PortfiProvider } from "./components/context/portfiContext";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <PortfiProvider>
      <App />
      </PortfiProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
