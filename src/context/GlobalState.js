/** @format */

import React, { useReducer } from 'react';
import AppContext from './app-context';
import { streamConstants } from '../constants/type';
import { streamReducer } from './reducers.js';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const GlobalState = props => {
	const products = [
		{ id: 1, name: 'apple', price: 100 },
		{ id: 2, name: 'iphone pro', price: 102 },
		{ id: 3, name: 'iphone pro', price: 150 },
		{ id: 4, name: 'iphone pro', price: 150 },
		{ id: 5, name: 'apple', price: 150 },
		{ id: 6, name: 'iphone pro', price: 150 },
		{ id: 7, name: 'iphone X', price: 150 },
		{ id: 8, name: 'iphone XI', price: 150 },
		{ id: 9, name: 'iphone pro', price: 150 },
		{ id: 10, name: 'Mac Book pro', price: 150 },
		{ id: 11, name: 'Mac Book', price: 150 },
		{ id: 12, name: 'Mac Book', price: 150 },
		{ id: 13, name: 'Mac Book', price: 150 }
	];
	const filteredProducts = [
		{ id: 1, name: 'anurag pandey', price: 100 },
		{ id: 2, name: 'amrita pandey', price: 102 },
		{ id: 3, name: 'deepak bhatt', price: 150 },
		{ id: 4, name: 'akhilesh singh', price: 150 },
		{ id: 5, name: 'bharat kg', price: 150 },
		{ id: 6, name: 'Mahadev birader', price: 150 },
		{ id: 7, name: 'dinesh kotni', price: 150 },
		{ id: 8, name: 'praveen vishnoi', price: 150 },
		{ id: 9, name: 'vinod singh', price: 150 },
		{ id: 10, name: 'devesh kumar', price: 150 },
		{ id: 11, name: 'priyanka ', price: 150 },
		{ id: 12, name: 'pooja upadhyay', price: 150 },
		{ id: 13, name: 'lalit mohan upadhyay', price: 150 }
	];

	const [state, dispatch] = useReducer(streamReducer, {
		products: products,
		filteredProducts: filteredProducts
	});
	const seacrhProduct = (qry, state) => {
		// console.log('globalState SEARCH : ', qry, state);
		setTimeout(() => {
			dispatch({ type: streamConstants.SEARCH_QRY, qry: qry });
		}, 700);
	};

	return (
		<AppContext.Provider
			value={{
				filteredProducts: state.filteredProducts,
				seacrhProduct: seacrhProduct
			}}>
			{props.children}
		</AppContext.Provider>
	);
};
export default GlobalState;
