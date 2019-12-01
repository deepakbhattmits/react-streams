import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'


import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg'
import DatePicker from "react-datepicker"
// import { Dropdown, Button } from 'react-bootstrap'
const Header = () => {
    const datePicker = useRef();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const onChange = value => {
        setSelectedDate(value)
    }
    const onChangeSVG = () => {
        // console.log('test : ', datePicker.current)
        datePicker.current.handleFocus();
    }
    return (
        <div className="ui secondary menu pointing">
            <Link to='/' className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to='' className="item">All Stream</Link>
                <div className='dropdown'>

                </div>
                <GoogleAuth />
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
export default Header;