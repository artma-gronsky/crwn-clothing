import {all, call, put, takeLatest} from "redux-saga/effects";
import {UserActionTypes} from "./user.types";
import {setGlobalLoading} from "../common/common.actions";
import {auth, createUserProfileDocument, googleProvider} from "../../firebase/firebase.utils";
import {signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure} from "./user.actions";


function* putUserToStore(user, additionalData = null) {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const snapShot = yield userRef.get();
    yield put(signInSuccess(snapShot.data()))
    yield put(setGlobalLoading(false));
}


function* onEmailAndPasswordSignInStartWorker({payload: {email, password}}) {
    yield put(setGlobalLoading(true));

    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield call(putUserToStore, user);

    } catch (err) {
        yield put(setGlobalLoading(false));
        yield put(signInFailure(err));
    }

}

function* onSingInStartWorker() {
    yield put(setGlobalLoading(true));

    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield call(putUserToStore, user);

    } catch (err) {
        yield put(setGlobalLoading(false));
        yield put(signInFailure(err));
    }
}

function* onSignOutWorker() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (err) {
        yield put(signOutFailure(err))
    }
}

function* onSignUpStartWorker({payload: {email, password, ...additionalData}}) {
    try {
        yield put(setGlobalLoading(true));
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield call(putUserToStore, user, additionalData);
    } catch (err) {
        yield put(signUpFailure(err))
        yield put(setGlobalLoading(false));
    }
}

function* onGoogleSignInStartWatcher() {
    yield takeLatest(UserActionTypes.GOOGLE_SING_IN_START, onSingInStartWorker)
}

function* onEmailAndPasswordSignInStartWatcher() {
    yield takeLatest(UserActionTypes.EMAIL_SING_IN_START, onEmailAndPasswordSignInStartWorker)
}

function* onSignOutStartWatcher() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, onSignOutWorker)
}

function* onSignUpStartWatcher() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, onSignUpStartWorker)
}


export function* userWatchers() {
    yield all([
        call(onGoogleSignInStartWatcher),
        call(onSignOutStartWatcher),
        call(onEmailAndPasswordSignInStartWatcher),
        call(onSignUpStartWatcher)
    ])
}