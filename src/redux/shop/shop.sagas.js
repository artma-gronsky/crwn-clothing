import {call, put, takeLatest} from 'redux-saga/effects';
import {ShopActionTypes} from "./shop.types";
import {firestore} from "../../firebase/firebase.utils";
import {fetchDataError, fetchDataSuccess} from "./shop.actions";


export function* fetchCollectionWorker() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(function (snap) {
            const transformedCollection = snap.docs.map(doc => {
                const {title, items} = doc.data()
                return ({
                    title,
                    items,
                    routeName: encodeURI(title.toLowerCase()),
                    id: doc.id
                })

            });
            return transformedCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
            }, {});
        }, snapshot)

        yield put(fetchDataSuccess(collectionMap));

    } catch (err) {
        yield put(fetchDataError(err))
    }
}

export function* fetchCollectionsWatcher() {
    yield takeLatest(ShopActionTypes.FETCH_DATA_START, fetchCollectionWorker)
}