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
        case CartActionTypes.REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id != action.payload)
            }
        }
        default:
            return state;
    }
}