import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./context";

import App from "./App";

// React Routers
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  rootElement
);
