/** @format */

import axios from 'axios';
// baseURL added
export default axios.create({
	baseURL: 'http://localhost:5000',
});
