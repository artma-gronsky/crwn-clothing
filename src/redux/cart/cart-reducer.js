import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    isHidden: true,
    cartItem: []
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CartActionTypes.TRIGGER_CART_VISIBILITY:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        case CartActionTypes.ADD_ITEM: {
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        }
        default:
            return state;
    }
}