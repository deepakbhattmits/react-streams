/** @format */

import { streamConstants } from '../constants/type';
const seacrhProduct = (search, state) => {
	let filteredProducts = [];
	console.log('REDUCER', search, 'PRODUCTS : ', state.products);
	if (search.length > 0) {
		filteredProducts = state.products.filter(item =>
			// item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
			item.name.toLowerCase().includes(search.toLowerCase())
		);
	} else {
		filteredProducts = state.products;
	}
	return { ...state, products: filteredProducts };
};
export const streamReducer = (state, action) => {
	switch (action.type) {
		case streamConstants.SEARCH_QRY:
			console.log('matched ', action, state);
			return seacrhProduct(action.qry, state);
		default:
			return state;
	}
};
