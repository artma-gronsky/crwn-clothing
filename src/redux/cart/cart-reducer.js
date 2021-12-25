import {CartActionTypes} from "./cart.types";

const INITIAL_STATE = {
    isHidden: true
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CartActionTypes.TRIGGER_CART_VISIBILITY:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}