import React, { useState, useRef } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import GridLayout from 'react-grid-layout';
import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg'
import DatePicker from "react-datepicker";
import createBrowserHistory from '../history';
const App = () => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 4, h: 4, minW: 2, maxW: 4, minH: 3, maxH: 4, isDraggable: false },
        { i: 'b', x: 1, y: 1, w: 3, h: 2, minW: 2, maxW: 4, static: true, isDraggable: true },
        { i: 'c', x: 4, y: 1, w: 1, h: 2, static: true, isDraggable: false }
    ];
    const [selectedDate, setSelectedDate] = useState(new Date());
    const datePicker = useRef();
    const onChange = value => {
        setSelectedDate(value)
    }
    const onChangeSVG = () => {
        datePicker.current.handleFocus();
    }
    return (
        <div className="ui container">
            <Router history={createBrowserHistory}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList}></Route>
                        <Route path="/streams/new" exact component={StreamCreate}></Route>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
                        <Route path="/streams/show/:id" exact component={StreamShow}></Route>
                    </Switch>
                </div>
                <div className="grid">
                    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                        <div key="a">a
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
                        <div key="b">b</div>
                        <div key="c">c</div>
                    </GridLayout>
                </div>
            </Router>
        </div>
    );
}
export default App;