/** @format */

import { streamConstants } from '../constants/type';
const seacrhProduct = (search, state) => {
	let filteredProducts = [];
	console.log('REDUCER', search, 'PRODUCTS : ', state.products);
	if (search === '') {
		return null;
	}
	filteredProducts = state.products.filter(
		item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
	);
	return { ...state, products: filteredProducts };
};
export const streamReducer = (state, action) => {
	switch (action.type) {
		case streamConstants.SEARCH_QRY:
			console.log('matched ', action.qry, state.products);
			return seacrhProduct(action.qry, state);
		default:
			return state;
	}
};
