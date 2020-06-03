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
import Table from './streams/Table';
import CustomHorizontalBar from './streams/CustomHorizontalBar';
import ChartComponent from './streams/ChartComponent';
import BarChart from './streams/BarChart';
import Board from './Board';
import SliderComponent from './streams/SliderComponent';
import GridLayoutComponent from './streams/GridLayoutComponent';

const App = () => {
	// console.log('App >>');
	return (
		<GlobalState>
			{/* <div className='ui container'> */}
			<Router history={createBrowserHistory}>
				<Layout>
					<Switch>
						<Route path='/' exact>
							<StreamList />
						</Route>
						<Route path='/grid' exact>
							<GridLayoutComponent />
						</Route>
						<Route path='/game' exact>
							<Board />
						</Route>
						<Route path='/streams/slider' exact>
							<SliderComponent />
						</Route>

						<Route path='/streams/datatable' exact>
							<Table />
						</Route>
						<Route path='/streams/bar' exact>
							<CustomHorizontalBar />
						</Route>

						<Route path='/streams/chart' exact>
							<ChartComponent />
						</Route>
						<Route path='/streams/stack' exact>
							<BarChart />
						</Route>
						<Route path='/streams/new' exact>
							<StreamCreate />
						</Route>
						<Route path='/streams/edit/:id' exact>
							<StreamEdit />
						</Route>
						<Route path='/streams/show/:id' exact>
							<StreamShow />
						</Route>
						<Route path='/streams/delete/:id' exact>
							<StreamDelete />
						</Route>
					</Switch>
				</Layout>
			</Router>
			{/* </div> */}
		</GlobalState>
	);
};
export default App;
