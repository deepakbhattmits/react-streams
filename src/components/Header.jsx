import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
// import DatePicker from 'react-date-picker';
import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg'
const Header = () => {
    // const [date, setDate] = useState(new Date());
    // const onChange = date => {
    //     setDate(date)
    // };
    return (
        <div className="ui secondary menu pointing">
            <Link to='/' className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to='' className="item">All Stream</Link>
                <GoogleAuth />
                {/* <input
                    className='ui input'
                    type='test'
                    value={date.toISOString().split(/[0-9]{1}[A-Z]{1}/)}
                /> */}
                <div className='datepicker'>
                    <CalenderSVG
                        className='icon icon--calender'
                    />
                    {/* <DatePicker
                        onChange={onChange}
                        value={date}
                    /> */}
                </div>




            </div>

        </div>
    );
};
export default Header;