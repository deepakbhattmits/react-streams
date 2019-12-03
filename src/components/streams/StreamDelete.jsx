import React, { Fragment, Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import createBrowserHistory from '../../history';
class StreamDelete extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions() {
        const { id } = this.props.match.params;
        return (
            <Fragment>
                <button onClick={() => { this.props.deleteStream(id) }}
                    className="ui button negative">
                    Delete !
                </button>
                <Link to='/' className="ui button">Cancel</Link>
            </Fragment>
        );
    };
    renderContent() {
        if (!this.props.stream) {
            return 'Loading ...';
        }
        return `Are you sure you want to delete this stream ? ${this.props.stream.title} `;
    }
    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => createBrowserHistory.push('/')}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);   