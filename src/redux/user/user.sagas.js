import {all, call, put, takeLatest} from "redux-saga/effects";
import {UserActionTypes} from "./user.types";
import {setGlobalLoading} from "../common/common.actions";
import {auth, createUserProfileDocument, googleProvider} from "../../firebase/firebase.utils";
import {
    emailSignInFailure,
    emailSignInSuccess,
    googleSignInFailure,
    googleSignInSuccess,
    signOutFailure,
    signOutSuccess
} from "./user.actions";

function* onEmailAndPasswordSignInStartWorker({payload: {email, password}}) {
    yield put(setGlobalLoading(true));

    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const snapShot = yield userRef.get();

        console.log();

        yield put(emailSignInSuccess(snapShot.data()))
        yield put(setGlobalLoading(false));

    } catch (err) {
        yield put(setGlobalLoading(false));
        yield put(emailSignInFailure(err));
    }

}

function* onSingInStartWorker() {
    yield put(setGlobalLoading(true));

    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const snapShot = yield userRef.get();

        yield put(googleSignInSuccess(snapShot.data()))
        yield put(setGlobalLoading(false));

    } catch (err) {
        yield put(setGlobalLoading(false));
        yield put(googleSignInFailure(err));
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

function* onGoogleSignInStartWatcher() {
    yield takeLatest(UserActionTypes.GOOGLE_SING_IN_START, onSingInStartWorker)
}


function* onEmailAndPasswordSignInStartWatcher() {
    yield takeLatest(UserActionTypes.EMAIL_SING_IN_START, onEmailAndPasswordSignInStartWorker)
}

function* onSignOutStartWatcher() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, onSignOutWorker)
}


export function* userWatchers() {
    yield all([
        call(onGoogleSignInStartWatcher),
        call(onSignOutStartWatcher),
        call(onEmailAndPasswordSignInStartWatcher)
    ])
}