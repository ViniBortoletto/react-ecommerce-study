import React, { Component } from "react";

import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { ButtonContainer } from "../styles/Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { price, img, title } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: ${price}</h5>

                      {/* Close modal */}
                      <Link to="/">
                        <ButtonContainer onClick={closeModal}>
                          Continue shopping
                        </ButtonContainer>
                      </Link>

                      {/* Go to cart */}
                      <Link to="/cart">
                        <ButtonContainer cart onClick={closeModal}>
                          See it in cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  #modal {
    background: var(--mainWhite);
  }
`;
