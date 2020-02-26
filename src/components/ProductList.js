import React, { Component } from "react";

// Data from Context
import { ProductConsumer } from "../context";

// Components
import Product from "./Product.js";
import Title from "./Title";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
