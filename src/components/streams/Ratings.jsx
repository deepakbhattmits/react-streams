// /** @format */

// import React from 'react';
// import Form from 'react-bootstrap/Form';
// const Ratings = () => {
// 	const renderRadio = () => {
// 		let arrRadios = [0, 0.25, 0.5, 0.75, 1];
// 		const handleChange = (e) => {
// 			const { name, value } = e.target;
// 			//  console.log('  Ratings   :  > ', name, value);
// 		};
// 		return arrRadios.map((item, index) => {
// 			return (
// 				<Form.Check
// 					onChange={handleChange}
// 					key={index}
// 					type='radio'
// 					name='ticketConductor'
// 					value={item}
// 					htmlFor={item === 0 ? 'off' : item}
// 					id={item === 0 ? 'off' : item}
// 					label={item === 0 ? 'off' : `${item * 100}%`}
// 				/>
// 			);
// 		});
// 	};
// 	return (
// 		<>
// 			<Form className='radio-wrapper'>{renderRadio()}</Form>
// 		</>
// 	);
// };
const Ratings = () => <><h1>Ratings</h1></>;
export default Ratings;
