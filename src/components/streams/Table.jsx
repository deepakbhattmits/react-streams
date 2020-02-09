/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { data } from '../../db/raw';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';
import { Button } from 'react-bootstrap';

import appContext from '../../context/app-context';

import TableModal from '../TableModal';

// Import React Table
import ReactTable from 'react-table';

const makeDefaultState = () => ({
	sorted: [],
	page: 0,
	pageSize: 5,
	expanded: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
	resized: []
	// filtered: []
});

const Table = () => {
	const table = useRef();
	// console.log('TEST');
	const [state, setState] = useState(makeDefaultState());
	const [selectAll, setSelectAll] = useState(false);
	const [selection, setSelection] = useState([]);
	const [sortDesc, setSortDesc] = useState({});
	const [selectedData, setSelectedData] = useState([]);

	const [active, setActive] = useState(false);
	const handleModal = () => {
		let selected = {};
		// console.log('selected : ', selection);
		if (selection.length > 0) {
			selected = selection.map(el =>
				data.filter(item => {
					return item.id === el;
				})
			);
			// const selected = data.map(el => {
			// 	return selection.includes(el.id);
			// });

			// console.log('modal button TEST :', selected);
			setSelectedData(selected);
		} else {
			return false;
		}
		console.log('clicked button', selectedData);
		setActive(true);
	};
	const handleResetModal = () => {
		toggleAll();
	};

	const toggleSelection = (key, shift, row) => {
		// console.log('toggleSelection : ', key, shift, row);
		/*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
		// start off with the existing state
		let selectionA = [...selection];
		const keyIndex = selectionA.indexOf(key);
		// check to see if the key exists
		if (keyIndex >= 0) {
			// it does exist so we will remove it using destructing
			selectionA = [
				...selection.slice(0, keyIndex),
				...selection.slice(keyIndex + 1)
			];
		} else {
			// it does not exist so add it
			selectionA.push(+key);
		}
		// update the state
		setSelection(selectionA);
	};

	const toggleAll = () => {
		/*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
      
      The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
      
      So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
      
      The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
      ReactTable and then get the internal state and the 'sortedData'. 
      That can then be iterrated to get all the currently visible records and set
      the selection state.
    */
		const selectall = selectAll ? false : true;
		const selection = [];
		if (selectall) {
			// we need to get at the internals of ReactTable
			const wrappedInstance = table.current;
			// the 'data' property contains the currently accessible records based on the filter and sort
			const currentRecords = wrappedInstance.props.data;
			// we just push all the IDs onto the selection array
			currentRecords.forEach(item => {
				selection.push(item.id);
			});
		}
		setSelectAll(selectall);
		setSelection(selection);
		// disabledFunc();
	};

	const isSelected = key => {
		/*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
		return selection.includes(key);
	};

	const sortFunction = e => {
		setSortDesc({ [e[0].id]: e[0].desc });
	};
	// const disabledFunc = () => {
	// 	return selectedData.length === 0;
	// };

	useEffect(() => {
		console.log('selection : ', selection);
	}, [selection]);
	return (
		<div className='main-page'>
			<div className='grid'>
				<Button
					variant='outline-secondary'
					onClick={handleModal}
					disabled={selection.length === 0}>
					Open
				</Button>
				<Button
					variant='outline-secondary'
					onClick={handleResetModal}
					disabled={selection.length === 0}>
					Clear All
				</Button>
			</div>
			<TableModal
				title='selected data'
				content={selectedData}
				active={active}
				onDismiss={() => setActive(false)}
			/>
			<span className='heading'>Incidents</span>
			<ReactTable
				ref={table}
				data={data}
				onSortedChange={e => {
					sortFunction(e);
				}}
				columns={[
					{
						Header: rowInfo => {
							return (
								<div onClick={toggleAll}>
									<span>Select</span>
								</div>
							);
						},
						sortable: false,
						width: 100,
						style: {
							textAlign: 'center'
						},
						className: '-cursor-pointer',
						Cell: cell => {
							return (
								<>
									<input
										id={!!cell.original && cell.original.id}
										type='checkbox'
										checked={
											isSelected(!!cell.original && cell.original.id) &&
											selection.includes(!!cell.original && cell.original.id)
										}
										onClick={e => {
											const { shiftKey } = e;
											e.stopPropagation();
											toggleSelection(
												!!cell.original && cell.original.id,
												shiftKey,
												cell
											);
										}}
										onChange={() => {}}
									/>
								</>
							);
						}
					},
					{
						accessor: 'name',
						Aggregated: row => {
							return <span>{row.value}</span>;
						},
						width: 150,
						Header: rowInfo => {
							// console.log('SORT : ', rowInfo, sortDesc);
							return (
								<>
									<span>Name</span>
									<DownArrowSVG
										className={`icon down --arrow ${
											sortDesc['name'] ? 'active' : ''
										}`}
									/>

									<UpArrowSVG
										className={`icon up --arrow ${
											sortDesc['name'] ? '' : 'active'
										}`}
									/>
								</>
							);
						}
					},
					{
						id: 'postId',
						sortable: false,
						className: 'group',
						accessor: d => d.postId,
						width: 170,
						Expander: ({ isExpanded, ...rest }) => {
							return <div>{isExpanded ? <span /> : <span />}</div>;
						},
						PivotValue: row => <span className='test'>{row.value}</span>
					},

					{
						// Header: 'Age',
						accessor: 'email',
						Aggregated: row => {
							return <span>{row.value}</span>;
						},
						Header: rowInfo => {
							return (
								<>
									<span>Email</span>

									<DownArrowSVG
										className={`icon down --arrow ${
											sortDesc['email'] ? 'active' : ''
										}`}
									/>

									<UpArrowSVG
										className={`icon up --arrow ${
											sortDesc['email'] ? '' : 'active'
										}`}
									/>
								</>
							);
						}
					}
				]}
				showPagination={false}
				pivotBy={['postId']}
				// filterable
				defaultPageSize={10}
				className='react-table'
				// Controlled props
				resizable={false}
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
