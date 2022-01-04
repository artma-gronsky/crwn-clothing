import shopSagas from "./shop/shop.sagas";
import {all, call} from "redux-saga/effects";
import {userWatchers} from "./user/user.sagas";
import cartSagas from "./cart/cart.sagas";

export function* RootSaga() {
    return yield all([
        call(shopSagas),
        call(userWatchers),
        call(cartSagas)
    ])
}