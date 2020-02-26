import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React Routers
import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

// BrowserRouter: holds information about all routes
// Switch: groups the routes
// Route: display routes
// Link: anchor for the routes

export default function App() {
  return (
    <>
      <Navbar />
      {/* navbar will always be shown, so we don't add it inside switch */}

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>

      <Modal />
    </>
  );
}
