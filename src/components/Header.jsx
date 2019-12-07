import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import { connect } from 'react-redux'
import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg'
import DatePicker from "react-datepicker"
import { Dropdown, Button } from 'react-bootstrap'
const Header = props => {
    const datePicker = useRef();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [value, setValue] = useState('--Select--');
    const [display, setDisplay] = useState(false);
    const onChange = value => {
        setSelectedDate(value)
    }
    const onChangeSVG = () => {
        //  console.log('test : ', datePicker.current)
        datePicker.current.handleFocus();
    }
    const handleDropdown = e => {
        const { innerText } = e.target;
        // console.log(innerText)
        setValue(innerText)
    }
    const trackScrolling = e => {
        let windowPageYOffset = window.pageYOffset;
        // console.log('HEADER : ', windowPageYOffset)
        // const elem = document.getElementById('scroll');
        // let coords = elem.getBoundingClientRect();
        // let windowHeight = document.documentElement.clientHeight;
        // let topVisible = coords.top > 0 && coords.top < windowHeight;
        // // console.log(topVisible, windowHeight, coords)
        if (windowPageYOffset > 2) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }
    const renderCreateButton = () => {
        if (props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className="btn btn-primary" to='/streams/new'>Create Stream</Link>
                </div>
            );
        }
    }
    useEffect(() => {

        document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling);
        }
    }, [])
    return (
        <div id='scroll' className={`ui secondary menu pointing ${display ? 'fixed' : ''}`}>
            <Link to='/' className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to='' className="item">All Stream</Link>

                <GoogleAuth />
                {renderCreateButton()}

                <div className='dropdown'>
                    <Dropdown>
                        <Button variant="outline-secondary" className='button --label' >{value}</Button>

                        <Dropdown.Toggle className='button --arrow' split variant="outline-secondary" />

                        <Dropdown.Menu >
                            {

                                ['a', 'b', 'c', 'd', 'e', 'f'].map((el, i) => {
                                    return (
                                        <Dropdown.Item key={i} onClick={handleDropdown}>{el}</Dropdown.Item>
                                    )
                                })
                            }
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
                        dateFormat="dd-MM-yyyy" // if you want to make some changes with format then use this attribute by default value displayed like MM/DD/YYYY

                    />
                    <CalenderSVG
                        className='icon icon--calender'
                        onClick={onChangeSVG}
                    />
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
}
export default connect(mapStateToProps, null)(Header);