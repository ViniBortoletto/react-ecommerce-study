import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

// Styled components
import styled from "styled-components";
import { ButtonContainer } from "../styles/Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* for router, same as <a /> */}
        <Link to="/">
          <img src={logo} alt="store logo" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus" />
            <span>my cart</span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
