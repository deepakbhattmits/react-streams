import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        // console.log( meta )
        //const className = `field ${meta.error && meta.touched ? 'error' : '' }`; // string interpolation
        return (
            <div className={`field ${meta.error && meta.touched ? 'error' : ''}`} >
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>


        );
    }
    onSubmit = (formValues) => {

        this.props.onSubmit(formValues);
        //  console.log(formValues);
    }
    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div className="two fields">
                    <div className="field">
                        <Field name="title" component={this.renderInput} label="Enter Title " />
                    </div>
                    <div className="field">
                        <Field name="description" component={this.renderInput} label="Enter Description " />
                    </div>
                </div>
                <button className="ui primary button">Submit</button>
            </form>
        );
    }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Must Enter Title';
        //ran if formavalues did not have value
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
