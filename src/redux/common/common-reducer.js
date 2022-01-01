import CommonActionsTypes from "./commonActionsTypes";

const INITIAL_STATE = {
    isGlobalLoading: false
}

export default function commonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CommonActionsTypes.SET_GLOBAL_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}