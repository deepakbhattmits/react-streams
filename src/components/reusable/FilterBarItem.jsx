/** @format */

import React from 'react';
import FilterBarDropdownItem from './FilterBarDropdownItem';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-chevron.svg';

const FilterBarItem = ({ item, toggleFilter, filters }) => {
	// console.log('FilterBarItem >');
	const determineParentClass = () =>
		!!item.children ? ' filter-bar__item--parent' : '';
	const determineSelectedClass = () =>
		!!filters.find((filter) => filter.name === item.name) ||
		(!!item.children &&
			filters.find((filter) =>
				item.children.find((child) => child.name === filter.name)
			))
			? ' filter-bar__item--selected'
			: '';

	return (
		<li
			className={`filter-bar__item${determineParentClass()}${determineSelectedClass()}`}
			onClick={(e) => {
				e.stopPropagation();
				if (!item.children) {
					toggleFilter(item);
				}
			}}>
			<label className='filter-bar__label'>{item.name || item}</label>
			{!!item.children && (
				<>
					<ul className='filter-bar__dropdown'>
						{item.children.map((child) => {
							return (
								// <FilterBarItem key={child.name} item={child} toggleFilter={toggleFilter} filters={filters} />
								<FilterBarDropdownItem
									key={child.name}
									item={child}
									toggleFilter={toggleFilter}
									filters={filters}
								/>
							);
						})}
					</ul>
					<DownArrowSVG className='icon up --arrow' />
				</>
			)}
		</li>
	);
};

export default FilterBarItem;
