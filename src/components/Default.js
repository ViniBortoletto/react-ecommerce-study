import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center pt-5 text-title text-uppercase">
            <h1 className="display-3">404 Error</h1>
            <h2>Page not found</h2>
            <h3>
              The requested URL
              <span class="text-danger">
                "{this.props.location.pathname}"
              </span>{" "}
              does not exist.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
