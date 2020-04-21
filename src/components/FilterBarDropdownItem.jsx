/** @format */

import React from 'react';

const FilterBarDropdownItem = ({ item, filters, toggleFilter }) => (
	<li
		className={`demo FilterBarDropdownItem filter-bar__item${
			!!filters.find((filter) => filter.name === item.name)
				? ` filter-bar__dropdown--selected`
				: ''
		}`}
		onClick={() => toggleFilter(item)}>
		{item.name}
	</li>
);

export default FilterBarDropdownItem;
