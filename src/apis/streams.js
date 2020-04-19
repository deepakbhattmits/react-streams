/** @format */

import axios from 'axios';
// baseURL for port 5000
export default axios.create({
	baseURL: 'http://localhost:5000',
});
