/** @format */

import React from 'react';
import { createPortal } from 'react-dom';

const TableModal = props => {
	console.log('new modal :> ', props);

	return createPortal(
		<div
			onClick={props.onDismiss}
			className={`ui dimmer modals transition page ${
				props.active ? 'visible active' : 'hidden'
			}`}>
			<div
				onClick={e => {
					e.stopPropagation();
				}}
				className={`ui standard test modal transition scrolling ${
					props.active ? 'visible active' : 'hidden'
				}`}>
				<div className='header'>{props.title.toUpperCase()}</div>
				<div className='content'>
					{/* {!!props.content && (
						<ul>
							<li>{props.content.id}</li>
							<li>{props.content.name}</li>
							<li>{props.content.price}</li>
						</ul>
					)} */}
					<ul>
						{!!props.content &&
							props.content.map(item =>
								Object.values(item).map((el, i) => {
									return (
										<li key={i}>
											{el.id}-{el.postId}-{el.name}
										</li>
									);
								})
							)}
					</ul>
				</div>
				{/* <div className='actions'>{props.actions}</div> */}
			</div>
		</div>,
		document.querySelector('#modal')
	);
};
export default TableModal;
