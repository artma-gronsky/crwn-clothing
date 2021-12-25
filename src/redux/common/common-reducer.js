import CommonActionsTypes from "./commonActionsTypes";

const INITIAL_STATE = {
    isLoading: false
}

export default function commonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CommonActionsTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}