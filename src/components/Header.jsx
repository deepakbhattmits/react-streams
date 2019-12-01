import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'



import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg'
import DatePicker from "react-datepicker"
import { Dropdown, Button } from 'react-bootstrap'
const Header = () => {
    const datePicker = useRef();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [value, setValue] = useState('--Select--');
    const onChange = value => {
        setSelectedDate(value)
    }
    const onChangeSVG = () => {
        // console.log('test : ', datePicker.current)
        datePicker.current.handleFocus();
    }
    const handleDropdown = e => {
        const { innerText } = e.target;
        console.log(innerText)
        setValue(innerText)
    }
    return (
        <div className="ui secondary menu pointing">
            <Link to='/' className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to='' className="item">All Stream</Link>
                <GoogleAuth />
                <div className='dropdown'>
                    <Dropdown>
                        <Button variant="outline-success" className='button --label' >{value}</Button>

                        <Dropdown.Toggle className='button --arrow' split variant="outline-success" />

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
export default Header;