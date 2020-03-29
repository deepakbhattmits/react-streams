/** @format */

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamForm = props => {
	// console.log('test :>', props);
	const renderError = ({ touched, error }) => {
		if (touched && error) {
			return (
				<div className='ui error message'>
					<div className='header'>{error}</div>
				</div>
			);
		}
	};

	const renderInput = ({ input, label, meta }) => {
		return (
			<div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
				<label>{label}</label>
				<input {...input} autoComplete='off' />
				{renderError(meta)}
			</div>
		);
	};
	const onSubmit = formValues => {
		props.onSubmit(formValues);
	};
	return (
		<>
			<form onSubmit={props.handleSubmit(onSubmit)} className='ui form error '>
				<div className='two fields'>
					<div className='field'>
						<Field name='title' component={renderInput} label='Enter Title ' />
					</div>
					<div className='field'>
						<Field
							name='description'
							component={renderInput}
							label='Enter Description '
						/>
					</div>
				</div>
				<button className='ui primary button'>Submit</button>
			</form>
		</>
	);
};
const validate = formValues => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'Must Enter Title';
		//execute if formavalues did not have value
	}
	if (!formValues.description) {
		errors.description = 'Must Enter Description';
	}
	return errors;
};
export default reduxForm({
	form: 'streamFrom',
	validate
})(StreamForm);
