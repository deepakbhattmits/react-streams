/** @format */

import React from 'react';
import ScrollIndicator from '../reusable/ScrollIndicator';

import { Tab, Row, Col, Nav } from 'react-bootstrap';
const LayoutSideBar = props => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	return (
		<ScrollIndicator id='sidebar' className='app-sidebar'>
			<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
				{/* <Row>
					<Col sm={12}> */}
				<Nav variant='default' className='flex-row custom-tab'>
					<Nav.Item>
						<Nav.Link eventKey='first'>Tab 1</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='second'>Tab 2</Nav.Link>
					</Nav.Item>
				</Nav>
				{/* </Col>
				</Row>
				<Row> */}
				{/* <Col sm={12}> */}
				<Tab.Content>
					<Tab.Pane eventKey='first'>first</Tab.Pane>
					<Tab.Pane eventKey='second'>second</Tab.Pane>
				</Tab.Content>
				{/* </Col>
				</Row> */}
			</Tab.Container>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>

			<ul>
				{arr.map((el, i) => {
					return <li key={i}>{el}</li>;
				})}
			</ul>
		</ScrollIndicator>
	);
};
export default LayoutSideBar;
