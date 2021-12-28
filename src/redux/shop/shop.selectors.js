import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);
export const selectShopCollectionArray = createSelector([selectShopCollections],
    collections => {
        return Object.keys(collections).map(function (key) {
            return collections[key];
        });
    });
