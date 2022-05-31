/** @format */

import { useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import flv from "flv.js";

import { fetchStream } from "../../actions";
const StreamShow = (props) => {
  // console.log('StreamShow :> ');
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const videoRef = useRef(null);
  const buildPlayer = useCallback(() => {
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    if (player || !stream) {
      return;
    }
    player.attachMediaElement(videoRef.current);
    player.load();
  }, [id, stream]);
  useEffect(() => {
    if (!stream) {
      props.fetchStream(id);
    }
    buildPlayer();
  }, [stream, props, id, buildPlayer]);
  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h2>{stream.description}</h2>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchStream: (data) => dispatch(fetchStream(data)),
});
// const mapStateToProps = (state, ownProps) => {
// 	return { stream: state.streams[ownProps.match.params.id] };
// };
export default connect(null, mapDispatchToProps)(StreamShow);
