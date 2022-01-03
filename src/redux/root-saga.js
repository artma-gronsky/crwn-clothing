import {fetchCollectionsWatcher} from "./shop/shop.sagas";
import {all, call} from "redux-saga/effects";

export function* RootSaga() {
    return yield all([
        call(fetchCollectionsWatcher)
    ])
}