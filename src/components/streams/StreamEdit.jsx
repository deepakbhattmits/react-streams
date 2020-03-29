/** @format */

import _ from 'lodash';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = props => {
	const { id } = useParams();
	const stream = useSelector(state => state.streams[id]);
	useEffect(() => {
		props.fetchStream(id);
	}, []);

	const onSubmit = formValues => {
		props.editStream(id, formValues);
	};
	if (!stream) return <div>Loading...</div>;
	return (
		<div>
			<h3>Edit a stream</h3>
			<StreamForm
				initialValues={_.pick(stream, 'title', 'description')}
				onSubmit={onSubmit}
			/>
		</div>
	);
};

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		stream: state.streams[ownProps.match.params.id]
// 	};
// };

export default connect(null, { fetchStream, editStream })(StreamEdit);
