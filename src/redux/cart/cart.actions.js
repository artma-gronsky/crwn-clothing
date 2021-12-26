import {CartActionTypes} from "./cart.types";


export const triggerCartVisibility = () => ({
    type: CartActionTypes.TRIGGER_CART_VISIBILITY,
    payload: null
})

export const hideCart = () => ({
    type: CartActionTypes.HIDE_CART
});

export const addItemToCart = (cartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
})

export const removeItemFromCart = (id) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: id
})