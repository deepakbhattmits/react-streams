/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
	componentDidMount() {
		// console.log('GoogleAuth :');
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'1025575281278-q9him3ie1e89uj49dnlnicct7uvndgh5.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn === true) {
			return (
				<button onClick={() => this.auth.signOut()} className='btn btn-danger'>
					<i className='google icon' />
					Logout
				</button>
			);
		} else {
			return (
				<button onClick={() => this.auth.signIn()} className='btn btn-danger'>
					<i className='google icon' />
					Sign In with Google
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}
const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
