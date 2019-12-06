import React from 'react';
import { connect } from 'react-redux';
import SteramForm from './StreamForm';
import { createStream } from '../../actions';
const StreamCreate = props => {

    const onSubmit = formValues => {

        props.createStream(formValues);
    }

    return (
        <div>
            <h3>Create Form </h3>
            <SteramForm onSubmit={onSubmit} />
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    createStream: (data) => dispatch(createStream(data))
})
export default connect(null, mapDispatchToProps)(StreamCreate);