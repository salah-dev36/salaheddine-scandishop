import React, { Component } from "react";

import { AddToCartBtn, CheckOutBtn, ViewBagBtn } from "./button-styles";

export class Button extends Component {
  render() {
    const { feature, addToCart, children, inStock } = this.props;

    return (
      <>
        {feature === "add-to-cart" ? (
          <AddToCartBtn disabled={!inStock} onClick={addToCart}>
            {children}
          </AddToCartBtn>
        ) : feature === "go-to-checkout" ? (
          <CheckOutBtn>{children}</CheckOutBtn>
        ) : (
          feature === "go-to-bag" && <ViewBagBtn>{children} </ViewBagBtn>
        )}
      </>
    );
  }
}

export default Button;
