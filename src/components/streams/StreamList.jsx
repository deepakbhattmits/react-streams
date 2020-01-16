/** @format */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as UpSVG } from '../../assets/images/icon-up-arrow.svg';
import { ReactComponent as DownSVG } from '../../assets/images/icon-down-arrow.svg';
import { fetchStreams } from '../../actions';

const StreamList = props => {
	// console.log('test : >', props);
	const [scroll, setScroll] = useState(true);
	const renderButton = list => {
		if (list.userId === props.currentUserId) {
			return (
				<div className='right floated content'>
					<Link to={`/streams/edit/${list.id}`} className='btn btn-primary'>
						Edit
					</Link>
					<Link to={`/streams/delete/${list.id}`} className='btn btn-danger'>
						Delete
					</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		return props.streams.map(list => {
			return (
				<div className='item' key={list.id}>
					{renderButton(list)}

					<i className='large middle aligned icon camera' />

					<div className='content'>
						<Link to={`/streams/show/${list.id}`}>
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
			'TEST ',
			topVisible,
			windowHeight,
			coords,
			'scrolltop : ',
			elem
		);
		console.log('test element visible : ', coords);
		setScroll(false);
		if (coords.top >= 54) {
			setScroll(true);
		}
	};
	const handleScroll = e => {
		console.log(
			'scrollTop :',
			e.target.scrollTop,
			'offsetHeight : ',
			e.target.offsetHeight,
			'scrollHeight : ',
			e.target.scrollHeight
		);
		if (e.target.scrollTop === 0) {
			setScroll(true);
		} else if (
			e.target.offsetHeight + e.target.scrollTop <=
			e.target.scrollHeight
		) {
			setScroll(true);
		} else if (
			e.target.offsetHeight + e.target.scrollTop ===
			e.target.scrollHeight
		) {
			setScroll(false);
		} else {
			setScroll(false);
		}
	};
	useEffect(() => {
		if (!props.streams.length) {
			props.fetchStreams();
		}
		document.addEventListener('scroll', trackScrolling);
		return () => {
			document.removeEventListener('scroll', trackScrolling);
		};
	}, [props]);

	return (
		<div id='divScroll' className='listPage' onScroll={handleScroll}>
			<div className={`heading  ${!scroll ? 'scrolled' : ''}`}>
				<div className={`heading`}>
					<label className='custom'>Streams</label>
				</div>
			</div>
			{scroll ? null : <UpSVG className='icon icon--up' />}
			<div className='ui celled list'>{renderList()}</div>
			{scroll ? <DownSVG className='icon icon--down' /> : null}
		</div>
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
