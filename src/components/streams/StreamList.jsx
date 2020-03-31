/** @format */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

const StreamList = () => {
	const dispatch = useDispatch();
	const currentUserId = useSelector(state => state.auth.userId);
	const isSignedIn = useSelector(state => state.auth.isSignedIn);
	const streams = useSelector(state => Object.values(state.streams));

	useEffect(() => {
		dispatch(fetchStreams());
	}, [dispatch]);

	const renderAdmin = stream => {
		if (stream.userId === currentUserId) {
			return (
				<div className='right floated content'>
					<Link
						className='ui button primary'
						to={`/streams/edit/${stream._id}`}>
						EDIT
					</Link>
					<Link
						className='ui button negative'
						to={`/streams/delete/${stream._id}`}>
						DELETE
					</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		return streams.map(stream => {
			console.log('renderList  : ', stream);
			if (!stream.stream) {
				return (
					<div className='item' key={stream._id}>
						{renderAdmin(stream)}
						<i className='large middle aligned icon camera'></i>
						<div className='content'>
							<div className='header'>
								<Link to={`/streams/show/${stream._id}`}>{stream.title}</Link>
							</div>
							<div className='description'>{stream.description}</div>
						</div>
					</div>
				);
			}
		});
	};
	return (
		<div>
			<h2>Streams</h2>
			<div className='ui celled list'>{renderList()}</div>
		</div>
	);
};

// const mapStateToProps = state => {
// 	return {
// 		currentUserId: state.auth.userId,
// 		isSignedIn: state.auth.isSignedIn,
// 		streams: Object.values(state.streams)
// 	};
// };

// export default connect(mapStateToProps, { fetchStreams })(StreamList);

export default StreamList;
