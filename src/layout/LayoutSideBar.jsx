// /** @format */

// import React, { Fragment } from 'react';
// import ScrollIndicator from './ScrollIndicator';
// import { Tab, Nav } from 'react-bootstrap';

// const LayoutSideBar = (props) => {
// 	function* range(start, end) {
// 		for (let i = start; i <= end; i++) {
// 			yield i;
// 		}
// 	}
// 	const arr = [...range(1, 20)];
// 	const dataFirst = [
// 		{
// 			role: 'BANANA',
// 			counts: {
// 				chat: {
// 					count: 2,
// 					active: false,
// 					schedule: false,
// 				},
// 				call: {
// 					count: 3,
// 					active: false,
// 					schedule: false,
// 				},
// 				ticket: {
// 					count: 4,
// 					active: true,
// 					schedule: false,
// 				},
// 				rest: {
// 					count: 5,
// 					active: false,
// 					schedule: false,
// 				},
// 				others: {
// 					count: 6,
// 					active: false,
// 					schedule: false,
// 				},
// 			},
// 		},
// 		{
// 			role: 'Admin',
// 			counts: {
// 				chat: {
// 					count: 2,
// 					active: false,
// 					schedule: false,
// 				},
// 				call: {
// 					count: 3,
// 					active: false,
// 					schedule: false,
// 				},
// 				ticket: {
// 					count: 4,
// 					active: false,
// 					schedule: true,
// 				},
// 				rest: {
// 					count: 5,
// 					active: false,
// 					schedule: false,
// 				},
// 				other: {
// 					count: 6,
// 					active: false,
// 					schedule: false,
// 				},
// 			},
// 		},
// 	];
// 	const dataSecond = [
// 		{
// 			role: 'BANANA',
// 			counts: {
// 				chat: {
// 					count: 2,
// 					active: true,
// 					schedule: false,
// 				},
// 				call: {
// 					count: 3,
// 					active: false,
// 					schedule: false,
// 				},
// 				ticket: {
// 					count: 4,
// 					active: false,
// 					schedule: false,
// 				},
// 				rest: {
// 					count: 5,
// 					active: false,
// 					schedule: false,
// 				},
// 				others: {
// 					count: 6,
// 					active: false,
// 					schedule: false,
// 				},
// 			},
// 		},
// 		{
// 			role: 'Admin',
// 			counts: {
// 				chat: {
// 					count: 2,
// 					active: false,
// 					schedule: true,
// 				},
// 				call: {
// 					count: 3,
// 					active: false,
// 					schedule: true,
// 				},
// 				ticket: {
// 					count: 4,
// 					active: false,
// 					schedule: true,
// 				},
// 				rest: {
// 					count: 5,
// 					active: false,
// 					schedule: false,
// 				},
// 				other: {
// 					count: 6,
// 					active: false,
// 					schedule: false,
// 				},
// 			},
// 		},
// 	];
// 	const renderHeader = () => {
// 		// console.log(' LayoutSideBar :  >', dataFirst[0].counts);
// 		return Object.keys(dataFirst[0].counts).map((head, i) => {
// 			// console.log('item label :', head);
// 			return (
// 				<div key={i} className='grid-item'>
// 					<span className='head'>{head} </span>
// 				</div>
// 			);
// 		});
// 	};
// 	const renderListFirst = () => {
// 		return (
// 			!!dataFirst &&
// 			dataFirst.map((el, i) => {
// 				console.log('RENDER LIST : ', el, el.counts);
// 				return (
// 					<Fragment key={i}>
// 						<div key={i} className='grid-item --role'>
// 							<span className='role'>{el.role}</span>
// 						</div>
// 						{Object.values(el.counts).map((inner, i) => {
// 							return (
// 								<div
// 									key={i}
// 									className={`grid-item ${
// 										inner.active
// 											? 'active'
// 											: `${inner.schedule ? 'schedule' : ''}`
// 									} `}>
// 									<span className='count'>{inner.count}</span>
// 								</div>
// 							);
// 						})}
// 					</Fragment>
// 				);
// 			})
// 		);
// 	};
// 	const renderListSecond = () => {
// 		return (
// 			!!dataSecond &&
// 			dataSecond.map((el, i) => {
// 				// console.log('RENDER LIST : ', el, el.counts);
// 				return (
// 					<Fragment key={i}>
// 						<div key={i} className='grid-item --role'>
// 							<span className='role'>{el.role}</span>
// 						</div>
// 						{Object.values(el.counts).map((inner, i) => {
// 							return (
// 								<div
// 									key={i}
// 									className={`grid-item ${
// 										inner.active
// 											? 'active'
// 											: `${inner.schedule ? 'schedule' : ''}`
// 									} `}>
// 									<span className='count'>{inner.count}</span>
// 								</div>
// 							);
// 						})}
// 					</Fragment>
// 				);
// 			})
// 		);
// 	};
// 	return (
// 		<ScrollIndicator id='sidebar' className='app-sidebar'>
// 			{renderListSecond()}
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<p>SiderBar</p>
// 			<ul>
// 				{arr.map((el, i) => {
// 					return <li key={i}>{el}</li>;
// 				})}
// 			</ul>
// 		</ScrollIndicator>
// 	);
// };
// export default LayoutSideBar;

const LayoutSideBar = () => <><h1>Layout sideBar</h1></>;
export default LayoutSideBar