/** @format */

import { streamConstants } from '../constants/type';
const seacrhProduct = (search, state) => {
	console.log('REDUCER', search, 'PRODUCTS : ', state.products);
	const filteredProducts = state.products.filter(item => {
		return item.name.toLowerCase().search(search.toLowerCase()) !== -1;
	});
	return { ...state, products: filteredProducts };
};
export const streamReducer = (state, action) => {
	switch (action.type) {
		case streamConstants.SEARCH_QRY:
			console.log('new matched :', action, state);
			return seacrhProduct(action.qry, state);
		default:
			return state;
	}
};
