/** @format */

import { streamConstants } from '../constants/type';
const seacrhProduct = (product, state) => {
	console.log('REDUCER', product, state.products);
};
export const streamReducer = (state, action) => {
	switch (action.type) {
		case streamConstants.SEARCH_QRY:
			console.log('matched ', action.qry, state);
			return seacrhProduct(action.qry, state.products);
		default:
			return state;
	}
};
