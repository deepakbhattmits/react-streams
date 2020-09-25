/** @format */

import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history';
import GlobalState from '../context/GlobalState';
import LoadingSpinner from './reusable/LoadingSpinner';
import ErrorBoundary from '../reusable/ErrorBoundary';
// const CalendarGrid = lazy(() => import('./streams/CalendarGrid'));
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

const App = () => {
	// console.log('App :   >');
	return (
		<GlobalState>
			<Suspense fallback={<LoadingSpinner />}>
				<Router history={createBrowserHistory}>
					<Layout>
						<Switch>
							<Route path='/' exact>
								<ErrorBoundary>
									<StreamList />
								</ErrorBoundary>
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
							{/* <Route path='/streams/calendar' exact>
								<CalendarGrid />
							</Route> */}
						</Switch>
					</Layout>
				</Router>
			</Suspense>
		</GlobalState>
	);
};
export default App;
