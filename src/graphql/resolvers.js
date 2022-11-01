import {
  GET_IS_CURRENCY_SWITCHER_OPEN,
  GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN,
  GET_IS_CART_OPEN,
  GET_CART_ITEMS,
  GET_IS_CART_AND_CURRENCY_OPEN,
} from "./queries";

import { addItemToCart, removeItemFromCart } from "../utils/cart-utils";

export const resolvers = {
  Mutation: {
    toggleCurrency: (_root, _args, { cache }) => {
      const { isCurrencySwitcherOpen } = cache.readQuery({
        query: GET_IS_CURRENCY_SWITCHER_OPEN,
      });

      cache.writeQuery({
        query: GET_IS_CART_AND_CURRENCY_OPEN,
        data: {
          isCurrencySwitcherOpen: !isCurrencySwitcherOpen,
          isCartOpen: false,
        },
      });
    },

    selectCurrency: (_root, { newCurrency }, { cache }) => {
      cache.writeQuery({
        query: GET_SELECTED_CURRENCY_AND_IS_SWITCHER_OPEN,
        data: {
          selectedCurrency: newCurrency,
          isCurrencySwitcherOpen: false,
        },
      });
    },

    toggleCart: (_root, _args, { cache }) => {
      const { isCartOpen } = cache.readQuery({
        query: GET_IS_CART_OPEN,
      });

      cache.writeQuery({
        query: GET_IS_CART_AND_CURRENCY_OPEN,
        data: { isCurrencySwitcherOpen: false, isCartOpen: !isCartOpen },
      });
    },

    addToCart: (_root, { productToAdd, selectedAttributes }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(
        cartItems,
        productToAdd,
        selectedAttributes
      );

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
    },

    removeFromCart: (_root, { productToRemove }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = removeItemFromCart(cartItems, productToRemove);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartItems,
        },
      });
    },

    closeCartAndCurrency: (_root, _args, { cache }) => {
      cache.writeQuery({
        query: GET_IS_CART_AND_CURRENCY_OPEN,
        data: {
          isCurrencySwitcherOpen: false,
          isCartOpen: false,
        },
      });
    },
    closeCart: (_root, _args, { cache }) => {
      cache.writeQuery({
        query: GET_IS_CART_OPEN,
        data: {
          isCartOpen: false,
        },
      });
    },
    
  },
};
