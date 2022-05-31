/** @format */
import { Component } from 'react';
//   import PropTypes from 'prop-types';
class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};
	// static propTypes = {
	// 	children: PropTypes.oneOfType([
	// 		PropTypes.node,
	// 		PropTypes.arrayOf(PropTypes.node),
	// 	]).isRequired,
	// 	render: PropTypes.func.isRequired,
	// };
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true,
		});
	}
	render() {
		if (this.state.hasError) {
			return <p>Something went wrong !!</p>;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
