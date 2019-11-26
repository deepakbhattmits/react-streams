import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    renderButton(list) {
        if (list.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${list.id}`} className="btn btn-primary">
                        Edit
                        </Link>
                    <Link to={`/streams/delete/${list.id}`} className="btn btn-danger">
                        Delete
                        </Link>
                </div>
            );
        }
    }
    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className="btn btn-primary" to='/streams/new'>Create Stream</Link>
                </div>
            );
        }
    }
    renderList() {
        return this.props.streams.map(list => {
            return (
                <div className="item" key={list.id}>
                    {this.renderButton(list)}

                    <i className="large middle aligned icon camera" />

                    <div className="content">
                        <Link to={`/streams/show/${list.id}`}>
                            {list.title}
                            <div className="description">
                                {list.description}
                            </div>
                        </Link>
                    </div>

                </div>
            );
        });
    }
    render() {
        // console.log(this.props.streams);

        return (
            <div >
                <div className='heading'>
                    <h2>Streams</h2>
                </div>
                <div className="ui celled list">
                    {this.renderList()}

                </div>
                {this.renderCreateButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);