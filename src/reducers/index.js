/** @format */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
//    combineReducers from redux
export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer,
});
