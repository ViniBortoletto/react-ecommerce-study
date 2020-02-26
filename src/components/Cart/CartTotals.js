import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>

            {/* Subtotal */}
            <h5>
              <span className="text-title">
                <strong>subtotal: ${cartSubtotal}</strong>
              </span>
            </h5>

            {/* Tax */}
            <h5>
              <span className="text-title">
                <strong>taxes: ${cartTax}</strong>
              </span>
            </h5>

            {/* Total */}
            <h5>
              <span className="text-title">
                <strong>total: ${cartTotal}</strong>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
