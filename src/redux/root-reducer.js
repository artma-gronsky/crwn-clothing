import {combineReducers} from "redux";
import userReducer from "./user/user-reducer";
import commonReducer from "./common/common-reducer";
import cartReducer from "./cart/cart-reducer";

export default combineReducers({
    user: userReducer,
    common: commonReducer,
    cart: cartReducer
});