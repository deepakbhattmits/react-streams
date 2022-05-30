/** @format */
// types
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import streams from "../apis/streams";
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
//   createStream
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams/add", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_STREAM, payload: response?.data.stream });
  // navigate('/'); // programatic navigation
  return response;
};
export const fetchStreams = () => async (dispatch) => {
  // console.log('action fetchStreams > :');
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/update/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data.stream });
  // navigate('/'); // programatic navigation
  return response;
};
export const deleteStream = (id) => async (dispatch) => {
  const result = await streams.delete(`/streams/delete/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  return result;
  //  <Navigate  replace to='/'/>; // programatic navigation
};
