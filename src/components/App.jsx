/** @format */

import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import GlobalState from "../context/GlobalState";
import LoadingSpinner from "./reusable/LoadingSpinner";
import ErrorBoundary from "../reusable/ErrorBoundary";
const Layout = lazy(() => import("../layout/Layout"));
const StreamCreate = lazy(() => import("./streams/StreamCreate"));
const StreamList = lazy(() => import("./streams/StreamList"));
const StreamShow = lazy(() => import("./streams/StreamShow"));
const StreamEdit = lazy(() => import("./streams/StreamEdit"));
const StreamDelete = lazy(() => import("./streams/StreamDelete"));
const Table = lazy(() => import("./streams/Table"));
const CustomHorizontalBar = lazy(() => import("./streams/CustomHorizontalBar"));
const ChartComponent = lazy(() => import("./streams/ChartComponent"));
const BarChart = lazy(() => import("./streams/BarChart"));
const SliderComponent = lazy(() => import("./streams/SliderComponent"));
const GridLayoutComponent = lazy(() => import("./streams/GridLayoutComponent"));
const Ratings = lazy(() => import("./streams/Ratings"));
const Board = lazy(() => import("./Board"));

const App = () => (
  <GlobalState>
    <Suspense fallback={<LoadingSpinner />}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <StreamList />
                </ErrorBoundary>
              }
            />
            <Route path="/streams/new" element={<StreamCreate />} />
            <Route path="/streams/edit/:id" element={<StreamEdit />} />
            <Route path="/streams/show/:id" element={<StreamShow />} />
            <Route path="/streams/delete/:id" element={<StreamDelete />} />
            <Route path="/grid" element={<GridLayoutComponent />} />
            <Route path="/game" element={<Board />} />
            <Route path="/streams/slider" element={<SliderComponent />} />
            <Route path="/streams/datatable" element={<Table />} />
            <Route path="/streams/ratings" element={<Ratings />} />
            <Route path="/streams/bar" element={<CustomHorizontalBar />} />
            <Route path="/streams/chart" element={<ChartComponent />} />
            <Route path="/streams/stack" element={<BarChart />} />
          </Routes>
        </Layout>
      </HashRouter>
    </Suspense>
  </GlobalState>
);
export default App;
