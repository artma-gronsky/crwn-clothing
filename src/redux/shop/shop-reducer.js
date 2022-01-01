import {ShopActionTypes} from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    selectedCategory: "",
    isFetching: false,
    errorMessage: ''
}

function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ShopActionTypes.SELECT_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }

        case ShopActionTypes.FETCH_DATA_SUCCESS: {
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        }
        case ShopActionTypes.FETCH_DATA_START: {
            return {
                ...state,
                isFetching: true
            }
        }
        case ShopActionTypes.FETCH_DATA_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        }

        default:
            return state;
    }
}

export default shopReducer;