/** @format */

import React, { useImperativeHandle, forwardRef } from 'react';
// Import React Table
import ReactTable from 'react-table-6';

const WithOutHeader = forwardRef((props, ref) => {
	// console.log('WithOutHeader ::');
	// The component instance will be extended
	// with whatever you return from the callback passed
	// as the second argument
	useImperativeHandle(ref, () => ({
		disabledFunc() {
			/*
		check length of selection item 
		*/
			return props.selection.length === 0;
		},
		dataFunc() {
			return props.data;
		}
	}));
	return (
		<>
			<ReactTable
				ref={ref}
				data={props.data}
				onSortedChange={props.onSortedChange}
				columns={props.columns}
				minWidth={props.minWidth}
				showPagination={props.showPagination}
				pivotBy={props.pivotBy}
				defaultPageSize={props.defaultPageSize}
				className={props.className}
				resizeable={props.resizeable}
				sortable
				page={props.page}
				pageSize={props.pageSize}
				expanded={props.expanded}
			/>
		</>
	);
});
export default WithOutHeader;
