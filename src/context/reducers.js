/** @format */

import { streamConstants } from "../constants/type";
const seacrhProduct = (search, state) => {
  let newProducts = [];
  if (search !== "") {
    newProducts = state.products.filter((item) => {
      const lc = item.name.toLowerCase();
      const filter = search.toLowerCase();
      return lc.includes(filter);
    });
  } else {
    newProducts = state.products;
  }
  return { ...state, filteredProducts: newProducts };
};
export const streamReducer = (state, action) => {
  switch (action.type) {
    case streamConstants.SEARCH_QRY:
      // console.log('streamReducer: > ', action, state);
      return seacrhProduct(action.qry, state);
    default:
      return state;
  }
};
