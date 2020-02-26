import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styles/Button";

export default class Details extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
            const {
              id,
              title,
              img,
              price,
              company,
              inCart,
              info
            } = value.detailProduct;

            return (
              <div className="container py-5">
                {/* Title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>

                {/* Img */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="product" className="img-fluid" />
                </div>

                {/* Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>{title}</h3>

                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>

                  <h4 className="text-blue">
                    <strong>price: ${price}</strong>
                  </h4>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Info:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                      cart
                    >
                      {inCart ? "already in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}
