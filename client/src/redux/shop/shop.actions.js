import {ShopActionTypes} from "./shop.types";

export const fetchDataSuccess = (data) => ({
    type: ShopActionTypes.FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataStart = () => ({
    type: ShopActionTypes.FETCH_DATA_START
});

export const fetchDataError = (error) => ({
    type: ShopActionTypes.FETCH_DATA_ERROR,
    payload: error.message
});

export const selectShopCategory = (category) => ({
    type: ShopActionTypes.SELECT_CATEGORY,
    payload: category
});


// we can use it with redux-thunk
// export const fetchDataStartAsync = () => {
//     return dispatch => {
//         dispatch(fetchDataStart());
//
//         const collectionRef = firestore.collection('collections');
//         collectionRef.get()
//             .then(snapshot => {
//                 const transformedCollection = snapshot.docs.map(doc => {
//                     const {title, items} = doc.data()
//                     return ({
//                         title,
//                         items,
//                         routeName: encodeURI(title.toLowerCase()),
//                         id: doc.id
//                     })
//
//                 });
//
//                 const data = transformedCollection.reduce((accumulator, collection) => {
//                     accumulator[collection.title.toLowerCase()] = collection;
//                     return accumulator;
//                 }, {});
//
//                 dispatch(fetchDataSuccess(data));
//             }).catch(er => dispatch(fetchDataError(er)));
//     }
// }
