/** @format */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ScrollIndicator from '../../reusable/ScrollIndicator';
import { fetchStreams } from '../../actions';
const StreamList = props => {
	const [scroll, setScroll] = useState(false);
	const renderButton = list => {
		// console.log('render button :', list._id, props.currentUserId);
		if (list.id === props.currentUserId) {
			return (
				<div className='right floated content'>
					<Link to={`/streams/edit/${list._id}`} className='btn btn-primary'>
						Edit
					</Link>
					<Link to={`/streams/delete/${list._id}`} className='btn btn-danger'>
						Delete
					</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		// console.log('renderList : ', props.streams);
		return props.streams.map(list => {
			return (
				<div className='item' key={list._id}>
					{renderButton(list)}

					<i className='large middle aligned icon camera' />

					<div className='content'>
						<Link to={`/streams/show/${list._id}`}>
							{list.title}
							<div className='description'>{list.description}</div>
						</Link>
					</div>
				</div>
			);
		});
	};
	const trackScrolling = () => {
		const elem = document.getElementById('divScroll');
		let coords = elem.getBoundingClientRect();
		let windowHeight = document.documentElement.clientHeight;
		let topVisible = coords.top > 0 && coords.top < windowHeight;
		console.log(
			'TEST :',
			topVisible,
			windowHeight,
			coords,
			'scrolltop : ',
			elem
		);
		console.log('test element visible : ', coords, topVisible);
		setScroll(false);
		if (coords.top >= 54) {
			setScroll(true);
		}
	};

	useEffect(() => {
		if (!props.streams.length) {
			props.fetchStreams();
		}
		document.addEventListener('scroll', trackScrolling, true);
		return () => {
			document.removeEventListener('scroll', trackScrolling, true);
		};
	}, [props]);

	return (
		<ScrollIndicator id='divScroll' className='listPage'>
			{/* <div className={`heading  ${scroll ? 'scrolled' : ''}`}>
				<div className={`heading`}>
					<label className='custom'>Streams</label>
				</div>
			</div> */}
			<div className='ui celled list'>{renderList()}</div>
		</ScrollIndicator>
	);
};
const mapDispatchToProps = dispatch => ({
	fetchStreams: () => dispatch(fetchStreams())
});
const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
