import React, { useEffect } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import createBrowserHistory from '../../history';
const StreamDelete = props => {
  const { id } = props.match.params;
  const { fetchStream } = props;
  useEffect(() => {
    if (!id.length) {
      fetchStream(id);
    }
  }, [id, fetchStream]);
  const renderActions = () => {
    const { id } = props.match.params;
    return (
      <>
        <button
          onClick={() => {
            props.deleteStream(id);
          }}
          className='ui button negative'
        >
          Delete !
        </button>
        <Link to='/' className='ui button'>
          ancel
        </Link>
      </>
    );
  };
  const renderContent = () => {
    if (!props.stream) {
      return 'Loading ...';
    }
    return `Are you sure you want to delete this stream ? ${props.stream.title} `;
  };
  return (
    <Modal
      title='Delete Stream'
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => createBrowserHistory.push('/')}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
