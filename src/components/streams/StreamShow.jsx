/** @format */

import React, { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import flv from 'flv.js';

import { fetchStream } from '../../actions';
const StreamShow = props => {
	const { id } = useParams();
	const stream = useSelector(state => state.streams[id]);
	console.log('test');
	const videoRef = useRef(null);
	// const { id } = props.match.params;
	// const { stream } = props;
	const buildPlayer = useCallback(() => {
		const player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`
		});
		if (player || !stream) {
			return;
		}
		player.attachMediaElement(videoRef.current);
		player.load();
	}, [id, stream]);
	useEffect(() => {
		props.fetchStream(id);
		buildPlayer();
	}, [props, id, buildPlayer]);
	const { title, description } = stream;
	if (!stream) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<video ref={videoRef} style={{ width: '100%' }} controls />

			<h1>{title}</h1>

			<h2>{description}</h2>
		</div>
	);
};
const mapDispatchToProps = dispatch => ({
	fetchStream: data => dispatch(fetchStream(data))
});
// const mapStateToProps = (state, ownProps) => {
// 	return { stream: state.streams[ownProps.match.params.id] };
// };
export default connect(null, mapDispatchToProps)(StreamShow);
