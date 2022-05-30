// /** @format */
// import React, { useState } from 'react';
// //  CalComponent
// const CalComponent = () => {
// 	const [value, setValue] = useState(0);
// 	const inputs = [
// 		{ field: 'c' },
// 		{ field: 0 },
// 		{ field: 1 },
// 		{ field: 2 },
// 		{ field: 3 },
// 		{ field: 4 },
// 		{ field: 5 },
// 		{ field: 6 },
// 		{ field: 7 },
// 		{ field: 8 },
// 		{ field: 9 },
// 		{ field: '+' },
// 		{ field: '-' },
// 		{ field: '/' },
// 		{ field: '%' },
// 		{ field: '*' },
// 		{ field: '=' },
// 	];
// 	const handleClick = (e) => {
// 		const { textContent } = e.target;
// 		let val = value;
// 		let newVal = 0;
// 		var numbers = /^[0-9]+$/;
// 		if (textContent.match(numbers)) {
// 			newVal = +`${val}${textContent}`;
// 			setValue(newVal);
// 		} else {
// 			switch (textContent) {
// 				case '+':
// 					return (newVal = val + +textContent);
// 				case '-':
// 					return (newVal = val - +textContent);
// 				case '*':
// 					return (newVal = val * +textContent);
// 				case '/':
// 					return (newVal = val / +textContent);
// 				case '%':
//                     return (newVal = val % +textContent);
// 			}
// 		}

// 		// let newVal = +`${val}${textContent}`;
// 		// console.log('CalComponent :   >', newVal);
// 		// setValue(val);
// 	};
// 	const renderData = () => {
// 		// console.log('INPPUT    : ',inputs);
// 		return inputs.map((el, i) => {
// 			return (
// 				<div key={i} className='field' onClick={handleClick}>
// 					{el.field}
// 				</div>
// 			);
// 		});
// 	};
// 	const handleChange = (e) => {
// 		setValue(e.target.value);
// 	};
// 	return (
// 		<div className='main-wrapper'>
// 			<div className='screen'>
// 				<input
// 					type='text'
// 					className='input'
// 					value={value}
// 					onChange={handleChange}
// 				/>
// 			</div>
// 			<div className='inputs'>{renderData()}</div>
// 		</div>
// 	);
// };
const CalComponent = () => <h1>Cal Component</h1>;
export default CalComponent;
