import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row m-1 text-capitalize text-center">
      {/* Img */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>

      {/* Name */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>

      {/* Price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>
        {price}
      </div>

      {/* Qtd. */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>

            <span className="btn btn-black mx-1">{count}</span>

            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>

      {/* Remove icon */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>

      {/* Total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
