/** @format */

import _ from "lodash";
// import _ from 'lodash';
//   lodash
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
export default streamReducer;
