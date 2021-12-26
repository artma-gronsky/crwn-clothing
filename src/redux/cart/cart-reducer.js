import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    isHidden: true,
    cartItems: []
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CartActionTypes.TRIGGER_CART_VISIBILITY:
            return {
                ...state,
                isHidden: !state.isHidden
            }

        case CartActionTypes.HIDE_CART:
            return {
                ...state,
                isHidden: true
            }
        case CartActionTypes.ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }
        default:
            return state;
    }
}