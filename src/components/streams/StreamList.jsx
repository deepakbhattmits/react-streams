/** @format */

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
// import Modal from "../Modal";

const StreamList = () => {
  const [streams, setStreams] = useState([]);
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.userId);
  // const isSignedIn = useSelector(state => state.auth.isSignedIn); // auth token
  const streamsState = useSelector((state) => Object.values(state.streams));
  //   console.log('TEST : ',streamsState)

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <>
          <Link
            className="ui button primary"
            to={`/streams/edit/${stream._id}`}
          >
            EDIT
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream._id}`}
          >
            DELETE
          </Link>
        </>
      );
    }
  };

  const renderList = () => {
    if (!streams?.length) {
      return <span>No streams found...</span>;
    }
    return streams.map((stream) => {
      return (
        <div className="item" key={stream._id}>
          <div className="flex-div">
            <div className="left">
              <i className="large middle aligned clipboard outline icon"></i>
              <div className="content">
                <div className="header">
                  <Link to={`/streams/show/${stream._id}`}>{stream.title}</Link>
                </div>
                <div className="description">{stream.description}</div>
              </div>
            </div>
            <div className="right">{renderAdmin(stream)}</div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);
  useEffect(() => {
    if (!streams.length && streamsState?.length > streams?.length) {
      setStreams(streamsState);
    }
  }, [streams, streamsState]);
  return (
    <div>
      <h2>Streams</h2>
      {/* <Modal
        title="Delete Stream"
        content="HI"
        actions="SOME "
        onDismiss={() => {}}
      /> */}
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

export default StreamList;
