import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.shopItems
)

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
  [selectShopItems],
  collections => collections[collectionUrlParam]
))