import {firestore} from "../../firebase/firebase.utils";

// const projectId = 'crwn-db-11f38';
// const getCollectionsUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/collections`;

export function fetchData(handleData) {

    const collectionRef = firestore.collection('collections');

    // fetch(getCollectionsUrl)
    //     .then(response => response.json())
    //     .then(x => console.log(getCollectionsUrl));

    // const unsubscribeFnRef = collectionRef.onSnapshot(snapshot => {
    //     const transformedCollection = snapshot.docs.map(doc => {
    //         const {title, items} = doc.data()
    //         return ({
    //             title,
    //             items,
    //             routeName: encodeURI(title.toLowerCase()),
    //             id: doc.id
    //         })
    //
    //     });
    //
    //     const data = transformedCollection.reduce((accumulator, collection) => {
    //         accumulator[collection.title.toLowerCase()] = collection;
    //         return accumulator;
    //     }, {});
    //
    //     handleData(data);
    // });

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

            handleData(data)
        })
}