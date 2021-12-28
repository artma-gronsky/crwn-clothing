import {ShopActionTypes} from "./shop.types";

export const selectShopCategory = (category) => ({
    type: ShopActionTypes.SELECT_CATEGORY,
    payload: category
});