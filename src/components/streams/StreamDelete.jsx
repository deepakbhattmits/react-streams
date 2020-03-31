/** @format */

import React, { useEffect } from 'react';
import Modal from '../Modal';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import createBrowserHistory from '../../history';
const StreamDelete = props => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const stream = useSelector(state => state.streams[id]);
	const { fetchStream } = props;
	console.log('fetchStream : ', fetchStream);
	useEffect(() => {
		if (!id.length) {
			fetchStream(id);
		}
	}, [id, fetchStream]);
	const renderActions = () => {
		// const { id } = props.match.params;
		return (
			<>
				<button
					onClick={() => {
						dispatch(deleteStream(id));
					}}
					className='ui button negative'>
					Delete !
				</button>
				<Link to='/' className='ui button'>
					cancel
				</Link>
			</>
		);
	};
	const renderContent = () => {
		if (!stream) {
			return 'Loading ...';
		}
		return `Are you sure you want to delete this stream ? ${stream.title} `;
	};
	return (
		<Modal
			title='Delete Stream'
			content={renderContent()}
			actions={renderActions()}
			onDismiss={() => createBrowserHistory.push('/')}
		/>
	);
};
// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		stream: state.streams[ownProps.match.params.id]
// 	};
// };
export default connect(null, { fetchStream, deleteStream })(StreamDelete);
