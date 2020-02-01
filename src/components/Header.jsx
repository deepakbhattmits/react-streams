/** @format */

import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';
import appContext from '../context/app-context';
import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg';
import DatePicker from 'react-datepicker';
import { Dropdown, Button } from 'react-bootstrap';
const Header = props => {
	const context = useContext(appContext);
	console.log('test SEARCH :> ', context);
	const datePicker = useRef();
	const [search, setSearch] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [value, setValue] = useState('--Select--');
	const [display, setDisplay] = useState(false);
	const onChange = value => {
		setSelectedDate(value);
	};
	const handleChange = e => {
		const { value } = e.target;
		setSearch(value);
		console.log('SEARCH HANDLECHANGE ', value, context.products);
		context.seacrhProduct(value, context.products);
	};
	const onChangeSVG = () => {
		datePicker.current.handleFocus();
	};
	const handleDropdown = e => {
		const { innerText } = e.target;
		setValue(innerText);
	};
	const trackScrolling = e => {
		let windowPageYOffset = window.pageYOffset;
		// console.log('FOR HEADER : ', windowPageYOffset);
		// const elem = document.getElementById('scroll');
		// let coords = elem.getBoundingClientRect();
		// let windowHeight = document.documentElement.clientHeight;
		// let topVisible = coords.top > 0 && coords.top < windowHeight;
		// console.log('TEST :');
		// console.log('TEST :',topVisible, windowHeight, coords)
		if (windowPageYOffset > 2) {
			setDisplay(true);
		} else {
			setDisplay(false);
		}
	};
	const renderCreateButton = () => {
		if (props.isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link className='btn btn-primary' to='/streams/new'>
						Create Stream
					</Link>
				</div>
			);
		}
	};
	useEffect(() => {
		document.addEventListener('scroll', trackScrolling);
		return () => {
			document.removeEventListener('scroll', trackScrolling);
		};
	}, []);
	return (
		<div
			id='scroll'
			className={`ui secondary menu pointing ${display ? 'fixed' : ''}`}>
			<Link to='/' className='item'>
				Streamer
			</Link>
			<div className='right menu'>
				<Link to='' className='item'>
					All Stream
				</Link>
				<Link to='/streams/slider' className='item'>
					Slider
				</Link>
				<Link to='/streams/table' className='item'>
					Table
				</Link>
				<Link to='/streams/stack' className='item'>
					stack
				</Link>
				<Link to='/streams/multiheader' className='item'>
					MultiHeader
				</Link>
				<GoogleAuth />
				{renderCreateButton()}
				<div className='dropdown'>
					<Dropdown>
						<Button variant='outline-secondary' className='button --label'>
							{value}
						</Button>

						<Dropdown.Toggle
							className='button --arrow'
							split
							variant='outline-secondary'
						/>

						<Dropdown.Menu>
							{['a', 'b', 'c', 'd', 'e', 'f'].map((el, i) => {
								return (
									<Dropdown.Item key={i} onClick={handleDropdown}>
										{el}
									</Dropdown.Item>
								);
							})}
							{/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className='datepicker'>
					<DatePicker
						ref={datePicker}
						onChange={onChange}
						selected={selectedDate} // display the current date
						// placeholderText="DD-MM-YYYY" // displayed only when selected is not there
						dateFormat='dd-MM-yyyy' // if you want to make some changes with format then use this attribute by default value displayed like MM/DD/YYYY
					/>
					<CalenderSVG className='icon icon--calender' onClick={onChangeSVG} />
				</div>
				<div className='search-wrapper'>
					<input
						name='search'
						onChange={handleChange}
						value={search}
						placeholder='Please Enter term'
					/>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};
export default connect(mapStateToProps, null)(Header);
