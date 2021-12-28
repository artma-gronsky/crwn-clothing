import SHOP_DATA from "../../pages/shoppage/shoppage.data";
import {ShopActionTypes} from "./shop.types";

const INITIAL_STATE = {
    collections: SHOP_DATA,
    selectedCategory: ""
}

function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ShopActionTypes.SELECT_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
        default:
            return state;
    }
}

export default shopReducer;