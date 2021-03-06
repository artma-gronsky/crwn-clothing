import {logger} from "redux-logger";
import {persistStore} from "redux-persist";

import {applyMiddleware, createStore} from "redux";

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';
import {RootSaga} from "./root-saga";


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

//leverage localStorage for save storem
export const persistor = persistStore(store);

export default {store, persistor};