import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectIsCartHidden = createSelector([selectCart], (cart) => cart.isHidden)
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((totalItemCount, item) => item.count + totalItemCount, 0))
export const selectIsCartEmpty = createSelector([selectCartItems], cartItems => !cartItems || !cartItems.length)