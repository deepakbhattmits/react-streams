/** @format */

import React, { useState } from 'react';
import { data } from '../../db/tab';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';

// Import React Table
import ReactTable from 'react-table';

const makeDefaultState = () => ({
	sorted: [
		{
			id: 'firstName',
			asc: true,
			desc: false
		},
		{
			id: 'age',
			asc: true,
			desc: false
		}
	],
	page: 0,
	pageSize: 10,
	expanded: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} },
	resized: []
	// filtered: []
});

const Table = () => {
	console.log('TEST');
	const [state, setState] = useState(makeDefaultState());
	// this.resetState = this.resetState.bind(this);
	// resetState() {
	//   this.setState(makeDefaultState());
	// }
	console.log('TEST : ', data);
	return (
		<div>
			<ReactTable
				data={data}
				columns={[
					{
						Header: 'First Name',
						accessor: 'firstName',
						Aggregated: row => {
							return <span>{row.value}</span>;
						}
						// Cell: () => (
						// 	<>
						// 		<DownArrowSVG className='icon down --arrow' />
						// 		<UpArrowSVG className='icon up --arrow' />
						// 	</>
						// )
					},

					{
						// Header: 'Role',
						id: 'role',
						sortable: false,
						className: 'deepak',
						accessor: d => d.role,
						width: 170,
						Expander: ({ isExpanded, ...rest }) => {
							return <div>{isExpanded ? <span /> : <span />}</div>;
						},
						PivotValue: row => <span className='test'>{row.value}</span>
					},

					{
						Header: 'Age',
						accessor: 'age',
						Aggregated: row => {
							return <span>{row.value}</span>;
						}
						// Cell: () => (
						// 	<>
						// 		<DownArrowSVG className='icon down --arrow' />
						// 		<UpArrowSVG className='icon up --arrow' />
						// 	</>
						// )
					}
				]}
				showPagination={false}
				pivotBy={['role']}
				// filterable
				defaultPageSize={10}
				className='react-table'
				// Controlled props
				sortable
				// sorted={this.state.sorted}
				page={state.page}
				pageSize={state.pageSize}
				expanded={state.expanded}
				// resized={this.state.resized}
				// filtered={this.state.filtered}
				// Callbacks
				// onSortedChange={sorted => this.setState({ sorted })}
				// onPageChange={page => this.setState({ page })}
				// onPageSizeChange={(pageSize, page) =>
				//   this.setState({ page, pageSize })
				// }
				// onExpandedChange={expanded => this.setState({ expanded })}
				// onResizedChange={resized => this.setState({ resized })}
				// onFilteredChange={filtered => this.setState({ filtered })}
				// defaultFilterMethod={(filter, row, column) => {
				//   const id = filter.pivotId || filter.id;
				//   return row[id] !== undefined
				//     ? String(row[id])
				//         .toLowerCase()
				//         .indexOf(filter.value.toLowerCase()) !== -1
				//     : true;
				// }}
			/>
		</div>
	);
};
export default Table;
