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
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        }
        case CartActionTypes.INCREASE_ITEM_QUANTITY: {
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return {...item, count: item.count + 1}
                    }
                    return item;
                })
            }
        }
        case CartActionTypes.DECREASE_ITEM_QUANTITY: {
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload && item.count !== 1) {
                        return {...item, count: item.count - 1}
                    }
                    return item;
                })
            }
        }
        default:
            return state;
    }
}