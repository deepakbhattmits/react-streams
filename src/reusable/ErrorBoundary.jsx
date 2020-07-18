/** @format */
import React, { Component } from 'react';
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	render() {
		if (this.state.hasError) {
			return <div>Error occurred.</div>;
		} else {
			return this.props.children;
		}
	}
}
export default ErrorBoundary;
