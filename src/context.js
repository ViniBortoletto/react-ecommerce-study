import React, { Component } from "react";

// Data
import { storeProducts, detailProduct } from "./data";

/* 
    Instead of getting our data from App and having to "drill" it in every component the data
    is used, we can instead use a Context

    React.createContext() allows to use PROVIDER and CONSUMER

    PROVIDER: will be imported inside index.js (high place in our application)
    CONSUMER: will be imported wherever we need to use the date
*/

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  // We create this method so we always have the original content from data
  setProducts = () => {
    let tempProducts = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);

    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    let index = tempProducts.indexOf(this.getItem(id));
    let product = tempProducts[index];

    product.inCart = true;
    product.count = 1;
    product.total = product.price * product.count;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);

    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    let index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        /*
        We pass our data and methods to 'value' as objects
      */
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

// 3h24m45s
