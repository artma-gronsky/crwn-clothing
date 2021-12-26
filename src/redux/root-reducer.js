import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import userReducer from "./user/user-reducer";
import commonReducer from "./common/common-reducer";
import cartReducer from "./cart/cart-reducer";
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    common: commonReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);