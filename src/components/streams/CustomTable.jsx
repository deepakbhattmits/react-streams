/** @format */

import React, { useState, useContext, useEffect } from 'react';
import appContext from '../../context/app-context';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';
import BootstrapTable from 'react-bootstrap-table-next';
import TableModal from '../TableModal';
const CustomTable = props => {
	const context = useContext(appContext);
	const [classList, setClassList] = useState([]);
	// console.log('TABLE :', context.filteredProducts);
	const [data, setData] = useState([]);
	const [products, setProducts] = useState([]);
	const [active, setActive] = useState(false);
	const getData = (id, item) => {
		return (
			<div
				key={item}
				id={id}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}>
				<span>DEMO</span>
				<span>{item}</span>
			</div>
		);
	};
	const columns = [
		{
			dataField: 'id',
			text: 'Product ID',
			sort: true,
			headerStyle: (colum, colIndex) => {
				return { width: '1rem', textAlign: 'left' };
			},
			sortFunc: (a, b, order, dataField, rowA, rowB) => {
				if (order === 'asc') return a - b;
				else return b - a;
			}
		},
		{
			dataField: 'name',
			text: 'Product Name',
			headerStyle: (colum, colIndex) => {
				return { width: '5rem', textAlign: 'center' };
			},
			sort: true,
			sortFunc: (a, b, order, dataField, rowA, rowB) => {
				console.log(rowA.name.props.children[1].props.children);
				if (
					order === 'asc' &&
					rowA.name.props.children[1].props.children >
						rowB.name.props.children[1].props.children
				) {
					return -1;
				} else if (
					order === 'desc' &&
					rowA.name.props.children[1].props.children <
						rowB.name.props.children[1].props.children
				) {
					return 1;
				} else {
					return 0;
				}
			}
		},
		{
			dataField: 'price',
			text: 'Product Price',
			sort: true,
			headerStyle: (colum, colIndex) => {
				return { width: '2rem', textAlign: 'left' };
			}
		},
		{
			dataField: 'group',
			text: 'Group',
			sort: true,
			headerStyle: (colum, colIndex) => {
				return { width: '2rem', textAlign: 'left' };
			}
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

		console.log('name : ', name);
		if (!!classList && classList.filter(el => el === name)) {
			setClassList([...classList, name]);
		}
		let products = [];
		console.log('SELECTED :', textContent);
		products =
			textContent !== 'all'
				? context.filteredProducts.filter(
						el => el.group === textContent.toLowerCase()
				  )
				: context.filteredProducts;
		setProducts(products);
	};
	useEffect(() => {
		const products = context.filteredProducts.map(item => {
			return {
				id: item.id,
				name: getData(item.id, item.name),
				price: item.price,
				group: item.group
			};
		});
		setProducts(products);
	}, [context.filteredProducts]);
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
			<BootstrapTable
				bootstrap4
				keyField='id'
				data={products}
				columns={columns}
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
