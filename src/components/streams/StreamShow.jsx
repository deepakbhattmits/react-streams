import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import flv from 'flv.js';

import { fetchStream } from '../../actions';
class StreamShow extends Component {
    constructor(props) {
        super(props);
        this.videoRef = createRef();
        this.inputRef = createRef();
    }
    componentDidMount() {
        console.log(this.videoRef);
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }
    componentDidUpdate() {
        this.buildPlayer();
    }
    buildPlayer() {
        const { id } = this.props.match.params;
        if (this.player || !this.props.stream) {
            return;
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();

    }
    handleSubmit = () => {
        console.log(`hello how are you ${this.inputRef.current.value} !`);
    }
    render() {
        if (!this.props.stream) {
            return (
                <div>Loading...</div>
            );
        }
        const { title, description } = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls />

                <h1>{title}</h1>

                <h2>{description}</h2>

                <input className='ui input' type="text" style={{ padding: '10px', borderRadius: '3px' }} ref={this.inputRef} />

                <button onClick={this.handleSubmit} >Enter</button>

            </div>
        );
    }
};
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);