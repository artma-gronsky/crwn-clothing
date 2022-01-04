import {all, call, put, takeLatest} from "redux-saga/effects";
import {UserActionTypes} from "../user/user.types";
import {clearCart} from "./cart.actions";

function* clearCartOnSignOutWorker() {
    yield put(clearCart());
}

export function* clearCartOnSignOutWatcher() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutWorker)
}

export default function* cartSagas() {
    yield all([call(clearCartOnSignOutWatcher)]);
}