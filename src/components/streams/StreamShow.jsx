import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import flv from 'flv.js';

import { fetchStream } from '../../actions';
const StreamShow = props => {
    const videoRef = useRef(null);
    const inputRef = useRef(null);
    const { id } = props.match.params;
    useEffect((id) => {
        console.log(videoRef);
        props.fetchStream(id);
        buildPlayer();
    }, [id])
    // componentDidUpdate() {
    //     buildPlayer();
    // }
    const buildPlayer = () => {
        const player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        if (player || !props.stream) {
            return;
        }
        player.attachMediaElement(videoRef.current);
        player.load();
    }
    const handleSubmit = () => {
        console.log(`hello how are you ${inputRef.current.value} !`);
    }
    if (!props.stream) {
        return (
            <div>Loading...</div>
        );
    }
    const { title, description } = props.stream;
    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls />

            <h1>{title}</h1>

            <h2>{description}</h2>

            <input className='ui input' type="text" style={{ padding: '10px', borderRadius: '3px' }} ref={inputRef} />

            <button onClick={handleSubmit} >Enter</button>

        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    fetchStream: (data) => dispatch(fetchStream(data))
})
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}
export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);