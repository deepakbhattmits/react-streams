/** @format */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";
const StreamDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);
  useEffect(() => {
    if (!id.length) {
      dispatch(fetchStream(id));
    }
  }, [id, dispatch]);
  const handleDelete = () => {
    dispatch(deleteStream(id))?.then((res) => {
      if (res.data.stream?.match(/stream deleted/i)) {
        navigate("/");
      }
    });
  };
  const renderActions = () => (
    <>
      <button onClick={handleDelete} className="ui button negative">
        Delete !
      </button>
      <Link to="/" className="ui button">
        cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) {
      return "Loading ...";
    }
    return (
      <>
        <p>Are you sure you want to delete this stream ?</p>
        <span>Stream name :</span>
        <strong>
          <em>{stream?.title}</em>
        </strong>
      </>
    );
  };
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => {
        navigate("/");
      }}
    />
  );
};

export default StreamDelete;
