import {createSelector} from "reselect";
import {FindProductDetail, FindProductRelated} from './ShopUtils';

// const COLLECTION_ID_MAP = {
// vegetable: 1,
// drink: 2,
// freshmeat: 3,
// juice: 4,
// bread: 5,
// };

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) => shop.collections);

export const selectShopMenu = createSelector([selectShop], (shop) => shop.menuThucAn);

export const selectCollectionsForArray = createSelector([selectShopItems], (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []);

export const selectCollection = (collectionUrlParam) => createSelector([selectShopItems], (collections) => collections ? collections[collectionUrlParam] : null);
export const selectProductDetail = (collectionUrlParam) => createSelector([selectShopItems], (collections) => collections ? FindProductDetail(collections, collectionUrlParam) : null);
export const selectProductRelated = (collectionUrlParam) => createSelector([selectShopItems], (collections) => collections ? FindProductRelated(collections, collectionUrlParam).items.slice(0, 4) : null);


export const selectIsCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections);

// export const selectCollection = (collectionUrlParam) =>
// createSelector([selectShopItems], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
// );
