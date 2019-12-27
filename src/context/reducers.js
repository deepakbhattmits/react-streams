/** @format */

import { streamConstants } from '../constants/type';
const seacrhProduct = (search, products) => {
	console.log('REDUCER', search, 'PRODUCTS : ', products);
	return products.filter(item =>
		item.name.toLowerCase().includes(search.toLowerCase())
	);
};
export const streamReducer = (state, action) => {
	switch (action.type) {
		case streamConstants.SEARCH_QRY:
			console.log('matched ', action.qry, state.products);
			seacrhProduct(action.qry, state.products);
			return state;
		default:
			return state;
	}
};
