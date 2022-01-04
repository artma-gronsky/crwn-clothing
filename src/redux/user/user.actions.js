import {UserActionTypes} from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SING_IN_START
});

export const emailSignInStart = ({email, password}) => ({
    type: UserActionTypes.EMAIL_SING_IN_START,
    payload: {email, password}
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SING_IN_FAILURE,
    payload: error
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SING_IN_SUCCESS,
    payload: user
});

export const signOutStart = (error) => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = (error) => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = ({email, password, ...additionalData}) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: {email, password, ...additionalData}
});

export const signUpSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});