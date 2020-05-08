/** @format */

import axios from 'axios';
// added baseURL
export default axios.create({
	baseURL: 'http://localhost:5000',
});
