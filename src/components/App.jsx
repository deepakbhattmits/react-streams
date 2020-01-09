/** @format */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import Layout from '../layout/Layout';
import GlobalState from '../context/GlobalState';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import CustomTable from './streams/CustomTable';
import CustomHorizontalBar from './streams/CustomHorizontalBar';
import SliderComponent from './streams/SliderComponent';

const App = () => {
	// console.log('test :')
	return (
		<GlobalState>
			<div className='ui container'>
				<Router history={createBrowserHistory}>
					<Layout>
						<Switch>
							<Route path='/' component={StreamList} exact />
							<Route path='/streams/slider' component={SliderComponent} exact />
							<Route path='/streams/table' component={CustomTable} exact />
							<Route
								path='/streams/bar'
								component={CustomHorizontalBar}
								exact
							/>
							<Route path='/streams/new' component={StreamCreate} exact />
							<Route path='/streams/edit/:id' component={StreamEdit} exact />
							<Route path='/streams/show/:id' component={StreamShow} exact />
							<Route
								path='/streams/delete/:id'
								component={StreamDelete}
								exact
							/>
						</Switch>
					</Layout>
				</Router>
			</div>
		</GlobalState>
	);
};
export default App;
