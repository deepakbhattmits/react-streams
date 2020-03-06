/** @format */
import React, { useState, useCallback, useEffect } from 'react';
import FilterBar from './reusable/FilterBar';

const Analyst = () => {
	console.log('TEST');
	const [disable, setDisable] = useState(false);
	const [filters, setFilters] = useState();
	// determine whether to check filters or not
	const [withFilters, setWithFilters] = useState(false);
	const data = [
		{
			geo: 'elk',
			name: 'elk',
			group: 'geo',
			avail: 10,
			call: 10,
			chat: 5,
			'inc.': 12,
			rest: 2,
			'train.': 0,
			others: 0
		},
		{
			geo: 'mesa',
			name: 'mesa',
			group: 'geo',
			avail: 1,
			call: 10,
			chat: 10,
			'inc.': 5,
			rest: 5,
			'train.': 5,
			others: 2
		},
		{
			geo: 'cork',
			name: 'cork',
			group: 'geo',
			avail: 10,
			call: 10,
			chat: 10,
			'inc.': 5,
			rest: 5,
			'train.': 5,
			others: 2
		},
		{
			geo: 'sing',
			name: 'sing',
			group: 'geo',

			avail: 10,
			call: 10,
			chat: 10,
			'inc.': 5,
			rest: 5,
			'train.': 5,
			others: 2
		}
	];
	let results = {
		avail: 0,
		call: 0,
		chat: 0,
		inc: 0,
		rest: 0,
		train: 0,
		others: 0
	};

	/**
	 * @param  {Object}  item   An item object from the teams table
	 *
	 * @return {Boolean} true if the item matches the filters, false if not
	 */
	const applyFilters = useCallback(
		item => {
			const filterGeo = item =>
				filters.geo.length === 0 || filters.geo.includes(item.geo);
			return filterGeo(item);
		},
		[filters]
	);

	const returnFilters = useCallback(values => {
		setWithFilters(!!values.length);

		const groupedFilters = values.reduce(
			(acc, filter) => {
				if (filter.group === 'geo') {
					return { ...acc, geo: [...acc.geo, filter.name] };
				} else {
					return acc;
				}
			},
			{ geo: [] }
		);

		setFilters(groupedFilters);
	}, []);
	const renderHeader = () => {
		return Object.keys(data[0]).map((el, i) => {
			return el === 'geo' || el === 'name' || el === 'group' ? null : (
				<span key={i} className='header-item'>
					{el}
				</span>
			);
		});
	};

	const renderList = () => {
		let newData = data
			.filter(item => (withFilters ? applyFilters(item) : true))
			.map(el => {
				results = {
					...results,
					avail: results['avail'] + el.avail,
					chat: results['chat'] + el.chat,
					call: results['call'] + el.call,
					inc: results['inc'] + el['inc.'],
					rest: results['rest'] + el.rest,
					train: results['train'] + el['train.'],
					others: results['others'] + el.others
				};
				return results;
			});
		return newData.slice(-1).map((el, i) => {
			return (
				<div className='header-list' key={i}>
					<span className={`list ${el['avail'] <= 5 ? 'med' : 'high'}`}>
						{el['avail']}
					</span>
					<span className={`list ${el['chat'] <= 5 ? 'med' : 'high'}`}>
						{el['chat']}
					</span>
					<span className={`list ${el['call'] <= 5 ? 'med' : 'high'}`}>
						{el['call']}
					</span>
					<span className={`list ${el['inc'] <= 5 ? 'med' : 'high'}`}>
						{el['inc']}
					</span>
					<span className={`list ${el['rest'] <= 5 ? 'med' : 'high'}`}>
						{el['rest']}
					</span>
					<span className={`list ${el['train'] <= 5 ? 'med' : 'high'}`}>
						{el['train']}
					</span>
					<span className={`list ${el['others'] <= 5 ? 'med' : 'high'}`}>
						{el['others']}
					</span>
				</div>
			);
		});
	};
	// useEffect(() => {
	//   console.log('0 ANALYST : ', filters, disable);
	//   if (filters.geo.length === 1) {
	//     setDisable(true);
	//   }
	//   console.log('1 ANALYST : ', filters, disable);
	// }, [filters]);
	return (
		<div className='sb-widget sb-widget-analysts'>
			<div className='tab-content'>
				<div>
					<div className='header-container'>
						<h2 className='widget-title'>analyst</h2>
						<FilterBar
							geo={filters}
							items={[
								{ name: 'elk', group: 'geo' },
								{ name: 'mesa', group: 'geo' },
								{ name: 'cork', group: 'geo' },
								{ name: 'sing', group: 'geo' }
							]}
							defaultFilter={{ name: 'elk', group: 'geo' }}
							returnFilters={returnFilters}
							disabled={disable}
						/>
					</div>
				</div>

				<div>
					<div className='header-list'>{renderHeader()}</div>
				</div>
				<div>{renderList()}</div>
			</div>
		</div>
	);
};
export default Analyst;
