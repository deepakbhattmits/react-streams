/** @format */

import React from 'react';
import {
	render,
	cleanup,
	fireEvent,
	waitForElement
} from '@testing-library/react';
import MultiHeader from './MultiHeader';
afterEach(cleanup);
// describe('render without error', () => {

// })
it('1 renders', () => {
	const { getByTestId } = render(<MultiHeader />);
	expect(getByTestId('actions').hasChildNodes.length).toBe(0);
});
it('2 renders', async () => {
	const { getByTestId } = render(<MultiHeader />);
	// console.log(
	// 	'TESTING : ',
	// 	// getByTestId('select'),
	// 	'before click : ',
	// 	getByTestId('actions').hasChildNodes.length
	// );
	fireEvent.click(getByTestId('select'));
	const actions = await waitForElement(() => getByTestId('actions'));
	console.log('after click TESTING : ', actions.hasChildNodes.length);
});
