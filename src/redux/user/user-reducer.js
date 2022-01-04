import {UserActionTypes} from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false,
    error: null
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {...state, currentUser: action.payload}
        case UserActionTypes.SING_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {...state, currentUser: action.payload, isFetching: false, error: null}
        case UserActionTypes.GOOGLE_SING_IN_START:
        case UserActionTypes.EMAIL_SING_IN_START:
        case UserActionTypes.SIGN_OUT_START:
            return {...state, isFetching: true}
        case UserActionTypes.SING_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {...state, isFetching: false, error: action.payload}
        case UserActionTypes.SIGN_OUT_START:
            return {...state, isFetching: true}
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {...state, isFetching: false, currentUser: null}
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {...state, isFetching: false, currentUser: null, error: action.payload}
        case UserActionTypes.CHECK_USER_SESSION:
            return {...state, isFetching: true, currentUser: null}
        default:
            return state;
    }
}