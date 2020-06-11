/** @format */

import React, { useState, useEffect } from 'react';
import FilterBarItem from './FilterBarItem';

/**
 * @prop {Array}     items           Objects that must have a name property to use in the FilterBarItem
 * @prop {Function}  returnFilters   Callback Function for giving the compiled filters back to parent component.
                                     NOTE: Make sure parent component uses `useCallback` hook.
 * @prop {Boolean}   multiple        Determines whether multiple filters can be applied at the same time or not. Default is true.
 * @prop {Array}    defaultFilter   If a filter should be selected by default
 * @prop {Boolean}   canDeselect     Whether the filter bar can have no filters active at all.
 */
const FilterBar = ({
	items = [],
	returnFilters,
	multiple = true,
	defaultFilter,
	canDeselect = true, // can have no filters applied
}) => {
	// source of truth :
	const [filters, setFilters] = useState(!!defaultFilter ? defaultFilter : []);

	// handle whether to add/remove a filter
	const toggleFilter = (item) => {
		// console.log('FILTER  :> ', item);
		// this FilterBar should allow multiple selections
		if (
			!canDeselect &&
			filters.length === 1 &&
			!!filters.find((filter) => filter.name === item.name)
		) {
			return false;
		} else {
			if (multiple) {
				if (!!filters.find((filter) => filter.name === item.name)) {
					setFilters(filters.filter((filter) => filter.name !== item.name));
				} else {
					setFilters([...filters, item]);
				}
			} else if (!canDeselect) {
				setFilters([item]);
			} else {
				// this filter bar should handle only one selection at a time
				if (filters.find((value) => value.name === item.name)) {
					setFilters([]);
				} else {
					setFilters([item]);
				}
			}
		}
	};

	// FilterBar just keeps track of the filters that have been selected. It's up to the parent Component to determine what to do with them
	// This will give the parent Component back an array of filters
	// NOTE: Make sure the parent component uses a `useCallback` hook!!
	useEffect(() => {
		returnFilters(filters);
		// eslint-disable-next-line
	}, [filters]);

	return (
		<ul className='filter-bar'>
			{items.map((item) => (
				<FilterBarItem
					key={item.name}
					item={item}
					toggleFilter={toggleFilter}
					filters={filters}
				/>
			))}
		</ul>
	);
};

export default FilterBar;
