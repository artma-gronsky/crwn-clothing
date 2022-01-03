import {UserActionTypes} from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SING_IN_START
});

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SING_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = (error) => ({
    type: UserActionTypes.GOOGLE_SING_IN_FAILURE,
    payload: error
});

export const emailSignInStart = ({email, password}) => ({
    type: UserActionTypes.EMAIL_SING_IN_START,
    payload: {email, password}
});

export const emailSignInSuccess = (user) => ({
    type: UserActionTypes.EMAIL_SING_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = (error) => ({
    type: UserActionTypes.EMAIL_SING_IN_FAILURE,
    payload: error
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