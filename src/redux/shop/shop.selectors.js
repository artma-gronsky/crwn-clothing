import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectSelectedCategory = createSelector([selectShop], shop => shop.selectedCategory)
export const selectShopCollections = createSelector([selectShop], shop => shop.collections);
export const selectShopCollectionArray = createSelector([selectShopCollections],
    collections => {
        return Object.keys(collections).map(function (key) {
            return collections[key];
        });
    });

export const selectShopSelectedCollectionItems = createSelector([selectShopCollections, selectSelectedCategory],
    (collections, category) => !!category ? collections[category].items : []
);

export const selectShopSelectedCollectionTitle = createSelector([selectShopCollections, selectSelectedCategory],
    (collections, category) => !!category ? collections[category].title : ""
);

