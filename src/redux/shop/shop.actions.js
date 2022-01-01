import {ShopActionTypes} from "./shop.types";
import {firestore} from "../../firebase/firebase.utils";

const fetchDataSuccess = (data) => ({
    type: ShopActionTypes.FETCH_DATA_SUCCESS,
    payload: data
});

const fetchDataStart = () => ({
    type: ShopActionTypes.FETCH_DATA_START
});

const fetchDataError = (error) => ({
    type: ShopActionTypes.FETCH_DATA_ERROR,
    payload: error.message
});

export const fetchDataStartAsync = () => {
    return dispatch => {
        dispatch(fetchDataStart());

        const collectionRef = firestore.collection('collections');
        collectionRef.get()
            .then(snapshot => {
                const transformedCollection = snapshot.docs.map(doc => {
                    const {title, items} = doc.data()
                    return ({
                        title,
                        items,
                        routeName: encodeURI(title.toLowerCase()),
                        id: doc.id
                    })

                });

                const data = transformedCollection.reduce((accumulator, collection) => {
                    accumulator[collection.title.toLowerCase()] = collection;
                    return accumulator;
                }, {});

                dispatch(fetchDataSuccess(data));
            }).catch(er => dispatch(fetchDataError(er)));
    }
}


export const selectShopCategory = (category) => ({
    type: ShopActionTypes.SELECT_CATEGORY,
    payload: category
});