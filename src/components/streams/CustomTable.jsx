/** @format */

/** @format */

import React, { useState, useContext, useEffect, useRef } from 'react';
import appContext from '../../context/app-context';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';
import BootstrapTable from 'react-bootstrap-table-next';
import TableModal from '../TableModal';
const CustomTable = props => {
	const table = useRef();
	const context = useContext(appContext);
	const [classList, setClassList] = useState([]);
	console.log('TABLE :', context.filteredProducts);
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
				return { width: '1.1rem', textAlign: 'left' };
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
				return { width: '2.3rem', textAlign: 'left' };
			}
		},
		{
			dataField: 'group',
			text: 'Group',
			sort: true,
			headerStyle: (colum, colIndex) => {
				return { width: '2.3rem', textAlign: 'left' };
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
	useEffect(() => {
		const products = context.filteredProducts.map(item => {
			return {
				id: item.id,
				name: item.name,
				price: item.price,
				group: item.group
			};
		});
		setProducts(products);
	}, [context.filteredProducts]);
	const handleSort = id => {
		console.log('SORT : ', id, table.current.props.data);
		if (id === 'id') {
			const sortById = context.filteredProducts.sort((a, b) => {
				return b.id - a.id;
			});
			console.log('AFTER SORT : ', sortById, table.current.props.data);
			setProducts(sortById);
		}
		if (id === 'name') {
			const sortByName = context.filteredProducts.sort((a, b) => {
				return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
			});
			console.log('AFTER SORT : ', sortByName, table.current.props.data);
			setProducts(sortByName);
		} else if (id === 'price') {
			const sortByPrice = context.filteredProducts.sort((a, b) => {
				return a.price - b.price;
			});
			console.log('AFTER SORT : ', sortByPrice, table.current.props.data);
			setProducts(sortByPrice);
		} else {
			setProducts(context.filteredProducts);
		}
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
			<BootstrapTable
				ref={table}
				bootstrap4
				keyField='id'
				data={products}
				columns={columns}
				sort={sortOption}
				rowEvents={rowEvents}
			/>
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

// import React from 'react';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table-next';

// const products = [];

// function addProducts(quantity) {
// 	const startId = products.length;
// 	for (let i = 0; i < quantity; i++) {
// 		const id = startId + i;
// 		if (i < 3) {
// 			products.push({
// 				id: id,
// 				name: 'Item name ' + id,
// 				price: 2100 + i,
// 				expand: [
// 					{
// 						fieldA: 'test1',
// 						fieldB: (i + 1) * 99,
// 						fieldC: (i + 1) * Math.random() * 100,
// 						fieldD: '123eedd' + i
// 					},
// 					{
// 						fieldA: 'test2',
// 						fieldB: i * 99,
// 						fieldC: i * Math.random() * 100,
// 						fieldD: '123eedd' + i
// 					}
// 				]
// 			});
// 		} else {
// 			products.push({
// 				id: id,
// 				name: 'Item name ' + id,
// 				price: 2100 + i
// 			});
// 		}
// 	}
// }
// addProducts(5);

// class BSTable extends React.Component {
// 	render() {
// 		if (this.props.data) {
// 			return (
// 				<BootstrapTable data={this.props.data}>
// 					<TableHeaderColumn dataField='fieldA' isKey={true}>
// 						Field A
// 					</TableHeaderColumn>
// 					<TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
// 					<TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
// 					<TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
// 				</BootstrapTable>
// 			);
// 		} else {
// 			return <p>?</p>;
// 		}
// 	}
// }

// export default class CustomTable extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	isExpandableRow(row) {
// 		if (row.id < 3) return true;
// 		else return false;
// 	}

// 	expandComponent(row) {
// 		return <BSTable data={row.expand} />;
// 	}

// 	render() {
// 		const options = {
// 			expandRowBgColor: 'rgb(242, 255, 163)'
// 		};
// 		return (
// 			<BootstrapTable
// 				data={products}
// 				options={options}
// 				expandableRow={this.isExpandableRow}
// 				expandComponent={this.expandComponent}
// 				search>
// 				<TableHeaderColumn dataField='id' isKey={true}>
// 					Product ID
// 				</TableHeaderColumn>
// 				<TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
// 				<TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
// 			</BootstrapTable>
// 		);
// 	}
// }
