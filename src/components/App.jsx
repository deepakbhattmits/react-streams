import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import createBrowserHistory from '../history';
import SliderComponent from './streams/SliderComponent';
import GridLayoutComponent from './streams/GridLayoutComponent';
import ChartCompoent from '../components/streams/ChartComponent'
const App = () => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 5, h: 5 },
        { i: 'b', x: 1, y: 1, w: 5, h: 5 },
        { i: 'c', x: 4, y: 1, w: 5, h: 5 }
    ];
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
                <div className='chart'>
                    <ChartCompoent />
                </div>
                <div className='caousel'>
                    <SliderComponent />
                </div>
                <div className="grid">
                    <GridLayoutComponent layout={layout} />
                </div>
            </Router>
        </div>
    );
}
export default App;