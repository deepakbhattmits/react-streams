/** @format */

import React, { useReducer } from 'react';
import AppContext from './app-context';
import { streamConstants } from '../constants/type';
import { streamReducer } from './reducers.js';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const GlobalState = props => {
	const products = [
		{ id: 1, name: 'Item 1', price: 100 },
		{ id: 2, name: 'Item 2', price: 102 },
		{ id: 3, name: 'Item 3', price: 150 },
		{ id: 4, name: 'Item 4', price: 150 },
		{ id: 5, name: 'Item 5', price: 150 },
		{ id: 6, name: 'Item 6', price: 150 },
		{ id: 7, name: 'Item 7', price: 150 },
		{ id: 8, name: 'Item 8', price: 150 },
		{ id: 9, name: 'Item 9', price: 150 },
		{ id: 10, name: 'Item 10', price: 150 },
		{ id: 11, name: 'Item 11', price: 150 },
		{ id: 12, name: 'Item 12', price: 150 },
		{ id: 13, name: 'Item 13', price: 150 }
	];
	const [state, dispatch] = useReducer(streamReducer, { products: products });
	const seacrhProduct = qry => {
		console.log('SEARCH : ', state, qry);
		setTimeout(() => {
			dispatch({ type: streamConstants.SEARCH_QRY, qry: qry });
		}, 700);
	};

	return (
		<AppContext.Provider
			value={{
				products: products,
				seacrhProduct: seacrhProduct
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
export default GlobalState;
