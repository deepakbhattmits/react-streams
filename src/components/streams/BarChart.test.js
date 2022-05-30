/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BarChart from './BarChart';
afterEach(cleanup);
it('renders', () => {
	const { getByTestId } = render(<BarChart />);
	// console.log('TEST   : >', getByTestId('canvas-container').children.length);
	expect(getByTestId('canvas-container').children.length).toBeTruthy();
});
