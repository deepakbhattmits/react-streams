/** @format */

/** @format */

import React, { useState, useContext, useRef } from 'react';
import appContext from '../../context/app-context';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';
import WithoutHeader from './WithoutHeader';
import TableModal from '../TableModal';
const CustomTable = () => {
	// console.log('TEST');
	const tableF = useRef();
	const tableS = useRef();
	const context = useContext(appContext);
	const [classList, setClassList] = useState([]);
	// console.log('TABLE :', context.filteredProducts);
	const [data, setData] = useState([]);
	const [products, setProducts] = useState(context.filteredProducts);
	const [active, setActive] = useState(false);
	const handleSort = id => {
		console.log('SORT : ', id, tableF.current.props.data);
		const state = tableF.current.props.data.sort((a, b) => {
			if (id !== 'id' && id !== 'price') {
				return a[id].toLowerCase().localeCompare(b[id].toLowerCase())
					? -1
					: b[id].toLowerCase().localeCompare(a[id].toLowerCase())
					? 1
					: 0;
			} else {
				if (id === 'id') {
					console.log('ID : ', a[id], b[id]);
					return a[id] > b[id] ? a[id] - b[id] : b[id] - a[id];
				} else if (id === 'price') {
					return b[id] > a[id] ? b[id] - a[id] : a[id] - b[id];
				} else {
				}
			}
		});
		console.log('STATE : ', state);
		setProducts(state);
	};
	const columns = [
		{
			dataField: 'id',
			text: 'Product ID'
		},
		{
			dataField: 'name',
			text: 'Product Name'
		},
		{
			dataField: 'price',
			text: 'Product Price'
		},
		{
			dataField: 'group',
			text: 'Group'
		}
	];
	const sortOption = {
		sortCaret: (order, column) => {
			if (!order)
				return (
					<span className='caret'>
						<UpArrowSVG className='icon down --arrow' />
						<DownArrowSVG className='icon up --arrow' />
					</span>
				);
			else if (order === 'asc')
				return (
					<span className='caret asc'>
						<UpArrowSVG className='icon up --arrow' />
						<DownArrowSVG className='icon down --arrow' />

						{/* &nbsp;&nbsp;<font color='red'>Asc</font> */}
					</span>
				);
			else if (order === 'desc')
				return (
					<span className='caret desc'>
						<UpArrowSVG className='icon up --arrow' />
						<DownArrowSVG className='icon down --arrow' />
						{/* &nbsp;&nbsp;<font color='red'>Desc</font>/Asc */}
					</span>
				);
			return null;
		}
	};
	const rowEvents = {
		onClick: (e, row, rowIndex) => {
			let data = {};
			const element = context.filteredProducts.filter(
				item => item.id === row.id
			);
			data['id'] = element[0].id;
			data['name'] = element[0].name;
			data['price'] = element[0].price;
			setData(data);
			setActive(true);
		}
	};
	const handleClick = e => {
		const { textContent } = e.target;
		var name = e.target.getAttribute('name'); //'HOME'

		// console.log('name : ', name);
		if (!!classList && classList.filter(el => el === name)) {
			setClassList([...classList, name]);
		}
		let products = [];
		// console.log('SELECTED :', textContent);
		products =
			textContent !== 'all'
				? context.filteredProducts.filter(
						el => el.group === textContent.toLowerCase()
				  )
				: context.filteredProducts;
		setProducts(products);
	};
	return (
		<>
			<div className='list-inline'>
				<li
					name='all'
					className={`list-inline-item ${classList.filter(el =>
						el === 'all' ? 'selected' : null
					)}`}
					onClick={handleClick}>
					all
				</li>
				<li
					name='developer'
					className={`list-inline-item  ${classList.filter(el =>
						el === 'developer' ? 'selected' : null
					)}`}
					onClick={handleClick}>
					developer
				</li>
				<li
					name='tester'
					className={`list-inline-item ${classList.filter(el =>
						el === 'tester' ? 'selected' : null
					)}`}
					onClick={handleClick}>
					tester
				</li>
				<li
					name='manager'
					className={`list-inline-item ${classList.filter(el =>
						el === 'manager' ? 'selected' : null
					)}`}
					onClick={handleClick}>
					manager
				</li>
			</div>
			<div className='main-header'>
				{columns.map((el, i) => {
					return (
						<div
							key={i}
							className='data-item'
							onClick={() => {
								handleSort(el.dataField);
							}}>
							{el.text}
						</div>
					);
				})}
			</div>
			<WithoutHeader
				propRef={tableF}
				data={products}
				sort={sortOption}
				rowEvents={rowEvents}
			/>
			<WithoutHeader
				propRef={tableS}
				data={products}
				sort={sortOption}
				rowEvents={rowEvents}
			/>
			<TableModal
				title='selected data'
				content={data}
				active={active}
				onDismiss={() => setActive(false)}
			/>
		</>
	);
};

export default CustomTable;
