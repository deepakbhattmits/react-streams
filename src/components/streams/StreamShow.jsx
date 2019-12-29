import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import flv from 'flv.js';

import { fetchStream } from '../../actions';
const StreamShow = props => {
  // console.log('test');
  const videoRef = useRef(null);
  const inputRef = useRef(null);
  const { id } = props.match.params;
  const { stream } = props;
  const buildPlayer = useCallback(() => {
    const player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    if (player || !stream) {
      return;
    }
    player.attachMediaElement(videoRef.current);
    player.load();
  }, [id, stream]);
  const handleSubmit = () => {
    console.log(`hello how are you ${inputRef.current.value} !`);
  };
  useEffect(() => {
    props.fetchStream(id);
    buildPlayer();
  }, [props, id, buildPlayer]);
  const { title, description } = props.stream;
  if (!props.stream) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />

      <h1>{title}</h1>

      <h2>{description}</h2>

      <input
        className='ui input'
        type='text'
        style={{ padding: '10px', borderRadius: '3px' }}
        ref={inputRef}
      />

      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchStream: data => dispatch(fetchStream(data))
});
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
