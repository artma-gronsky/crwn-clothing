import {ShopActionTypes} from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    selectedCategory: "",
    isLoading: false
}

function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ShopActionTypes.SELECT_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }

        case ShopActionTypes.SET_DATA: {
            return {
                ...state,
                collections: action.payload
            }
        }
        case ShopActionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        default:
            return state;
    }
}

export default shopReducer;