/** @format */

import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
const StreamEdit = props => {
	const { id } = props.match.params;
	const { fetchStream } = props;

	console.log('the fetchStream:', fetchStream);
	useEffect(() => {
		fetchStream(id);
	}, [id, fetchStream]);
	const onSubmit = formValues => {
		props.editStream(id, formValues);
	};
	if (!props.stream) {
		return <div>Loading ..</div>;
	}
	return (
		<div>
			<h3>Edit Form </h3>
			<StreamForm
				initialValues={_.pick(props.stream, 'title', 'description')}
				onSubmit={onSubmit}
			/>
		</div>
	);
};
const mapDispatchToProps = disatch => ({
	fetchStream: data => disatch(fetchStream(data)),
	editStream: (data, id) => disatch(editStream(data, id))
});
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
