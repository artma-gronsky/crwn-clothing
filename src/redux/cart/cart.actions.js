import {CartActionTypes} from "./cart.types";


export const triggerCartVisibility = () => ({
    type: CartActionTypes.TRIGGER_CART_VISIBILITY,
    payload: null
})

export const addItemToCart = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
})