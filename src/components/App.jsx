/** @format */

import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import GlobalState from '../context/GlobalState';
import LoadingSpinner from './reusable/LoadingSpinner';
const Layout = lazy(() => import('../layout/Layout'));
const StreamCreate = lazy(() => import('./streams/StreamCreate'));
const StreamList = lazy(() => import('./streams/StreamList'));
const StreamShow = lazy(() => import('./streams/StreamShow'));
const StreamEdit = lazy(() => import('./streams/StreamEdit'));
const StreamDelete = lazy(() => import('./streams/StreamDelete'));
const Table = lazy(() => import('./streams/Table'));
const CustomHorizontalBar = lazy(() => import('./streams/CustomHorizontalBar'));
const ChartComponent = lazy(() => import('./streams/ChartComponent'));
const BarChart = lazy(() => import('./streams/BarChart'));
const SliderComponent = lazy(() => import('./streams/SliderComponent'));
const GridLayoutComponent = lazy(() => import('./streams/GridLayoutComponent'));
const Ratings = lazy(() => import('./streams/Ratings'));
const Board = lazy(() => import('./Board'));
// import Layout from '../layout/Layout';
// import StreamCreate from './streams/StreamCreate';
// import StreamList from './streams/StreamList';
// import StreamShow from './streams/StreamShow';
// import StreamEdit from './streams/StreamEdit';
// import StreamDelete from './streams/StreamDelete';
// import Table from './streams/Table';
// import CustomHorizontalBar from './streams/CustomHorizontalBar';
// import ChartComponent from './streams/ChartComponent';
// import BarChart from './streams/BarChart';
// import Board from './Board';
// import SliderComponent from './streams/SliderComponent';
// import GridLayoutComponent from './streams/GridLayoutComponent';
// import Ratings from './streams/Ratings';

const App = () => {
	// console.log('App : >');
	return (
		<GlobalState>
			<Suspense fallback={<LoadingSpinner />}>
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
							<Route path='/streams/ratings' exact>
								<Ratings />
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
			</Suspense>
		</GlobalState>
	);
};
export default App;
