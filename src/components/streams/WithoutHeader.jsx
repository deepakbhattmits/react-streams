/** @format */

/** @format */

import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
const WithoutHeader = ({ propRef, data, rowEvents, sort }) => {
	console.log('withOutHeader: ', propRef, data);
	const columns = [
		{
			dataField: 'id',
			text: 'Product ID',
			sort: true,
			headerStyle: (colum, colIndex) => {
				return { width: '1.1rem', textAlign: 'left' };
			}
		},
		{
			dataField: 'name',
			text: 'Product Name',
			sort: true,
			headerStyle: (colum, colIndex) => {
				return { width: '5rem', textAlign: 'center' };
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

	return (
		<>
			<BootstrapTable
				ref={propRef}
				bootstrap4
				keyField='id'
				data={data}
				columns={columns}
				sort={sort}
				rowEvents={rowEvents}
			/>
		</>
	);
};

export default WithoutHeader;
