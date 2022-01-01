import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectSelectedCategory = createSelector([selectShop], shop => shop?.selectedCategory)
export const selectShopCollections = createSelector([selectShop], shop => shop ? shop.collections : null);
export const selectShopCollectionArray = createSelector([selectShopCollections],
    collections => {
        return collections ? Object.keys(collections).map(function (key) {
            return collections[key];
        }) : [];
    });

export const selectShopSelectedCollectionItems = createSelector([selectShopCollections, selectSelectedCategory],
    (collections, category) => !!category ?
        (collections && collections[category] ? collections[category].items : [])
        : []
);

export const selectShopSelectedCollectionTitle = createSelector([selectShopCollections, selectSelectedCategory],
    (collections, category) => !!category ?
        (collections && collections[category] ? collections[category].title : '')
        : ""
);

export const selectIsFetching = createSelector([selectShop], state => state.isFetching);

