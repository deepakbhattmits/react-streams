/** @format */

import { useState, useEffect /*, useContext*/ } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";
// import appContext from '../context/app-context';
// import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg';
// import DatePicker from 'react-datepicker';
//   import { Dropdown, Button } from 'react-bootstrap';
const Header = (props) => {
  // const context = useContext(appContext);
  // console.log('Header test SEARCH > :', context);
  // const datePicker = useRef();
  // const [search, setSearch] = useState('');
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [value, setValue] = useState('--Select--');
  const [display, setDisplay] = useState(false);
  // const onChange = value => {
  // 	setSelectedDate(value);
  // };
  // const handleChange = e => {
  // 	const { value } = e.target;
  // 	setSearch(value);
  // 	console.log('SEARCH HANDLECHANGE >: ', value, context.products);
  // 	context.seacrhProduct(value, context.products);
  // };
  // const onChangeSVG = () => {
  // 	datePicker.current.handleFocus();
  // };
  // const handleDropdown = e => {
  // 	const { innerText } = e.target;
  // 	setValue(innerText);
  // };
  const trackScrolling = (e) => {
    let windowPageYOffset = window.pageYOffset;
    // console.log('FOR HEADER : ', windowPageYOffset);
    // const elem = document.getElementById('scroll');
    // let coords = elem.getBoundingClientRect();
    // let windowHeight = document.documentElement.clientHeight;
    // let topVisible = coords.top > 0 && coords.top < windowHeight;
    // console.log('TEST >');
    // console.log('TEST >',topVisible, windowHeight, coords)
    if (windowPageYOffset > 2) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  const renderCreateButton = () => {
    if (props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link className="btn btn-primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, []);
  return (
    <div
      id="scroll"
      className={`ui secondary menu pointing ${display ? "fixed" : ""}`}
    >
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Stream
        </Link>
        <Link to="/streams/slider" className="item">
          Slider
        </Link>
        <Link to="/streams/ratings" className="item">
          Ratings
        </Link>
        <Link to="/game" className="item">
          Game
        </Link>
        <Link to="/streams/datatable" className="item">
          DataTable
        </Link>

        <Link to="/streams/stack" className="item">
          stack
        </Link>
        {/* <Link to='/streams/calendar' className='item'>
					Calendar
				</Link> */}

        <GoogleAuth />
        {renderCreateButton()}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, null)(Header);
