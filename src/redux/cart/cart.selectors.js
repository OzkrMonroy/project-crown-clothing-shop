import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectorCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectorCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)