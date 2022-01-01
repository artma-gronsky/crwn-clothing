import {ShopActionTypes} from "./shop.types";

export const selectShopCategory = (category) => ({
    type: ShopActionTypes.SELECT_CATEGORY,
    payload: category
});

export const setShopData = (data) => ({
    type: ShopActionTypes.SET_DATA,
    payload: data
})

export const setLoading = (isLoading) => ({
    type: ShopActionTypes.SET_LOADING,
    payload: isLoading
});