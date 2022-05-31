/** @format */

import  { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
const FormComponent = () => {
	// console.log(' FormComponent :  >  ');
	const [data, setData] = useState({ data: {} });
	const [errors, setErrors] = useState({});
	const validation = () => {
		let formValid = true;
		let errors = {};
		// console.log('validation  :> ', data);
		if (!data['FirstName']) {
			formValid = false;
			errors['FirstName'] = 'Please Enter First Name';
		}
		if (!data['LastName']) {
			formValid = false;
			errors['LastName'] = 'Please Enter Last Name';
		}
		if (!data['Phone']) {
			formValid = false;
			errors['Phone'] = 'Please Enter Phone';
		}
		if (!data['Address']) {
			formValid = false;
			errors['Address'] = 'Please Enter Address';
		}
		if (!data['City']) {
			formValid = false;
			errors['City'] = 'Please Enter City';
		}
		if (!data['Zip']) {
			formValid = false;
			errors['Zip'] = 'Please Enter Zip';
		}
		setErrors(errors);
		return formValid;
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
		console.log(data, Object.keys(data).length);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validation()) {
			console.log('done : ', data, errors.FirstName);
		}
	};
	// useEffect(() => {
	//   let length = data.length;
	//   if (length) {
	//     validation();
	//   }
	// }, [data]);

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Email</Form.Label>
						<Form.Control
							name='FirstName'
							type='text'
							value={data.FirstName ? data.FirstName : ''}
							onChange={handleChange}
							placeholder='first name'
						/>
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Label>Password</Form.Label>
						<Form.Control
							name='LastName'
							type='text'
							value={data.LastName ? data.LastName : ''}
							onChange={handleChange}
							placeholder='last name'
						/>
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.Label>Address</Form.Label>
					<Form.Control
						name='Address'
						type='text'
						value={data.Address ? data.Address : ''}
						onChange={handleChange}
						placeholder='Address'
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Address 2</Form.Label>
					<Form.Control
						name='Phone'
						type='text'
						value={data.Phone ? data.Phone : ''}
						onChange={handleChange}
						placeholder='+91-9898989898'
					/>
				</Form.Group>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>City</Form.Label>
						<Form.Control
							name='City'
							type='text'
							value={data.City ? data.City : ''}
							onChange={handleChange}
							placeholder='eg. BLR'
						/>
					</Form.Group>

					{/* //new <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control as='select'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group> */}

					<Form.Group as={Col}>
						<Form.Label>Zip</Form.Label>
						<Form.Control
							name='Zip'
							type='text'
							value={data.Zip ? data.Zip : ''}
							onChange={handleChange}
							placeholder='eg. 1234...'
						/>
					</Form.Group>
				</Form.Row>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
				<ul className='error'>
					{Object.values(errors).map((el, i) => {
						return (
							<li key={i} className='list-item'>
								{el}
							</li>
						);
					})}
				</ul>
			</Form>
		</>
	);
};
export default FormComponent;
