/** @format */

import React, { useEffect } from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
const StreamEdit = props => {
	const { id } = useParams();
	const stream = useSelector(state => state.streams[id]);
	console.log('want edit : ', stream, id);
	// const { id } = props.match.params;
	const { fetchStream } = props;

	// console.log('the fetchStream:', fetchStream);
	useEffect(() => {
		fetchStream(id);
	}, [id, fetchStream]);
	const onSubmit = formValues => {
		console.log('EDIT FIELD', id, formValues);
		props.editStream(id, formValues);
	};
	if (!stream) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h3>Edit Form </h3>
			<StreamForm
				initialValues={_.pick(stream, 'title', 'description')}
				onSubmit={onSubmit}
			/>
		</div>
	);
};
const mapDispatchToProps = disatch => ({
	fetchStream: id => disatch(fetchStream(id)),
	editStream: (data, id) => disatch(editStream(data, id))
});
// const mapStateToProps = (state, ownProps) => {
// 	return { stream: state.streams[ownProps.match.params.id] };
// };
export default connect(null, mapDispatchToProps)(StreamEdit);
